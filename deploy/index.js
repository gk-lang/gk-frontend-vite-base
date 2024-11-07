const fs = require('fs')
const ora = require('ora')
const dayjs = require('dayjs')
const inquirer = require('inquirer')
const archiver = require('archiver')
const { NodeSSH } = require('node-ssh')
const childProcess = require('child_process')
const { log, succeed, error, underline } = require('./utils.js')
const configMap = require('./config.js')

const env = process.env.NODE_ENV
// const envConfig = configMap[env]

const ssh = new NodeSSH()
const maxBuffer = 5000 * 1024
// 任务列表
let taskList = []

// 执行打包脚本
async function execBuild(config, index) {
  try {
    const { script } = config
    log(`(${index}) ${script}`)
    const spinner = ora('正在打包中\n')
    spinner.start()
    await new Promise((resolve, reject) => {
      childProcess.exec(
        script,
        { cwd: process.cwd(), maxBuffer: maxBuffer },
        e => {
          spinner.stop()
          if (e === null) {
            succeed(`打包成功 生成文件夹 ${underline(config.distPath)}`)
            resolve()
          } else {
            reject(e.message)
          }
        }
      )
    })
  } catch (e) {
    error('打包失败')
    error(e)
    process.exit(1)
  }
}

// 压缩打包后的文件成Zip
async function buildZip(config, index) {
  await new Promise((resolve, reject) => {
    log(`(${index}) 压缩文件夹 ${underline(config.distPath)} 成Zip`)
    const archive = archiver('zip', {
      zlib: { level: 9 },
      forceLocalTime: true
    }).on('error', e => {
      error(e)
    })

    const output = fs
      .createWriteStream(`${process.cwd()}/${config.distPath}.zip`)
      .on('close', e => {
        if (e) {
          error(`压缩zip出错: ${e}`)
          reject(e)
          process.exit(1)
        } else {
          succeed(`压缩成功 生成压缩文件 ${underline(`${config.distPath}.zip`)} `)
          resolve()
        }
      })

    archive.pipe(output)
    archive.directory(config.distPath, false)
    archive.finalize()
  })
}

// 连接ssh
async function connectSSH(config, index) {
  try {
    log(`(${index}) ssh连接 ${underline(config.host)}`)

    const { privateKey, passphrase, password } = config
    if (!privateKey && !password) {
      const answers = await inquirer.prompt([
        {
          type: 'password',
          name: 'password',
          message: '请输入服务器密码'
        }
      ])

      config.password = answers.password
    }

    !privateKey && delete config.privateKey
    !passphrase && delete config.passphrase

    const connectConfig = {
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password
    }

    await ssh.connect(connectConfig)
    succeed('ssh连接成功')
  } catch (e) {
    error(e)
    process.exit(1)
  }
}

// 备份远程文件
async function backupRemoteFile(config, index) {
  try {
    const { webPath, bakPath } = config
    const dirName = webPath.split('/')[webPath.split('/').length - 1]
    const zipFileName = `${dirName}-${dayjs().format(
      'YYYYMMDDHHmmss'
    )}.zip`

    log(`(${index}) 备份远程文件 ${underline(webPath)}`)

    await ssh.execCommand(`[ ! -d ${bakPath} ] && mkdir ${bakPath}`)

    await ssh.execCommand(`zip -q -r ${bakPath}/${zipFileName} ${webPath}`)

    succeed(`备份成功 备份至 ${underline(`${bakPath}/${zipFileName}`)}`)
  } catch (e) {
    error(e)
    process.exit(1)
  }
}

// 上传本地文件
async function uploadLocalFile(config, index) {
  try {
    const localFileName = `${config.distPath}.zip`
    const remoteFileName = `${config.webPath}.zip`
    const localPath = `${process.cwd()}/${localFileName}`

    log(`(${index}) 上传${underline(localFileName)}至服务器目录 ${underline(config.webPath)}`)

    const spinner = ora('正在上传中\n')

    spinner.start()

    await ssh.putFile(localPath, remoteFileName, null, {
      concurrency: 1
    })

    spinner.stop()
    succeed('上传成功')
  } catch (e) {
    error(`上传失败: ${e}`)
    process.exit(1)
  }
}

// 删除远程文件
async function removeRemoteFile(config, index) {
  try {
    const { webPath } = config

    log(`(${index}) 删除远程文件 ${underline(webPath)}`)

    await ssh.execCommand(`rm -rf ${webPath}/*`)

    succeed('删除成功')
  } catch (e) {
    error(e)
    process.exit(1)
  }
}

// 解压远程文件
async function unzipRemoteFile(config, index) {
  try {
      const { webPath } = config;
      const remoteFileName = `${webPath}.zip`;

      log(`(${index}) 解压远程文件 ${underline(remoteFileName)}`);

      // 创建临时目录来存储解压的文件
      const tempDir = `/${webPath}_temp`;
      await ssh.execCommand(`mkdir ${tempDir}`);

      // 解压到临时目录
      await ssh.execCommand(`unzip -o ${remoteFileName} -d ${tempDir}`);

      // 删除原始的 ZIP 文件
      await ssh.execCommand(`rm -rf ${remoteFileName}`);

      // 将临时目录中的内容移动到目标目录
      await ssh.execCommand(`mv ${tempDir}/* ${webPath}`);

      // 删除临时目录
      await ssh.execCommand(`rm -rf ${tempDir}`);

      succeed('解压成功');
  } catch (e) {
      error(e);
      process.exit(1);
  }
}


// 删除本地打包文件
function removeLocalFile(config, index) {
  const localPath = `${process.cwd()}/${config.distPath}`

  log(`(${index}) 删除本地打包文件 ${underline(localPath)}`)

  const remove = path => {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(file => {
        const currentPath = `${path}/${file}`
        if (fs.statSync(currentPath).isDirectory()) {
          remove(currentPath)
        } else {
          fs.unlinkSync(currentPath)
        }
      })
      fs.rmdirSync(path)
    }
  }

  // remove(localPath)
  fs.unlinkSync(`${localPath}.zip`)
  succeed('删除本地打包zip文件成功')
}

// 断开ssh
function disconnectSSH() {
  ssh.dispose()
}

// 创建任务列表
function createTaskList(config) {
  const {
    script,
    bakPath,
    isRemoveRemoteFile = true,
    isRemoveLocalFile = true
  } = config

  taskList = []
  // script && taskList.push(execBuild)
  taskList.push(buildZip)
  taskList.push(connectSSH)
  bakPath && taskList.push(backupRemoteFile)
  taskList.push(uploadLocalFile)
  isRemoveRemoteFile && taskList.push(removeRemoteFile)
  taskList.push(unzipRemoteFile)
  isRemoveLocalFile && taskList.push(removeLocalFile)
  taskList.push(disconnectSSH)
}

// 执行任务列表
async function executeTaskList(config) {
  for (const [index, execute] of new Map(
    taskList.map((execute, index) => [index, execute])
  )) {
    await execute(config, index + 1)
  }
}

// 检查环境是否正确
function checkEnvCorrect(config) {
  const keys = ['name', 'host', 'port', 'username', 'distPath', 'webPath']

  if (config) {
    keys.forEach(key => {
      if (!config[key] || config[key] === '/') {
        error(
          `配置错误: ${underline(`${env}环境`)} ${underline(
            `${key}属性`
          )} 配置不正确`
        )
        process.exit(1)
      }
    })
  } else {
    error('配置错误: 未指定部署环境或指定部署环境不存在')
    process.exit(1)
  }
}

async function startDeploy() {
  const currentTime = new Date().getTime()
  const envConfig = configMap[env]
  checkEnvCorrect(envConfig)
  createTaskList(envConfig)
  await executeTaskList(envConfig)
  succeed(
    `恭喜您，当前打包项目已在${underline(
      envConfig.name
    )}部署成功 耗时${(new Date().getTime() - currentTime) / 1000}s\n`
  )
  process.exit(0)
}

startDeploy()
