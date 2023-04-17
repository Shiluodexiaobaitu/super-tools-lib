
// 原声 fetch 的封装
// method: get、post、put、delete

/**
 * fetch
 * 
 * @since 1.63.0
 * @param {string} url - 请求地址
 * @param {any} options - 请求参数
 * @return {*} {Promise<any>}
 * @example
 * 
 * ```ts
 * import { fetch } from 'super-tools-lib'
 * 
 * fetch('https://xxxxxxx', {
 *    method: 'get',
 *   data: {
 *      name: 'xxx',
 *  },
 * }).then(res=>{
 * 
 * })
 * ```
 */
export const fetch = (url: string, options: any = {}) => {
    const { method = 'get', data = {}, headers = {}, ...rest } = options
    const params = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        ...rest,
    }
    if (method.toLowerCase() === 'get') {
        const query = Object.keys(data)
            .map((key) => `${key}=${data[key]}`)
            .join('&')
        url = `${url}?${query}`
    } else {
        params.body = JSON.stringify(data)
    }
    return window.fetch(url, params)
}