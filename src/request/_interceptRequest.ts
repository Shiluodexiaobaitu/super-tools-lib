
/**
 * 请求拦截器
 * - 拦截 XMLHttpRequest 对象 可以获取请求的 url 和 method
 * 
 * @since 1.65.0
 * @param {Function} resolve - 回调函数
 * @example
 * 
 * ```ts
 * import { interceptRequest } from 'super-tools-lib'
 * 
 * interceptRequest(({ method, url }) => {
 * 
 * })
 * ```
 */
export const interceptRequest = (resolve: ({ method, url, __TYPE__ }: { method: string, url: string, __TYPE__: string }) => void) => {
    // 拦截 XMLHttpRequest 对象
    const originalXhrOpen = window.XMLHttpRequest.prototype.open
    window.XMLHttpRequest.prototype.open = function (method, url) {
        resolve({ method, url, __TYPE__: 'xhr' })
        // eslint-disable-next-line prefer-rest-params
        return originalXhrOpen.apply(this, arguments)
    }

    // 拦截 fetch 对象
    const originalFetch = window.fetch
    window.fetch = function (url: string, options) {
        resolve({ method: options.method, url, __TYPE__: 'fetch' })
        // eslint-disable-next-line prefer-rest-params
        return originalFetch.apply(this, arguments)
    }
}
