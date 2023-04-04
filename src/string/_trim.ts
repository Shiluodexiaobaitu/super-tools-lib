/**
 * 去除字符串首尾空格
 * 
 * @since 1.62.0
 * @param {string} str - 字符串
 * @return {string} 返回去除首尾空格后的字符串
 * @example
 * 
 * ```ts
 * import { trim } from 'super-tools-lib'
 * 
 * trim(' AA ') // 'AA'
 * ```
 */
export const trim = (str: string): string => {
    return str.replace(/^\s+(.*?)\s+$/g, '$1')
}