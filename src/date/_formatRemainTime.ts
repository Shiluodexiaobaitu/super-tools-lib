/**
 * 距离目标时间还有多久
 * - 要求传入的时间必须大于当前时间
 * 
 * @since 1.62.0
 * @param {Date | number | string} date - 未来的时间
 * @return {string} 返回距离目标时间还有多久
 * @example
 * 
 * ```ts
 * import { formatRemainTime } from 'super-tools-lib'
 * 
 * formatRemainTime('2024') // '276天13小时54分钟 57秒'
 * ```
 */
export const formatRemainTime = (date: Date | number | string): string => {
    const startDate = new Date() //开始时间
    const endDate = new Date(date) //结束时间
    const t = endDate.getTime() - startDate.getTime() //时间差
    let d = 0,
        h = 0,
        m = 0,
        s = 0
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24)
        h = Math.floor(t / 1000 / 60 / 60 % 24)
        m = Math.floor(t / 1000 / 60 % 60)
        s = Math.floor(t / 1000 % 60)
    }
    return d + '天' + h + '小时' + m + '分钟 ' + s + '秒'
}