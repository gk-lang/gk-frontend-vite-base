const SERVER_MAP = {
  test: {
    script: 'npm run build',
    name: '测试环境',
    host: '10.3.87.222',
    port: 22,
    username: 'root',
    password: 'dxh1234',
    distPath: 'dist', // 本地项目打包生成目录
    webPath: '/docker/nginx/openapi', // 发布至静态服务器的项目路径
    bakPath: '/docker/nginx/openapi-backup' // 服务器上原来项目的备份路径
  }
}
module.exports = SERVER_MAP
