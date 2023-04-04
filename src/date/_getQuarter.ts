/**
 * 获取日期属于哪个季度
 * 
 * @since 1.62.0
 * @param {Date | number | string } date - 日期 不传默认当前日期
 * @return {number} 返回第几季度
 * @example
 * 
 * ```ts
 * import { getQuarter } from 'super-tools-lib'
 * 
 * getQuarter('2023-12-12') // 4
 * ```
 */
export const getQuarter = (date: Date | number | string = new Date() ): number => {
    return Math.ceil((new Date(date).getMonth() + 1) / 3)
}