/**
 * 无刷新去除url参数
 * - 去除url后不会刷新浏览器
 * 
 * @since 1.62.0
 * @param {string} ref
 * @return {string} 返回最新的url
 * @example
 * 
 * ```ts
 * import { noRefdelUrlParam } from 'super-tools-lib'
 * 
 * // 当前url http://localhost:8888/?id=2
 * noRefdelUrlParam('id') 
 * // 去除后的url http://localhost:8888/?
 * ```
 */
export const noRefdelUrlParam = (ref: string): string => {
    const url = window.location.href
    // 若是不包括此参数
    if (url.indexOf(ref) === -1) {
        return url
    }
    const arr_url = url.split('?')
    const base = arr_url[0]
    const arr_param = arr_url[1].split('&')
    let index = -1
    for (let i = 0; i < arr_param.length; i++) {
        const paired = arr_param[i].split('=')
        if (paired[0] === ref) {
            index = i
            break
        }
    }
    if (index === -1) {
        return url
    } else {
        arr_param.splice(index, 1)
        // return base + "?" + arr_param.join('&');
        window.history.pushState({}, '0', base + '?' + arr_param.join('&'))
        return base + '?' + arr_param.join('&')
    }
}