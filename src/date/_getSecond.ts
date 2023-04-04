/**
 * 获取当前时间戳（秒）
 * 
 * @since 1.62.0
 * @param {Date | number | string} date - 日期 不传默认当前时间
 * @return {number} 返回转换后的时间戳（秒）
 * @example
 * 
 * ```ts
 * import { getSecond } from 'super-tools-lib'
 * 
 * getSecond('2023') // 1672531200
 * ```
 */
export const getSecond = (date: Date | number | string = new Date): number => {
    return Math.floor(new Date(date).getTime() / 1000)
}
