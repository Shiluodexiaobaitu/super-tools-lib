/**
 * 响应拦截器
 * - 用于获取响应内容
 * 
 * @since 1.65.0
 * @param {Function} resolve - 回调函数
 * @example
 * 
 * ```ts
 * import { interceptResponse } from 'super-tools-lib'
 * 
 * interceptResponse(({ responseURL, responseText }) => {
 * 
 * })
 * ```
 */
export const interceptResponse = (resolve) => {

    const originalXhrSend = window.XMLHttpRequest.prototype.send
    window.XMLHttpRequest.prototype.send = function () {
        this.addEventListener('load', function () {
            // url
            const responseURL = this.responseURL
            // 响应内容
            const responseText = JSON.parse(this.responseText)
            resolve({ responseURL, responseText }, this)

        })
        // eslint-disable-next-line prefer-rest-params
        return originalXhrSend.apply(this, arguments)
    }
}