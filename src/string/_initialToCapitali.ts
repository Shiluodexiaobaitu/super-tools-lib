/**
 * 字符串首位是字母转大写
 * 
 * @since 1.62.0
 * @param {string} name - 字符串
 * @return {string} 返回首字母转换成大写的字符串
 * @example
 * 
 * ```ts
 * import { values } from 'super-tools-lib'
 * 
 * values({a:1,b:2}) // [1, 2]
 * ```
 */
export const initialToCapitali = (name: string): string => {
    const pattern = new RegExp('[A-Za-z]+')
    const str = name.substr(0, 1)
    if (pattern.test(str)) {
        return `${str.toUpperCase()}${name.substr(1)}`
    } else {
        const str1 = name.substr(-1)
        return `${name.substr(0, name.length - 1)}${str1.toUpperCase()}`
    }
}