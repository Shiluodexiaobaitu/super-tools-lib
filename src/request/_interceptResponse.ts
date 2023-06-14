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
            const responseURL = this.responseURL
            // 响应内容
            const responseText = JSON.parse(this.responseText)
            resolve({ responseURL, responseText, __TYPE__: 'xhr' })

        })
        // eslint-disable-next-line prefer-rest-params
        return originalXhrSend.apply(this, arguments)
    }

    const originalFetch = window.fetch
    window.fetch = function () {
        // eslint-disable-next-line prefer-rest-params
        return originalFetch.apply(this, arguments).then((response) => {
            console.log('response', response)
            response.clone().json().then((responseText) => {
                resolve({ responseURL: response.url, responseText, __TYPE__: 'fetch' })
            })

            return response
        })
    }
}