function run(func) {
    const cache = {
      status: 'pending',
      value: null,
    }
  
    const oldFetch = window.fetch
  
    // 修改请求逻辑
    window.fetch = function (...args) {
      // 判断是否有缓存
      if (cache.status === 'fulfilled') {
        return cache.value
      } else if (cache.status === 'rejected') {
        throw cache.value
      }
  
      // 发起请求,then或catch后保存数据
      const p = oldFetch(...args)
        .then((res) => res.json())
        // 保存值到缓存，并改变状态
        .then(
          (res) => {
            cache.status = 'fulfilled'
            cache.value = res
          },
          (err) => {
            cache.status = 'rejected'
            cache.value = err
          }
        )
  
      // 抛出错误，返回当前的promise
      throw p
    }
  
    try {
      func()
    } catch (err) {
      // 捕获到抛出的primise ，判断是否为promise
      if (err instanceof Promise) {
        // 再次执行
        err.then(func, func).finally(() => {
          // 还原fetch
          window.fetch = oldFetch
        })
      }
    }
  }
  
  run(main)