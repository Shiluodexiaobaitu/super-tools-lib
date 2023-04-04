/**
 * 计算两日期之间相差的天数
 * 
 * @since 1.62.0
 * @param {Date | string | number} date1 - 日期
 * @param {Date | string | number} date2 - 日期
 * @return {number} 返回相差的天数
 * @example
 * 
 * ```ts
 * import { dayDiff } from 'super-tools-lib'
 * 
 * dayDiff('2023', '2024') // 365
 * 
 * dayDiff(new Date('2023'), new Date('2024')) // 365
 * ```
 */
export const dayDiff = (date1: Date | string | number, date2: Date | string | number): number => {
    return Math.ceil(Math.abs(new Date(date1).getTime() - new Date(date2).getTime()) / 86400000)
}