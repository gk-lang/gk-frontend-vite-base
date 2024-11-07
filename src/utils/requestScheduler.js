export default class RequestScheduler {
  constructor(concurrency = 5, maxRetries = 3) {
    this.concurrency = concurrency
    this.maxRetries = maxRetries
    this.queue = []
    this.activeCount = 0
    this.results = []
    this.pendingPromises = [] // 存储正在进行的所有Promise
  }

  async add(requestFunc, errorCallback = null) {
    const index = this.results.length
    const promise = new Promise((resolve, reject) => {
      this.queue.push({
        requestFunc,
        errorCallback,
        retries: 0,
        resolve,
        reject,
        index
      })
      this.processQueue()
    })
    this.results[index] = promise
    this.pendingPromises.push(promise)
    return promise
  }

  async processQueue() {
    while (this.activeCount < this.concurrency && this.queue.length > 0) {
      const { requestFunc, errorCallback, retries, resolve, reject, index } =
        this.queue.shift()
      this.activeCount++
      try {
        const result = await requestFunc()
        resolve(result)
      } catch (error) {
        if (retries < this.maxRetries) {
          console.error(
            `Request failed. Retrying... ({retries + 1}/{this.maxRetries})`
          )
          this.queue.push({
            requestFunc,
            errorCallback,
            retries: retries + 1,
            resolve,
            reject,
            index
          })
        } else {
          if (errorCallback) errorCallback(error)
          reject(error)
        }
      } finally {
        this.activeCount--
        this.processQueue()
      }
    }
  }

  waitForAll() {
    return Promise.all(this.pendingPromises) // 等待所有Promise完成
  }
}

// 示例用法：
// const requestScheduler = new RequestScheduler()

// 添加多个请求到队列
// async function fetchAPI(url) {
//   const response = await fetch(url)
//   if (!response.ok) throw new Error('Network response was not ok')
//   return response.json()
// }

// const urls = [
//   'https://api.example1.com/data',
//   'https://api.example2.com/data',
//   'https://api.example3.com/data'
// ]
// urls.forEach(url => {
//   requestScheduler.add(
//     () => fetchAPI(url),
//     error => console.error('Request failed:', error.message)
//   )
// })

// 等待所有请求完成
// requestScheduler
//   .waitForAll()
//   .then(results => {
//     console.log('All requests completed:', results)
//   })
//   .catch(error => {
//     console.error('Error occurred while waiting for all requests:', error)
//   })
