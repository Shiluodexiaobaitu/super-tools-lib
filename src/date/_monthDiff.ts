/**
 * 计算两个日期之间的月数
 * 
 * @since 1.62.0
 * @param {Date | string | number} data1 - 日期
 * @param {Date | string | number} data2 - 日期
 * @return {number} 返回相差几个月
 * @example
 * 
 * ```ts
 * import { monthDiff } from 'super-tools-lib'
 * 
 * monthDiff('2023', '2024') // 12
 * 
 * monthDiff(new Date('2023'), new Date('2024')) // 12
 * ```
 */
export const monthDiff = (data1: Date | string | number, data2: Date | string | number): number => {
    return Math.max(0, (new Date(data2).getFullYear() - new Date(data1).getFullYear()) * 12 - new Date(data1).getMonth() + new Date(data2).getMonth())
}