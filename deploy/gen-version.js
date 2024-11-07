#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// 获取dist目录路径（假设dist文件夹在当前工作目录下）
const distPath = path.resolve(__dirname, '../dist')

// 获取当前时间作为版本号
const version = new Date().toISOString()

// 构建版本信息对象
const versionInfo = {
  version: version
}
// 定义要插入的 HTML 脚本及其命名
const scriptName = 'APP_VERSION'
// 定义要插入的 HTML 脚本
const scriptToInject = `
  <script id="${scriptName}">
    window.__APP_VERSION__ = '${version}'
  </script>
`

// 遍历dist目录下的HTML文件
fs.readdir(distPath, (err, files) => {
  if (err) {
    console.error('读取dist目录时出错:', err)
    return
  }

  files.forEach(file => {
    if (file.endsWith('.html')) {
      const htmlFilePath = path.join(distPath, file)

      // 读取HTML文件内容
      fs.readFile(htmlFilePath, 'utf8', (err, data) => {
        if (err) {
          console.error(`读取HTML文件 ${file} 时出错:`, err)
          return
        }

        // 检查是否已经存在具有相同ID的脚本
        const regex = new RegExp(
          `<script\\s+id="${scriptName}"[^>]*>[\\s\\S]*?<\\/script>`
        )
        const scriptExists = regex.test(data)

        // 如果已存在相同ID的脚本，则替换，否则添加
        let modifiedHtml
        if (scriptExists) {
          modifiedHtml = data.replace(regex, scriptToInject)
          // console.log(`HTML文件 ${file} 中已存在相同ID的脚本，已替换`)
        } else {
          modifiedHtml = data.replace('</body>', `${scriptToInject}\n</body>`)
          // console.log(`HTML文件 ${file} 中不存在相同ID的脚本，已添加`)
        }

        // 写入修改后的HTML文件内容
        fs.writeFile(htmlFilePath, modifiedHtml, 'utf8', err => {
          if (err) {
            console.error(`写入HTML文件 ${file} 时出错:`, err)
            return
          }
          console.log(
            '\x1b[32m',
            '成功向dist/index.html文件注入版本信息:',
            version,
            '\x1b[0m'
          )
        })
      })
    }
  })
})
// 写入version.json文件
const versionFilePath = path.resolve(distPath, 'version.json')
fs.writeFileSync(versionFilePath, JSON.stringify(versionInfo, null, 2))
