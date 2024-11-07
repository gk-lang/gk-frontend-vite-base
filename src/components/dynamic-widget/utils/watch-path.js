export default function createDeepProxy(obj, callback, path = []) {
  const isObject = val => typeof val === 'object' && val !== null

  const handler = {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver)
      if (isObject(value)) {
        return createDeepProxy(value, callback, [...path, property])
      }
      return value
    },
    set(target, property, value, receiver) {
      const oldValue = Reflect.get(target, property, receiver)
      const result = Reflect.set(target, property, value, receiver)
      if (oldValue !== value) {
        const fullPath = [...path, property].join('.')
        callback(fullPath, oldValue, value)
      }
      return result
    },
    apply(target, thisArg, argArray) {
      const result = Reflect.apply(target, thisArg, argArray)
      if (Array.isArray(target)) {
        const fullPath = [...path].join('.')
        callback(fullPath, target, target)
      }
      return result
    }
  }

  if (Array.isArray(obj)) {
    return new Proxy(
      obj.map((item, index) =>
        createDeepProxy(item, callback, [...path, index])
      ),
      handler
    )
  }

  if (isObject(obj)) {
    return new Proxy(obj, handler)
  }

  return obj
}

// 测试对象
// const complexObject = {
//   foo: {
//     bar: {
//       baz: 123
//     },
//     array: [1, 2, { nested: 'value' }],
//     func: function () {
//       console.log('Function called')
//     }
//   }
// }

// 创建代理
//   const deepProxy = createDeepProxy(complexObject, (path, oldValue, newValue) => {
//     console.log(`Property '${path}' changed from '${oldValue}' to '${newValue}'`);
//   });

// 修改对象属性
//   deepProxy.foo.bar.baz = 456; // 控制台输出：Property 'foo.bar.baz' changed from '123' to '456'
//   deepProxy.foo.array[2].nested = 'updated'; // 控制台输出：Property 'foo.array.2.nested' changed from 'value' to 'updated'
//   deepProxy.foo.func(); // 控制台输出：Function called
