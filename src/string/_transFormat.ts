/**
 * 字符替换
 * 
 * @since 1.62.0
 * @param {*} str - 表示将要替换的字符串
 * @param {*} oldChar - 表示你将要替换的字符
 * @param {*} newChar - 表示你想要替换的字符
 * @return {string} 返回替换后的字符串
 * @example
 * 
 * ```ts
 * import { transFormat } from 'super-tools-lib'
 * 
 * transFormat("2019-12-13", "-", "/") // 2019/12/13
 * ```
 */
export const transFormat = (str: string, oldChar: string, newChar: string) => {
    const reg = new RegExp(oldChar, 'g') // g表示全部替换，默认替换第一个
    str = str.replace(reg, newChar)
    return str
}