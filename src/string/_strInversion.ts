/**
 * 反转字符串
 * 
 * @since 1.62.0
 * @param {*} str - 字符串
 * @return {string} 返回反转后的字符串
 * @example
 * 
 * ```ts
 * import { strInversion } from 'super-tools-lib'
 * 
 * strInversion('abc') // cba
 * ```
 */
export const strInversion = (str: string) => {
    str = str + ''
    let newStr = ''
    newStr = str.split('').reverse().join('')
    return newStr
}