/**
 * 比较两个日期
 * 
 * @since 1.62.0
 * @param {Date | string | number} date1 - 日期
 * @param {Date | string | number} date2 - 日期
 * @return {boolean} 返回 date1 是否 大于 date2
 * @example
 * 
 * ```ts
 * import { compareDate } from 'super-tools-lib'
 * 
 * compareDate('2023', '2022') // true
 * 
 * compareDate(new Date('2022'), new Date('2023')) // false
 * ```
 */
export const compareDate = (date1:  Date | string | number, date2:  Date | string | number): boolean => {
    return new Date(date1).getTime() > new Date(date2).getTime()
}