/**
 * 对象序列化
 * 
 * @since 1.62.0
 * @param {object} obj - 对象
 * @return {string} 返回序列化的字符串
 * @example
 * 
 * ```ts
 * import { objToOrder } from 'super-tools-lib'
 * 
 * objToOrder({a:1,b:2,c:3}) // 'a=1&b=2&c=3'
 * ```
 */
export const objToOrder = (obj: Record<string, string | number | boolean>) => {
    if (!obj) return ''
    const pairs = []

    for (const key in obj) {
        const value = obj[key]

        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]))
            }
            continue
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }

    return pairs.join('&')
}