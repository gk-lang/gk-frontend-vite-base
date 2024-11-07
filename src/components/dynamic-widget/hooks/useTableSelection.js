import { cloneDeep } from 'lodash-es'
import sha256 from 'crypto-js/sha256'
import {
  computed,
  ref,
  isRef,
  watch,
  reactive,
  onMounted,
  onUnmounted
} from 'vue'

// 每次滚动的像素值,px
const scrollSpace = 10
// 滚动刷新率,毫秒
const scrollSpeed = 20
// 边缘触发滚动的距离,px
const edgeMargin = 20
// 框选浮窗背景颜色，蓝色 rgb(0, 0, 245, 0.1)
const selectionBoxBgColor = 'rgb(173, 104, 238, 0.1)'
// 框选浮窗边框颜色  "蓝色：rgb(0, 0, 245)"
const selectionBoxBorderColor = 'rgb(173, 104, 238)'
// 框选中的cell的背景颜色，rgb(173, 104, 238 ,0.2) tomato
const selectedCellBgColor = ''
// 框选中的cell的class
const selectedCellClass = 'table-cell-selected'
// 框选中的行的背景颜色，rgb(43, 68, 144,0.5)
const selectedRowBgColor = ''
// 框选中的行的class
const selectedRowClass = 'table-row-selected'
// 是否显示框选窗口
const isShowSelectionBox = true

// 是否框选动作的过程中，设置表格行与单元格的样式
const isRealTimeUpdateRowAndCell = true
// 框选类型，cell
const selectionType = ''
// 是否多选模式
const isMultiSelectMode = false
// 是否反选前面选中的行
const isInvertSelectedRow = false
// 是否反选前面选中的单元格
const isInvertSelectedCell = false
// 是否设置Checkbox状态（el-table存在多选框时）
const isSetCheckboxStatus = false

// 滚动包裹层div路径
const tableWrapPath = [
  '.el-table__inner-wrapper',
  '.el-table__body-wrapper',
  '.el-scrollbar',
  '.el-scrollbar__wrap'
]

const tableCellComponentClass = ['el-checkbox']
// 判断是否相交
const intersects = {
  // 判断两个方块是否相交
  boxBox: function (box1, box2) {
    // x top-left corner of box、y top-left corner of box、w width of box、h height of box
    return (
      box1.x < box2.x + box2.w &&
      box1.x + box1.w > box2.x &&
      box1.y < box2.y + box2.h &&
      box1.y + box1.h > box2.y
    )
  }
}

function generateRandomHash(length) {
  // 定义可能的字符集
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let randomHash = ''

  for (let i = 0; i < length; i++) {
    // 随机选择一个字符，并添加到结果字符串
    randomHash += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    )
  }
  return randomHash
}

function insertHtmlAsString(target, htmlString) {
  let newNode = null
  if (target) {
    // 将字符串转换为DOM节点
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = htmlString
    newNode = tempDiv.firstElementChild
    // 追加所有转换后的子节点到目标元素
    if (newNode) {
      // 将新节点添加到目标元素
      target.appendChild(newNode)
    }
  } else {
    console.error('The target element could not be found!')
  }
  return newNode
}

function hasClassOrParentHasClass(element, rootElement, classNameList) {
  let result = null
  // 检查当前元素是否包含指定的class
  classNameList.forEach(className => {
    if (element.classList.contains(className)) {
      result = element
    }
  })
  if (result) return

  // 向上遍历父级元素
  while (element.parentNode && !result) {
    element = element.parentNode
    // 如果遍历到了document对象，停止搜索
    if (element === rootElement) {
      break
    }
    // 检查父级元素是否包含指定的class
    classNameList.forEach(className => {
      if (element.classList && element.classList.contains(className)) {
        result = element
      }
    })
  }
  // 如果没有找到指定的class，返回false
  return result
}
export function generateHash(obj, length) {
  const objString = stringifyWithFunctions(obj)
  const hash = sha256(objString).toString()
  return hash.substring(0, length)
}
export function stringifyWithFunctions(obj) {
  // 自定义函数转换
  const replacer = (key, value) => {
    if (typeof value === 'function') {
      return value.toString()
    }
    return value
  }
  return JSON.stringify(obj, replacer)
}
export function useTableSelection(elTable, tableProps, options) {
  // 当前处理的表格的hash码
  const tableHash = ref('')
  // el-table的dom
  let elTableDom = null
  // el-table的Ref
  const elTableRef = ref(null)
  // 当前table的样式表
  const tableSelectionStyle = ref(null)
  // 包裹表格的div元素，也就是出现滚动的div
  const tableWrapElPath = tableWrapPath.join(' ')
  // table表格所有的单元格
  const tableCells = ref([])
  // 框选对应的起始单元格
  let startCell = null
  let endCell = null
  // 当前框选中的单元格
  const selectedCells = ref([])
  const selectedRows = ref([])
  const allSelectedCells = ref([])
  const allSelectedRows = ref([])

  // 上次框选的状态保存
  let oldStartCell = null
  let oldEndCell = null
  const oldSelectedRows = ref([])
  const oldAllSelectedCells = ref([])
  const oldAllSelectedRows = ref([])

  // 是否正在框选
  const isSelecting = ref(false)
  // 是否多重框选
  const isMultiSelect = ref(false)
  // 是否按下了 Shift 键
  const isShiftPressed = ref(false)

  // 框选框dom
  const selectionBoxEl = ref(null)
  // 多重框选的浮层
  const multiSelectionBoxEl = ref(null)
  // 多重选择操作过程中相关数据
  const multiSelectionData = ref({})
  // 框选框起点坐标
  const selectionStart = reactive({ x: 0, y: 0 })
  // 框选框结束点坐标及宽高
  const selectionInfo = ref({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  })

  // 鼠标移动事件
  let mouseEvent = null
  // 滚动条滚动方向
  let direction = []
  // 滚动定时时间key
  let scrollTimeout = null
  function handleSelectstart(event) {
    return false
  }
  function handleMouseDown(event) {
    if (event.button !== 0) return
    // 检查是否按下了 Shift 键
    isShiftPressed.value = event.shiftKey
    // 检查是否按下了 Command 键（Mac）或 Ctrl 键（Windows）
    const isCommandOrCtrlPressed = event.metaKey || event.ctrlKey
    // 获取当前状态下所有的单元格
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    tableCells.value = tableWrapEl.querySelectorAll('.el-table__cell')
    if (!tableCells.value || !tableCells.value.length) return

    // 只响应鼠标左键
    if (event.button === 0) {
      // 对于需要动态设置复选框的形式，创建一个覆盖层，遮盖Checkbox，避免多选状态点击勾选冲突
      if (config.value.isSetCheckboxStatus) {
        createSelectionCheckboxMask()
      }

      // console.log('isClickCellComponent:',isClickCellComponent)
      // if(isClickCellComponent) return
      mouseEvent = null
      // 初始化框选逻辑
      isSelecting.value = true
      // 是否多重框选
      isMultiSelect.value =
        isCommandOrCtrlPressed || config.value.isMultiSelectMode
      // 插入全局样式，避免el-table自有样式与框选样式冲突
      insertGlobalStyle()
      // 记录上一次相关选中数据
      storeOldSelectedData()
      // 非多选时，清空因为多选而缓存的数据和样式
      if (!isMultiSelect.value) {
        // 对于实时更新样式的情况，及时清除，否则延后到mouseup清除
        if (config.value.isRealTimeUpdateRowAndCell) {
          removeSelectedRowClass()
          removeSelectedRowStyle()
          removeSelectedCellClass()
          removeSelectedCellStyle()
          oldSelectedRows.value = []
          oldAllSelectedCells.value = []
          oldAllSelectedRows.value = []
        }
        allSelectedCells.value = []
        selectedCells.value = []
      }
      // 记录起点位置
      const rect = tableWrapEl.getBoundingClientRect()
      if (selectionStart && isShiftPressed.value) {
        // 当shift键+点击时，计算结束cell
        endCell = getCurrentIntersectCell(event)
      } else {
        selectionStart.x = event.clientX - rect.left + tableWrapEl.scrollLeft
        selectionStart.y = event.clientY - rect.top + tableWrapEl.scrollTop
        // 记录起点cell,
        startCell = getCurrentIntersectCell(event)
        endCell = null
      }
      // 把上次框选的浮层，添加到多选box中
      addItemToMultiSelectionBox()
      // 更新框选窗口的id
      const dataId = generateRandomHash(6)
      selectionBoxEl.value.setAttribute('data-id', dataId)
      // selectionInfo会在updateSelection里面更新,然后watch监听selectionInfo会被触发，在watch回调中绘制框选浮窗的坐标
      updateSelectionInfo(event)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('selectstart', handleSelectstart)

    return false
  }

  function handleMouseMove(event) {
    if (!isSelecting.value) return

    if (isSelecting.value) {
      const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
      const rect = tableWrapEl.getBoundingClientRect()
      direction = []
      if (event.clientX > rect.right - edgeMargin) {
        direction.push('right')
      } else if (event.clientX < rect.left + edgeMargin) {
        direction.push('left')
      }
      if (event.clientY > rect.bottom - edgeMargin) {
        direction.push('down')
      } else if (event.clientY < rect.top + edgeMargin) {
        direction.push('up')
      }
      mouseEvent = event
      // console.log(direction)
      if (direction.length) {
        if (!scrollTimeout) {
          startAutoScroll()
        }
      } else {
        updateSelectionInfo()
        stopAutoScroll()
      }
    }
  }

  function handleMouseUp(event) {
    removeGlobalStyle()
    if (isSelecting.value) {
      isSelecting.value = false
      mouseEvent = null
      direction = []
      stopAutoScroll()
      // 处理非实时更新框选中的表格的行、单元格的样式信息
      if (!config.value.isRealTimeUpdateRowAndCell) {
        oldAllSelectedRows.value.forEach(item => {
          const rowEl = getRowElByRowIndex(item.sortRowIndex)
          // item.rowEl.style.backgroundColor = ''
          const selectedRowClassObj = config.value.selectedRowClass
          if (typeof selectedRowClassObj === 'string') {
            rowEl.classList.remove(selectedRowClassObj)
          } else if (Array.isArray(selectedRowClassObj)) {
            selectedRowClassObj.forEach(className => {
              rowEl.classList.remove(className)
            })
          }
        })
        oldAllSelectedCells.value.forEach(item => {
          item.cellEl.style.backgroundColor = ''
          const selectedCellClassObj = config.value.selectedCellClass
          if (typeof selectedCellClassObj === 'string') {
            item.cellEl.classList.remove(selectedCellClassObj)
          } else if (Array.isArray(selectedCellClassObj)) {
            selectedCellClassObj.forEach(className => {
              item.cellEl.classList.remove(className)
            })
          }
        })
        updateSelectionRowClassAndStyle()
        updateSelectionCellClassAndStyle()
        // updateSelectionRowCheckboxStatus();
      }
      // 保存上次选择的框选层
      addItemToMultiSelectionBox(() => {
        selectionBoxEl.value.style.display = 'none'
      })
      // 框选风格为空的情况设置停止框选时，隐藏框选框，因为这种情况会设置cell单元格背景色
      if (!config.value.selectionType) {
        selectionBoxEl.value.style.display = 'none'
      }
      if (typeof config.value.moving === 'function') {
        config.value.moving(selectedCells, allSelectedCells, selectedRows)
      }
      if (typeof config.value.finish === 'function') {
        config.value.finish(selectedCells, allSelectedCells, selectedRows)
      }
    }
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  function doScroll() {
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    const scrollDom = tableWrapEl

    if (direction.includes('right')) {
      scrollDom.scrollLeft += scrollSpace
    } else if (direction.includes('left')) {
      scrollDom.scrollLeft -= scrollSpace
    }
    if (direction.includes('up')) {
      scrollDom.scrollTop -= scrollSpace
    } else if (direction.includes('down')) {
      scrollDom.scrollTop += scrollSpace
    }

    // 同时更新框选层
    updateSelectionInfo()
    // 持续触发滚动
    if (isSelecting.value) {
      startAutoScroll()
    }
  }

  function startAutoScroll() {
    stopAutoScroll()
    scrollTimeout = setTimeout(() => doScroll(), scrollSpeed) // 设置新的滚动
  }

  function stopAutoScroll() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
      scrollTimeout = null
    }
  }

  // 更新当前框选窗位置信息，更新完成后，后面的watch监听里面绘制框选窗口
  function updateSelectionInfo(event) {
    const e = mouseEvent || event
    selectionInfo.value = ref({
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0
    })
    if (config.value.selectionType === 'cell') {
      endCell = getCurrentIntersectCell(e)
      if (!endCell) return
      const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
      const endBound = endCell.cellEl.getBoundingClientRect()
      const startBound = startCell.cellEl.getBoundingClientRect()
      const rect = tableWrapEl.getBoundingClientRect()
      let width = 0
      let height = 0
      const startRelativeX = startBound.x - rect.left + tableWrapEl.scrollLeft
      const startRelativeY = startBound.y - rect.top + tableWrapEl.scrollTop

      const endRelativeX = endBound.x - rect.left + tableWrapEl.scrollLeft
      const endRelativeY = endBound.y - rect.top + tableWrapEl.scrollTop

      if (startRelativeX <= endRelativeX) {
        width = endRelativeX + endBound.width - startRelativeX
        selectionInfo.value.left = startRelativeX
      } else {
        width = startRelativeX + startBound.width - endRelativeX
        selectionInfo.value.left = endRelativeX
      }
      // width -= 4;
      if (startRelativeY <= endRelativeY) {
        height = endRelativeY + endBound.height - startRelativeY
        selectionInfo.value.top = startRelativeY
      } else {
        height = startRelativeY + startBound.height - endRelativeY
        selectionInfo.value.top = endRelativeY
      }
      // height -= 4;
      selectionInfo.value.right = selectionInfo.value.left + width
      selectionInfo.value.bottom = selectionInfo.value.top + height
      selectionInfo.value.width = width
      selectionInfo.value.height = height
    } else if (!config.value.selectionType) {
      const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
      const rect = tableWrapEl.getBoundingClientRect()
      let eventClientX = e.clientX
      let eventCurrentY = e.clientY
      if (e.clientX >= rect.right - 5) {
        eventClientX = rect.right - 5
      }
      if (e.clientY >= rect.bottom - 5) {
        eventCurrentY = rect.bottom - 5
      }
      if (e.clientX < rect.left + 1) {
        eventClientX = rect.left + 1
      }
      if (e.clientY < rect.top) {
        eventCurrentY = rect.top
      }
      const currentX = eventClientX - rect.left + tableWrapEl.scrollLeft
      const currentY = eventCurrentY - rect.top + tableWrapEl.scrollTop

      const width = Math.abs(currentX - selectionStart.x)
      const height = Math.abs(currentY - selectionStart.y)

      selectionInfo.value.left = Math.min(currentX, selectionStart.x)
      selectionInfo.value.top = Math.min(currentY, selectionStart.y)
      selectionInfo.value.right = selectionInfo.value.left + width
      selectionInfo.value.bottom = selectionInfo.value.top + height
      selectionInfo.value.width = width
      selectionInfo.value.height = height
    }
  }

  // 获取鼠标当前位置所相交的单元格
  function getCurrentIntersectCell(event) {
    let result = null
    let clientX = event.clientX
    let clientY = event.clientY
    const point = {}

    // 记录起点位置
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    const rect = tableWrapEl.getBoundingClientRect()

    if (clientX < rect.left) {
      clientX = rect.left
    } else if (clientX > rect.right) {
      clientX = rect.right
    }
    if (clientY < rect.top) {
      clientY = rect.top
    } else if (clientY > rect.bottom) {
      clientY = rect.bottom
    }
    point.x = clientX - rect.left + tableWrapEl.scrollLeft
    point.y = clientY - rect.top + tableWrapEl.scrollTop

    for (let i = 0; i < tableCells.value.length; i++) {
      const cellEl = tableCells.value[i]
      const rect = tableWrapEl.getBoundingClientRect()
      const cellBounds = cellEl.getBoundingClientRect()
      const cellBox = {
        x: cellBounds.left - rect.left + tableWrapEl.scrollLeft,
        y: cellBounds.top - rect.top + tableWrapEl.scrollTop,
        w: cellBounds.width,
        h: cellBounds.height
      }
      const selectionBox = {
        x: point.x + 3,
        y: point.y + 3,
        w: 1,
        h: 1
      }
      if (intersects.boxBox(cellBox, selectionBox)) {
        result = {
          rowIndex: cellEl.parentNode.rowIndex,
          cellIndex: cellEl.cellIndex,
          cellEl: cellEl
        }
        break
      }
    }
    return result
  }

  // 获取当前框选窗所有相交的单元格
  function getAllIntersectCell(selectionRange) {
    const result = []
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    tableCells.value.forEach(cellEl => {
      const rect = tableWrapEl.getBoundingClientRect()
      const cellBounds = cellEl.getBoundingClientRect()
      const cellBox = {
        x: cellBounds.left - rect.left + tableWrapEl.scrollLeft,
        y: cellBounds.top - rect.top + tableWrapEl.scrollTop,
        w: cellBounds.width,
        h: cellBounds.height
      }
      const selectionBox = {
        x: selectionRange.left,
        y: selectionRange.top,
        w: selectionRange.width,
        h: selectionRange.height
      }
      if (intersects.boxBox(cellBox, selectionBox)) {
        result.push({
          rowIndex: cellEl.parentNode.rowIndex,
          cellIndex: cellEl.cellIndex,
          cellEl: cellEl
        })
      }
    })
    return result
  }

  // 设置选中行的class
  function setSelectedRowClass(rowIndex) {
    if (rowIndex !== undefined && rowIndex !== null) {
      const rowEl = getRowElByRowIndex(rowIndex)
      const selectedRowClassObj = config.value.selectedRowClass
      if (selectedRowClassObj && rowEl) {
        if (typeof selectedRowClassObj === 'string') {
          rowEl.classList.add(selectedRowClassObj)
        } else if (Array.isArray(selectedRowClassObj)) {
          selectedRowClassObj.forEach(className => {
            rowEl.classList.add(className)
          })
        }
      }
    }
  }

  // 清空选中行风格样式
  function removeSelectedRowClass(rowIndex) {
    const selectedRowClassObj = config.value.selectedRowClass
    if (!selectedRowClassObj || !selectedRowClassObj.length) return
    if (rowIndex === undefined || rowIndex === null) {
      const allSelectedRowsElList = getRowElByRowIndex()
      // const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
      // const allRowElList = tableWrapEl.querySelectorAll(
      //   '.el-scrollbar__view .el-table__body tr.el-table__row'
      // )
      allSelectedRowsElList.forEach(rowEl => {
        if (typeof selectedRowClassObj === 'string') {
          rowEl.classList.remove(selectedRowClassObj)
        } else if (Array.isArray(selectedRowClassObj)) {
          selectedRowClassObj.forEach(className => {
            rowEl.classList.remove(className)
          })
        }
      })
    } else {
      const rowEl = getRowElByRowIndex(rowIndex)
      if (!rowEl) return
      if (typeof selectedRowClassObj === 'string') {
        rowEl.classList.remove(selectedRowClassObj)
      } else if (Array.isArray(selectedRowClassObj)) {
        selectedRowClassObj.forEach(className => {
          rowEl.classList.remove(className)
        })
      }
    }
  }

  // 设置选中行的风格样式
  function setSelectedRowStyle(rowIndex) {
    if (rowIndex !== undefined && rowIndex !== null) {
      const rowEl = getRowElByRowIndex(rowIndex)
      if (rowEl) {
        rowEl.style.backgroundColor = config.value.selectedRowBgColor // 高亮颜色
      }
    }
  }

  // 清空选中行风格样式
  function removeSelectedRowStyle(rowIndex) {
    if (rowIndex === undefined || rowIndex === null) {
      const allSelectedRowsElList = getRowElByRowIndex()
      allSelectedRowsElList.forEach(rowEl => {
        rowEl.style.backgroundColor = ''
      })
    } else {
      const rowEl = getRowElByRowIndex(rowIndex)
      if (rowEl) {
        rowEl.style.backgroundColor = ''
      }
    }
  }

  // 设置选中单元格class
  function setSelectedCellClass(rowIndex, cellIndex) {
    if (
      rowIndex !== undefined &&
      rowIndex !== null &&
      cellIndex !== undefined &&
      cellIndex !== null
    ) {
      const cellEl = getCellElByRowCellIndex(rowIndex, cellIndex)
      const selectedCellClassObj = config.value.selectedCellClass
      if (selectedCellClassObj && cellEl) {
        if (typeof selectedCellClassObj === 'string') {
          cellEl.classList.add(selectedCellClassObj)
        } else if (Array.isArray(selectedCellClassObj)) {
          selectedCellClassObj.forEach(className => {
            cellEl.classList.add(className)
          })
        }
      }
    }
  }

  // 清空选中单元格class
  function removeSelectedCellClass(rowIndex, cellIndex) {
    const selectedCellClassObj = config.value.selectedCellClass
    if (!selectedCellClassObj || !selectedCellClassObj.length) return
    if (
      rowIndex === undefined ||
      rowIndex === null ||
      cellIndex === undefined ||
      cellIndex === null
    ) {
      const allSelectedCellsElList = getCellElByRowCellIndex()
      allSelectedCellsElList.forEach(cellEl => {
        if (typeof selectedCellClassObj === 'string') {
          cellEl.classList.remove(selectedCellClassObj)
        } else if (Array.isArray(selectedCellClassObj)) {
          selectedCellClassObj.forEach(className => {
            cellEl.classList.remove(className)
          })
        }
      })
    } else {
      const cellEl = getCellElByRowCellIndex(rowIndex, cellIndex)
      if (!cellEl) return
      if (typeof selectedCellClassObj === 'string') {
        cellEl.classList.remove(selectedCellClassObj)
      } else if (Array.isArray(selectedCellClassObj)) {
        selectedCellClassObj.forEach(className => {
          cellEl.classList.remove(className)
        })
      }
    }
  }

  // 设置选中单元格风格样式
  function setSelectedCellStyle(rowIndex, cellIndex) {
    if (
      rowIndex !== undefined &&
      rowIndex !== null &&
      cellIndex !== undefined &&
      cellIndex !== null
    ) {
      const cellEl = getCellElByRowCellIndex(rowIndex, cellIndex)
      if (cellEl) {
        cellEl.style.backgroundColor = config.value.selectedCellBgColor // 高亮颜色
      }
    }
  }

  // 清空选中单元格风格样式
  function removeSelectedCellStyle(rowIndex, cellIndex) {
    if (
      rowIndex === undefined ||
      rowIndex === null ||
      cellIndex === undefined ||
      cellIndex === null
    ) {
      const allSelectedCells = getCellElByRowCellIndex()
      allSelectedCells.forEach(cellEl => {
        cellEl.style.backgroundColor = ''
      })
    } else {
      const cellEl = getCellElByRowCellIndex(rowIndex, cellIndex)
      if (cellEl) {
        cellEl.style.backgroundColor = ''
      }
    }
  }

  // 把当前的框选浮窗添加到多选box里面
  function addItemToMultiSelectionBox(successCall) {
    if (
      config.value.selectionType === 'cell' &&
      isMultiSelect.value &&
      selectionBoxEl.value
    ) {
      if (selectionBoxEl.value.style.display === 'none') return

      const dataId = selectionBoxEl.value.getAttribute('data-id')
      // 原来如果存在，删除重新添加
      const oldBox = multiSelectionBoxEl.value.querySelector(
        `[data-id="${dataId}"]`
      )
      if (oldBox) {
        multiSelectionBoxEl.value.removeChild(oldBox)
      }
      const newBox = selectionBoxEl.value.cloneNode(true)
      // 边框宽度变化会导致覆盖单元格差一点，这里调整一下相关数据
      const newWidth =
        newBox.style.width.substr(0, newBox.style.width.length - 2) / 1 + 1
      const newHeight =
        newBox.style.height.substr(0, newBox.style.height.length - 2) / 1 + 1
      newBox.style.width = newWidth + 'px'
      newBox.style.height = newHeight + 'px'
      newBox.style.borderWidth = '1px'
      multiSelectionBoxEl.value.appendChild(newBox)
      if (typeof successCall === 'function') {
        successCall()
      }
    }
  }

  // 更新多选缓存的数据
  function updateMultiSelectionData() {
    if (selectionBoxEl.value) {
      const dataId = selectionBoxEl.value.getAttribute('data-id')
      if (!isMultiSelect.value) {
        multiSelectionData.value = {}
        multiSelectionBoxEl.value.innerHTML = ''
      }
      // 保存当前框选的相关数据
      multiSelectionData.value[dataId] = {
        // 当前框选窗口的位置
        selectionInfo: JSON.parse(JSON.stringify(selectionInfo.value)),
        // 当前框选中的单元格
        selectedCells: selectedCells.value.map(x => {
          return {
            rowIndex: x.rowIndex,
            sortRowIndex: x.sortRowIndex,
            cellIndex: x.cellIndex
            // cellEl: x.cellEl
          }
        })
      }
    }
  }

  // 更新所有选中的单元格(会去重)
  function updateAllSelectedCellsData() {
    let rowIndex = ''
    let cellIndex = ''
    let sortRowIndex = ''
    if (isMultiSelect.value) {
      allSelectedCells.value = [...oldAllSelectedCells.value]
      allSelectedRows.value = [...oldAllSelectedRows.value]
    } else {
      allSelectedCells.value = []
      allSelectedRows.value = []
    }
    const updateAllSelectedRows = () => {
      if (isMultiSelect.value) {
        const oIndex = oldAllSelectedRows.value.findIndex(
          y => y.rowIndex === rowIndex
        )
        const index = allSelectedRows.value.findIndex(
          y => y.rowIndex === rowIndex
        )
        if (oIndex === -1 && index === -1) {
          allSelectedRows.value.push({
            rowIndex: rowIndex,
            sortRowIndex: sortRowIndex
          })
        } else if (
          oIndex !== -1 &&
          index !== -1 &&
          config.value.isInvertSelectedRow
        ) {
          allSelectedRows.value.splice(index, 1)
        }
      } else {
        const index = allSelectedRows.value.findIndex(
          y => y.rowIndex === rowIndex
        )
        if (index === -1) {
          allSelectedRows.value.push({
            rowIndex: rowIndex,
            sortRowIndex: sortRowIndex
          })
        }
      }
    }
    const updateAllSelectedCells = () => {
      if (isMultiSelect.value) {
        const oIndex = oldAllSelectedCells.value.findIndex(
          y => y.rowIndex === rowIndex && y.cellIndex === cellIndex
        )
        const index = allSelectedCells.value.findIndex(
          y => y.rowIndex === rowIndex && y.cellIndex === cellIndex
        )
        if (oIndex === -1 && index === -1) {
          allSelectedCells.value.push({
            rowIndex: rowIndex,
            sortRowIndex: sortRowIndex,
            cellIndex: cellIndex
            // cellEl: x.cellEl
          })
        } else if (
          oIndex !== -1 &&
          index !== -1 &&
          config.value.isInvertSelectedCell
        ) {
          allSelectedCells.value.splice(index, 1)
        }
      } else {
        allSelectedCells.value.push({
          rowIndex: rowIndex,
          sortRowIndex: sortRowIndex,
          cellIndex: cellIndex
          // cellEl: x.cellEl
        })
      }
    }
    selectedCells.value.forEach(x => {
      rowIndex = getRowIndex(x.rowIndex)
      cellIndex = x.cellIndex
      sortRowIndex = x.rowIndex
      updateAllSelectedCells()
      updateAllSelectedRows()
    })

    if (isShiftPressed.value) {
      rowIndex = getRowIndex(oldStartCell.rowIndex)
      cellIndex = oldStartCell.cellIndex
      sortRowIndex = oldStartCell.rowIndex

      // Shift点击时，将不变原来的状态，选中的继续选中，未选中的依然不选中
      let i = allSelectedCells.value.findIndex(
        x => x.sortRowIndex === sortRowIndex && x.cellIndex === cellIndex
      )
      if (oldStartCell.isSelectedCell) {
        if (i === -1) {
          allSelectedCells.value.push({
            rowIndex: rowIndex,
            sortRowIndex: sortRowIndex,
            cellIndex: cellIndex
            // cellEl: oldStartCell.cellEl
          })
        }
      } else {
        if (i !== -1) {
          allSelectedCells.value.splice(i, 1)
        }
      }

      i = allSelectedRows.value.findIndex(y => y.sortRowIndex === sortRowIndex)
      if (oldStartCell.isSelectedRow) {
        if (i === -1) {
          allSelectedRows.value.push({
            rowIndex: rowIndex,
            sortRowIndex: sortRowIndex
            // rowEl: oldStartCell.cellEl.parentNode
          })
        }
      } else {
        if (i !== -1) {
          allSelectedRows.value.splice(i, 1)
        }
      }
    }
  }

  // 更新当前框选中的单元格数据（同时更新框选的所有单元格数据）
  function updateSelectedCellsData(selectionRange) {
    selectedCells.value = getAllIntersectCell(selectionRange)
    // 更新多选状态缓存的数据
    updateMultiSelectionData()
    // 计算所有选中的单元格(会去重)
    updateAllSelectedCellsData()
  }

  // 更新当前框选中的行数据（同时更新框选的所有单元格数据）
  function updateSelectedRowsData() {
    selectedRows.value = selectedCells.value.map(x => {
      return {
        rowIndex: x.rowIndex,
        sortRowIndex: x.rowIndex
        // rowEl: x.cellEl.parentNode
      }
    })
  }

  // 更新(新增、移除)选中行的class和style
  function updateSelectionRowClassAndStyle(type) {
    if (type === 'clear') {
      removeSelectedRowClass()
      removeSelectedRowStyle()
    } else {
      const isSetCheckboxStatus =
        elTableRef.value && elTableRef.value && config.value.isSetCheckboxStatus
      if (isSetCheckboxStatus) {
        elTableRef.value.clearSelection()
      }
      allSelectedRows.value.forEach(item => {
        setSelectedRowClass(item.sortRowIndex)
        setSelectedRowStyle(item.sortRowIndex)
        if (isSetCheckboxStatus) {
          const sortTableData = elTableRef.value.store.states.data.value
          const itemRow = sortTableData[item.sortRowIndex]
          elTableRef.value.toggleRowSelection(itemRow, true)
        }
      })
    }
  }

  // 更新(新增、移除)选中单元格的class和style
  function updateSelectionCellClassAndStyle(type) {
    if (type === 'clear') {
      removeSelectedCellClass()
      removeSelectedCellStyle()
    } else {
      allSelectedCells.value.forEach(item => {
        setSelectedCellClass(item.cellEl)
        setSelectedCellStyle(item.cellEl)
      })
    }
  }

  // 获取经过排序转换后的表格数据
  function getSortedTableData(data) {
    // 根据当前的排序状态对数据进行排序
    const { prop, order } = config.value.sort.value
    if (prop && order) {
      const tableData = cloneDeep(data)
      return tableData.sort((a, b) => {
        if (order === 'ascending') {
          return a[prop] > b[prop] ? 1 : -1
        } else {
          return a[prop] < b[prop] ? 1 : -1
        }
      })
    }
    return data
  }

  // 存储上次操作的相关数据
  function storeOldSelectedData() {
    oldStartCell = startCell
    oldEndCell = endCell
    if (oldStartCell) {
      const startCellIndex = allSelectedCells.value.findIndex(
        x =>
          x.sortRowIndex === oldStartCell.rowIndex &&
          x.cellIndex === oldStartCell.cellIndex
      )
      const startRowIndex = allSelectedRows.value.findIndex(
        x => x.sortRowIndex === oldStartCell.rowIndex
      )
      oldStartCell.isSelectedCell = startCellIndex !== -1
      oldStartCell.isSelectedRow = startRowIndex !== -1
    }
    oldSelectedRows.value = [...selectedRows.value]
    oldAllSelectedCells.value = [...allSelectedCells.value]
    oldAllSelectedRows.value = [...allSelectedRows.value]
  }

  // 处理表格的全选操作
  function handleCheckboxSelectAll(selection) {
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    const allRowElList = tableWrapEl.querySelectorAll(
      '.el-scrollbar__view .el-table__body tr.el-table__row'
    )
    const isSetCheckboxStatus =
      elTableRef.value && elTableRef.value && config.value.isSetCheckboxStatus
    if (isSetCheckboxStatus) {
      elTableRef.value.clearSelection()
    }
    // 全选
    if (selection && selection.length) {
      allSelectedRows.value = []
      selection.forEach(item => {
        elTableRef.value.toggleRowSelection(item, true)
      })

      allRowElList.forEach(rowEl => {
        const rowIndex = getRowIndex(rowEl.rowIndex)
        const sortRowIndex = rowEl.rowIndex
        setSelectedRowClass(sortRowIndex)
        setSelectedRowStyle(sortRowIndex)

        allSelectedRows.value.push({
          rowIndex: rowIndex,
          sortRowIndex: sortRowIndex
        })
      })
    } else {
      // 全不选
      allRowElList.forEach(rowEl => {
        const sortRowIndex = rowEl.rowIndex
        removeSelectedRowClass(sortRowIndex)
        removeSelectedRowStyle(sortRowIndex)
      })
      allSelectedRows.value = []
    }
  }

  // 创建一个覆盖层，遮盖Checkbox，避免多选状态点击勾选冲突
  function createSelectionCheckboxMask() {
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    const allSelectionCheckboxTds = tableWrapEl.querySelectorAll(
      '.el-scrollbar__view .el-table__body tr.el-table__row td.el-table-column--selection'
    )
    if (!allSelectionCheckboxTds) return
    for (let i = 0; i < allSelectionCheckboxTds.length; i++) {
      const selectionCheckboxTdEl = allSelectionCheckboxTds[i]
      const tdCellEl = selectionCheckboxTdEl.querySelector('.cell')
      const mask = tdCellEl.querySelector('.selection-checkbox-mask')
      if (!mask) {
        tdCellEl.style.position = 'relative'
        insertHtmlAsString(
          tdCellEl,
          `<div class="selection-checkbox-mask" style="position: absolute;width: 100%;height: 100%;z-index: 9;top: 0px;left: 0px;cursor: pointer;"></div>`
        )
      }
    }
  }

  // 创建多重框选的box, 用来放多重框选的浮层
  function createMultiSelectionBoxEl() {
    if (multiSelectionBoxEl.value) return
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    const tableWrapViewEl = tableWrapEl.querySelector('.el-scrollbar__view')
    multiSelectionBoxEl.value = insertHtmlAsString(
      tableWrapViewEl,
      `<div class="multi-selection-box"></div>`
    )
    // 创建一个新的style元素
    const style = document.createElement('style')
    document.head.appendChild(style)
    style.sheet.insertRule(
      `.el-table-${tableHash.value} .multi-selection-box { pointer-events: none;position: static; }`
    )
  }

  // 创建当前框选窗dom
  function createSelectionBoxEl() {
    if (selectionBoxEl.value) return
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    const tableWrapViewEl = tableWrapEl.querySelector('.el-scrollbar__view')
    // 框选框的dom
    selectionBoxEl.value = insertHtmlAsString(
      tableWrapViewEl,
      `<div class="selection-box"></div>`
    )
    // 创建一个新的style元素
    const style = document.createElement('style')
    document.head.appendChild(style)
    style.sheet.insertRule(
      `.el-table-${tableHash.value} .selection-box { pointer-events: none;position: absolute;top: 0px;z-index: 9;border-width: 2px;border-style: solid;display: none; }`
    )
  }

  // 更新当前框选窗dom
  function updateSelectionBoxEl(val) {
    if (config.value.isShowSelectionBox) {
      selectionBoxEl.value.style.left = val.left + 'px'
      selectionBoxEl.value.style.top = val.top + 'px'
      selectionBoxEl.value.style.width = val.width + 'px'
      selectionBoxEl.value.style.height = val.height + 'px'

      selectionBoxEl.value.style.backgroundColor =
        config.value.selectionBoxBgColor
      selectionBoxEl.value.style.borderColor =
        config.value.selectionBoxBorderColor

      selectionBoxEl.value.style.pointerEvents = 'none'
      selectionBoxEl.value.style.position = 'absolute'
      selectionBoxEl.value.style.zIndex = 9
      selectionBoxEl.value.style.borderWidth = '2px'
      selectionBoxEl.value.style.borderStyle = 'solid'

      if (isSelecting.value && (val.width > 0 || val.height > 0)) {
        selectionBoxEl.value.style.display = 'block'
      }
    }
  }

  function insertGlobalStyle() {
    if (tableSelectionStyle.value) {
      removeGlobalStyle()
    }
    setTimeout(() => {
      // 创建一个新的style元素
      tableSelectionStyle.value = document.createElement('style')
      tableSelectionStyle.value.id = 'style-' + tableHash.value
      document.head.appendChild(tableSelectionStyle.value)

      // 去除table中文本框选时导致的文字选中效果
      tableSelectionStyle.value.sheet.insertRule(
        `.el-table-${tableHash.value} .cell { -webkit-user-select: none !important;-moz-user-select: none !important;-khtml-user-select: none !important;-ms-user-select: none !important;-o-user-select: none !important;user-select: none !important; }`
      )
      tableSelectionStyle.value.sheet.insertRule(
        `.el-table-${tableHash.value} .tr { -webkit-user-select: none !important;-moz-user-select: none !important;-khtml-user-select: none !important;-ms-user-select: none !important;-o-user-select: none !important;user-select: none !important; }`
      )
      tableSelectionStyle.value.sheet.insertRule(
        `.el-table-${tableHash.value} { -webkit-user-select: none !important;-moz-user-select: none !important;-khtml-user-select: none !important;-ms-user-select: none !important;-o-user-select: none !important;user-select: none !important; }`
      )
      // 去除hover时的背景色
      tableSelectionStyle.value.sheet.insertRule(
        `.el-table-${tableHash.value} .el-table__body tr { background-color: unset !important;background: unset !important; transition: unset !important;}`
      )
      tableSelectionStyle.value.sheet.insertRule(
        `.el-table-${tableHash.value} .el-table__body tr>td.el-table__cell { background-color: unset !important;background: unset !important; transition: unset !important;}`
      )
      tableSelectionStyle.value.sheet.insertRule(
        `.el-table.el-table--enable-row-transition .el-table__body td.el-table__cell { transition: unset !important;}`
      )
      // 添加移动中的class样式
      const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
      tableWrapEl.classList.add('selection-moving')
      console.log('tableHash.value:', tableHash.value)
    })
  }

  function removeGlobalStyle() {
    if (tableSelectionStyle.value) {
      tableSelectionStyle.value.remove()
      tableSelectionStyle.value = null
    }
    // 移除移动中的class样式
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    tableWrapEl.classList.remove('selection-moving')
  }

  function getRowIndex(sortRowIndex) {
    const sortTableData = elTableRef.value.store.states.data.value
    const tableData = elTableRef.value.store.states._data.value
    const sortRow = sortTableData[sortRowIndex]
    const rowIndex = tableData.findIndex(
      x => generateHash(x, 6) === generateHash(sortRow, 6)
    )
    return rowIndex
  }

  function getSortRowIndex(rowIndex) {
    const sortTableData = elTableRef.value.store.states.data.value
    const tableData = elTableRef.value.store.states._data.value
    const row = tableData[rowIndex]
    const sortRowIndex = sortTableData.findIndex(
      x => generateHash(x, 6) === generateHash(row, 6)
    )
    return sortRowIndex
  }

  // 获取行dom元素
  function getRowElByRowIndex(rowIndex) {
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    const allRowElList = tableWrapEl.querySelectorAll(
      '.el-scrollbar__view .el-table__body tr.el-table__row'
    )
    if (rowIndex === undefined || rowIndex === null) {
      const allSelectedRowsElList = []
      allSelectedRows.value.forEach(item => {
        for (let i = 0; i < allRowElList.length; i++) {
          const elNode = allRowElList[i]
          if (elNode.rowIndex === item.sortRowIndex) {
            allSelectedRowsElList.push(elNode)
            break
          }
        }
      })
      return allSelectedRowsElList
    } else {
      let rowEl = null
      for (let i = 0; i < allRowElList.length; i++) {
        const elNode = allRowElList[i]
        if (elNode.rowIndex === rowIndex) {
          rowEl = elNode
          break
        }
      }
      return rowEl
    }
  }

  // 获取行dom元素
  function getCellElByRowCellIndex(rowIndex, cellIndex) {
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    const allCellElList = tableWrapEl.querySelectorAll(
      '.el-scrollbar__view .el-table__body tr.el-table__row td.el-table__cell'
    )
    if (
      rowIndex !== undefined &&
      rowIndex !== null &&
      cellIndex !== undefined &&
      cellIndex !== null
    ) {
      let cellEl = null
      for (let i = 0; i < allCellElList.length; i++) {
        const elNode = allCellElList[i]
        if (elNode.rowIndex === rowIndex && elNode.cellIndex === cellIndex) {
          cellEl = elNode
          break
        }
      }
      return cellEl
    } else {
      const allSelectedCellsElList = []
      allSelectedCells.value.forEach(item => {
        for (let i = 0; i < allCellElList.length; i++) {
          const elNode = allCellElList[i]
          if (
            elNode.rowIndex === item.sortRowIndex &&
            elNode.cellIndex === item.cellIndex
          ) {
            allSelectedCellsElList.push(elNode)
            break
          }
        }
      })
      return allSelectedCellsElList
    }
  }

  function initElTableDom() {
    let result = null
    if (isRef(elTable)) {
      result = elTable.value.$el
      elTableRef.value = elTable.value
    } else if (typeof elTable === 'string') {
      result = document.getElementById(elTable)
      if (!result) {
        result = document.querySelector(elTable)
      }
    } else {
      result = elTable
    }
    if (!result) {
      console.error(
        'useTableSelection 钩子初始化错误，未识别到el-table的dom元素，请检查传入的参数!'
      )
    }
    return result
  }

  function init() {
    elTableDom = initElTableDom()
    if (!elTableDom) return
    // 生成表格指纹，保证当前hook只处理传入的table
    tableHash.value = generateRandomHash(6)
    setTimeout(() => {
      elTableDom.classList.add(`el-table-${tableHash.value}`)
    })

    // table包裹层的dom
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    tableWrapEl.addEventListener('mousedown', handleMouseDown)
    const tableWrapViewEl = tableWrapEl.querySelector('.el-scrollbar__view')
    tableWrapViewEl.style.position = 'relative'
    // 创建当前框选窗口
    createSelectionBoxEl()
    // 创建多选框选最外层的box
    createMultiSelectionBoxEl()
  }

  function destroy() {
    removeGlobalStyle()
    const tableWrapEl = elTableDom.querySelector(tableWrapElPath)
    tableWrapEl.removeEventListener('mousedown', handleMouseDown)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const config = computed(() => {
    const r = {
      selectionBoxBgColor,
      selectionBoxBorderColor,
      selectedRowClass,
      selectedRowBgColor,
      selectedCellClass,
      selectedCellBgColor,
      isShowSelectionBox,
      isRealTimeUpdateRowAndCell,
      selectionType,
      isMultiSelectMode,
      isInvertSelectedRow,
      isInvertSelectedCell,
      isSetCheckboxStatus,
      moving: () => {},
      finish: () => {},
      ...options
    }
    if (!r.multipleSelection) {
      r.multipleSelection = {
        value: []
      }
    }
    return r
  })

  // watch(
  //   () => config.value.multipleSelection.value,
  //   nv => {
  //     if (!nv || !nv.length) {
  //       handleCheckboxSelectAll([])
  //     }
  //   }
  // )
  // watch(
  //   () => config.value.sort.value,
  //   nv => {
  //     const { prop, order } = nv
  //     if (prop && order) {
  //       handleCheckboxSelectAll([])
  //     }
  //   }
  // )
  const tableStateSort = computed(() => {
    return {
      sortProp: elTableRef.value?.store?.states?.sortProp?.value || '',
      sortOrder: elTableRef.value?.store?.states?.sortOrder?.value || ''
    }
  })

  const multipleSelection = computed(() => {
    return elTableRef.value?.store?.states?.selection?.value || []
  })

  watch(
    () => selectionInfo.value,
    val => {
      if (tableProps.isUseTableSelection) {
        requestAnimationFrame(() => {
          // console.log("first", allSelectedCells.value);
          if (config.value.isRealTimeUpdateRowAndCell) {
            updateSelectionRowClassAndStyle('clear')
            updateSelectionCellClassAndStyle('clear')
          }

          if (config.value.isShowSelectionBox) {
            updateSelectionBoxEl(val)
          }
          // 更新当前框选中的单元格数据
          updateSelectedCellsData(val)
          // 更新当前选中行数据
          updateSelectedRowsData()
          // 实时更新框选中的表格的行、单元格的样式信息
          if (config.value.isRealTimeUpdateRowAndCell) {
            updateSelectionRowClassAndStyle()
            updateSelectionCellClassAndStyle()
          }
          if (typeof config.value.moving === 'function') {
            config.value.moving(selectedCells, allSelectedCells, selectedRows)
          }
        })
      }
    }
  )

  watch(
    () => elTableRef.value,
    val => {
      if (val) {
        if (tableProps.isUseTableSelection) {
          destroy()
          init()
        }
      }
    }
  )

  watch(
    () => tableStateSort.value,
    sort => {
      if (tableProps.isUseTableSelection) {
        updateSelectionRowClassAndStyle('clear')
        updateSelectionCellClassAndStyle('clear')
        allSelectedRows.value.forEach(x => {
          x.sortRowIndex = getSortRowIndex(x.rowIndex)
        })
        updateSelectionRowClassAndStyle()
        updateSelectionCellClassAndStyle()
      }
    }
  )
  watch(
    () => multipleSelection.value,
    nv => {
      if (!nv || !nv.length) {
        handleCheckboxSelectAll([])
      }
    }
  )
  onMounted(() => {
    if (tableProps.isUseTableSelection) {
      init()
    }
  })
  onUnmounted(() => {
    if (tableProps.isUseTableSelection) {
      destroy()
    }
  })

  return {
    init,
    destroy,
    isSelecting,
    selectedCells,
    allSelectedCells,
    allSelectedRows,
    handleCheckboxSelectAll
  }
}
