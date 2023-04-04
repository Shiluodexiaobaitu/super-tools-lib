

/**
 * 对象反序列化
 * 
 * @since 1.62.0
 * @param {string} str - 序列化字符串
 * @return {object} 返回对象
 * @example
 * 
 * ```ts
 * import { orderToObj } from 'super-tools-lib'
 * 
 * orderToObj('a=1&b=2&c=3') // {a:1,b:2,c:3}
 * ```
 */
export const orderToObj = (str: string) => {
    const obj = {}
    str.split('&').forEach(item => {
        const s = item.split('=')
        obj[s[0]] = s[1]
    })

    return obj
}