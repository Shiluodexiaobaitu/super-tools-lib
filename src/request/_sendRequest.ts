/**
 * 发送网络请求
 * 
 * @since 1.62.0
 * @param {string} ops.method - 请求方法，如 GET、POST
 * @param {string} ops.url - 请求地址
 * @param {Object} ops.data - 请求数据，可选
 * @returns {Promise} 返回 Promise 对象
 * @example
 * 
 * ```ts
 * import { request } from 'super-tools-lib'
 * 
 * request({
 *  method: 'POST',
 *  url: 'https://xxxxxxx',
 *  data: { username: '张三', password: '123456' }
 * }).then(res=>{
 * 
 * })
 * ```
 */
export const sendRequest = (ops: { method: string, url: string, data?: Record<string, any> }) => {
    const { method, url, data } = ops
    return new Promise(function (resolve, reject) {
        // 创建 XMLHttpRequest 对象
        const xhr = new XMLHttpRequest()
        // 监听 readyState 变化事件
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // 请求成功，调用成功回调函数
                    resolve(xhr.responseText)
                } else {
                    // 请求失败，调用失败回调函数
                    reject(xhr.status)
                }
            }
        }
        // 打开请求
        xhr.open(method, url, true)
        // 设置请求头
        xhr.setRequestHeader('Content-Type', 'application/json')
        // 发送请求
        xhr.send(data ? JSON.stringify(data) : null)
    })
}