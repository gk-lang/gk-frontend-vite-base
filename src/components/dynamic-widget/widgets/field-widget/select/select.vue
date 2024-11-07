<template>
  <div :class="['widgets-select', widgetRootClass]">
    <el-select
      v-bind="widgetAttrs"
      v-model="inputValue"
      :loading="remoteSearchLoading"
      :remote-method="debounceRemoteSearch"
      @change="change"
      @visible-change="visibleChange"
      @remove-tag="removeTag"
      @clear="clear"
      @blur="blur"
      @focus="focus"
      @keyup.enter="enterRemoteSearch"
    >
      <template
        #header
        v-if="widgetAttrs.multiple && widgetOptions && widgetOptions.length"
      >
        <el-checkbox
          v-model="checkAll"
          :indeterminate="indeterminate"
          @change="handleCheckAll"
        >
          选择全部
        </el-checkbox>
      </template>
      <el-option
        v-for="item in widgetOptions"
        v-bind="item"
        :key="item.value"
      />
    </el-select>
  </div>
</template>
<script setup>
import { ElSelect, ElCheckbox, ElOption } from "element-plus";
import { ref, computed, watch, nextTick } from "vue";
import service from "@/http";
import { useWidgetBase, baseProps } from "../../../hooks/useWidgetBase.js";

const emits = defineEmits(["notify", "update:modelValue"]);
const props = defineProps({
  ...baseProps("select"),
});
const { dictKeyData, formDataKey, widgetValue, widgetAttrs, widgetRootClass } =
  useWidgetBase(props, emits);
const checkAll = ref(false);
const indeterminate = ref(false);
const remoteSearchLoading = ref(false);
const remoteSearchData = ref([]);
const remoteSearchPage = ref({
  page_num: 1,
  page_size: 50,
  total_num: 0,
});
const oldSearchValue = ref(Date.now() + "");
const searchValue = ref("");
const selectRow = ref({});

const inputValue = computed({
  get() {
    let value = "";
    if (widgetAttrs.value.remote && widgetValue.value) {
      value = widgetValue.value.inputValue;
    } else {
      value = widgetValue.value || "";
    }
    return value;
  },
  set(value) {
    if (widgetAttrs.value.remote) {
      nextTick(() => {
        widgetValue.value = {
          ...widgetValue.value,
          inputValue: value || "",
          searchValue: searchValue.value || "",
          selectRow: widgetOptions.value.find((x) => x.value === value) || null,
        };
      });
    } else {
      widgetValue.value = value || "";
    }
  },
});

const widgetOptions = computed({
  get() {
    if (widgetAttrs.value.remote) {
      if (remoteSearchData.value.length) {
        return remoteSearchData.value;
      } else if (
        !remoteSearchData.value.length &&
        widgetValue.value.inputValue &&
        widgetValue.value.selectRow
      ) {
        return [
          {
            ...widgetValue.value.selectRow,
          },
        ];
      }
    } else if (props.widgetInfo.dictKey) {
      return dictKeyData.value;
    } else if (widgetAttrs.value.options && widgetAttrs.value.options.length) {
      return props.widgetInfo.widgetAttrs.options;
    }
    return [];
  },
});

watch(()=>inputValue, (val) => {
  if (widgetAttrs.value.multiple) {
    if (val.length === 0) {
      checkAll.value = false;
      indeterminate.value = false;
    } else if (val.length === widgetOptions.value.length) {
      checkAll.value = true;
      indeterminate.value = false;
    } else {
      indeterminate.value = true;
    }
  }
});

function enterRemoteSearch() {
  setTimeout(() => {
    debounceRemoteSearch.cancel();
    oldSearchValue.value = Date.now() + "";
    doRemoteSearch();
  });
}

// 防抖
const debounceRemoteSearch = debounce(
  function (val) {
    doRemoteSearch(val);
  },
  500,
  true
);

async function doRemoteSearch(val) {
  if (searchValue.value === oldSearchValue.value) {
    return;
  }
  console.log("oldSearchValue:", oldSearchValue.value);
  console.log("searchValue:", searchValue.value);
  oldSearchValue.value = searchValue.value;
  remoteSearchLoading.value = true;
  if (widgetAttrs.value.remoteSearchMethodKey) {
    emits("notify", {
      eventType: "remoteSearch",
      formDataKey: formDataKey.value,
      widgetValue,
      widgetInfo: props.widgetInfo,
      remoteSearchPage,
      searchValue,
      selectRow,
      remoteSearchMethodKey: widgetAttrs.value.remoteSearchMethodKey,
      remoteSearchParams: widgetAttrs.value.remoteSearchParams,
      resolve: (data, totalNum) => {
        remoteSearchLoading.value = false;
        remoteSearchData.value = data;
        remoteSearchPage.value.total_num = totalNum;
      },
    });
  } else if (widgetAttrs.value.remoteSearchUrl) {
    try {
      const resp = await service({
        url: `${widgetAttrs.value.remoteSearchUrl}`,
        method: "post",
        data: {
          ...widgetAttrs.value.remoteSearchParams,
          ...remoteSearchPage.value,
          keyWords: searchValue.value || "",
        },
      });
      remoteSearchLoading.value = false;
      remoteSearchData.value = resp?.data || [];
      remoteSearchPage.value.total_num = resp?.total_num || 0;
      remoteSearchData.value.forEach((item) => {
        item.value = item[widgetAttrs.value.optionValueMapKey];
        item.label = item[widgetAttrs.value.optionLabelMapKey];
      });
    } catch (error) {
      remoteSearchLoading.value = false;
    }
  }

  setTimeout(() => {
    if (remoteSearchLoading.value) {
      remoteSearchLoading.value = false;
      remoteSearchData.value = [];
      remoteSearchPage.value.total_num = 0;
    }
  }, 3000);
}

const handleCheckAll = (val) => {
  indeterminate.value = false;
  if (val) {
    widgetValue.value = widgetOptions.value.map((_) => _.value);
  } else {
    widgetValue.value = [];
  }
};

// 去除特殊字符~!@#$^-&*()=|{}':;',\[].<>/?~！@#￥……&*（）——|{}【】'；：""'。，、？
function trimSpecial(string) {
  // 替换字符串中的所有特殊字符（包含空格）
  if (string !== "") {
    const pattern =
      // eslint-disable-next-line no-useless-escape
      /[`~!@#$^\-&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
    string = string.replace(pattern, "");
  }
  return string;
}

function eventNotify(eventType, event) {
  setTimeout(() => {
    emits("notify", {
      event,
      eventType,
      formDataKey: formDataKey.value,
      widgetValue,
      widgetInfo: props.widgetInfo,
    });
  });
}

function change(event) {
  eventNotify("change", event);
}
function visibleChange(event) {
  eventNotify("visible-change", event);
}
function removeTag(event) {
  eventNotify("remove-tag", event);
}
function clear(event) {
  eventNotify("clear", event);
}
function blur(event) {
  eventNotify("blur", event);
}
function focus(event) {
  eventNotify("focus", event);
  // if (!widgetOptions.value?.length) {
  //   doRemoteSearch(searchValue.value || '')
  // }
}

function debounce(fn, delay, immediate = false) {
  // 1.定义一个定时器, 保存上一次的定时器
  let timer = null;
  let isInvoke = false;

  // 2.真正执行的函数
  const _debounce = function (...args) {
    searchValue.value = trimSpecial(args[0] || "");
    console.log("searchValue:", searchValue.value);
    return new Promise((resolve, reject) => {
      // 取消上一次的定时器
      if (timer) clearTimeout(timer);

      // 判断是否需要立即执行
      if (immediate && !isInvoke) {
        const result = fn.apply(this, args);
        resolve(result);
        isInvoke = true;
      } else {
        // 延迟执行
        timer = setTimeout(() => {
          // 外部传入的真正要执行的函数, 拿到函数返回值并调用resolve
          const result = fn.apply(this, args);
          resolve(result);
          isInvoke = false;
          timer = null;
        }, delay);
      }
    });
  };

  // 封装取消功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    isInvoke = false;
  };

  return _debounce;
}
</script>
<style lang="scss">
.widgets-select {
  width: 100%;
}
.el-select__popper .el-select-dropdown .el-select-dropdown__header {
  padding: 5px;
}
</style>
