## 安装如下包
``` bash
npm i fs ora chalk dayjs inquirer archiver node-ssh child_process cross-env -D
```
## 注意

#### 报错一
``` js
// ReferenceError: require is not defined in ES module scope, you can use import instead
以上报错因为 `package.json` 中设置了 "type": "module",把这个给去掉
```

#### 报错二
``` js
// const ora = require('ora')
// Error [ERR_REQUIRE_ESM]: require() of ES Module

ora版本不对，可以安装  npm i ora@5.4.1 -D 
```

#### 报错三
``` js
// const chalk = require('chalk')
// Error [ERR_REQUIRE_ESM]: require() of ES Module

chalk版本不对，可以安装  npm i chalk@3.0.0 -D 
```