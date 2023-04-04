import { dateFormater } from './_dateFormater'

/**
 * 获取传入的日期当月的第一个日期
 * 
 * @since 1.62.0
 * @param {Date | number | string} date - 日期
 * @param {string} formater - 返回的日期格式 不传默认YYYY-MM-DD
 * @return {string} 返回传入日期所在月的第一个日期
 * @example
 * 
 * ```ts
 * import { getFirstDate } from 'super-tools-lib'
 * 
 * getFirstDate('2023-03-28') // '2023-03-01'
 * ```
 */
export const getFirstDate = <T extends Date | number | string>(date: T, formater = 'YYYY-MM-DD'): string => {
    const d = new Date(new Date(date).getFullYear(), new Date(date).getMonth(), 1)
    return dateFormater(formater, d)
}
