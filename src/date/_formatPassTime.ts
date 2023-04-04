/**
 * 当前时间距离传入的时候过去了多久
 * - 要求传入的时候必须小于当前时间
 *
 * @since 1.62.0
 * @param {Date | number | string} date - 日期
 * @return {string} 返回过去了多长时间 
 * @example
 * 
 * ```ts
 * import { formatPassTime } from 'super-tools-lib'
 * 
 * formatPassTime('') // '刚刚'
 * formatPassTime('2023-03-30') // '9小时前'
 * ```
 */
export const formatPassTime = (date?: Date | number | string): string => {
    const currentTime = Date.parse(String(new Date())),
        time = currentTime - new Date(date).getTime(),
        day = parseInt(String(time / (1000 * 60 * 60 * 24))),
        hour = parseInt(String(time / (1000 * 60 * 60))),
        min = parseInt(String(time / (1000 * 60))),
        month = parseInt(String(day / 30)),
        year = parseInt(String(month / 12))
    if (year) return year + '年前'
    if (month) return month + '个月前'
    if (day) return day + '天前'
    if (hour) return hour + '小时前'
    if (min) return min + '分钟前'
    else return '刚刚'
}