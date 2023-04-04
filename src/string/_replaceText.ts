import { transFormat } from './_transFormat'

/**
 * 替换指定位置字符串内容
 * 
 * @since 1.62.0
 * @param {string} str - 要操作的字符串
 * @param {array} range - 替换字符串的区间
 * @param {string} mask - 替换内容
 * @return {string} 返回替换后的新字符串
 * @example
 * 
 * ```ts
 * import { replaceText } from 'super-tools-lib'
 * 
 * replaceText("17778780909", [3, 7], "*"); // '177****0909'
 * ```
 */
export const replaceText = (str: string, range: [number, number] | [number], mask: string): string => {

    let old = ''
    if (range.length === 2) {
        old = `${str}`.slice(range[0], range[1])
    } else {
        old = `${str}`.slice(0, range[0])
    }
    const a = []
    a.length = old.length
    a.fill(mask).join('')

    return transFormat(str, old, a.fill('*').join(''))
}