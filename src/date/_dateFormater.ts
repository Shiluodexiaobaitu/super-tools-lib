/**
 * 格式化时间
 * 
 * @since 1.0.0
 * @param {string} formater - 时间格式
 * @param {Date | number | string} date - 日期对象/时间戳
 * @return {string} 返回格式化后的日期
 * @example
 * 
 * ```ts
 * 'YYYY-MM-DD HH:mm:ss'
 * import { dateFormater } from 'super-tools-lib'
 * 
 * 
 * dateFormater('YYYY-MM-DD HH:mm:ss') // '2023-03-30 17:47:26'
 * dateFormater('YYYY/MM/DD') // '2023/03/30'
 * ```
 */
export const dateFormater = (formater, date?: Date | number | string): string => {
    const _date = date ? new Date(date) : new Date(),
        Y = _date.getFullYear() + '',
        M = _date.getMonth() + 1,
        D = _date.getDate(),
        H = _date.getHours(),
        m = _date.getMinutes(),
        s = _date.getSeconds()
    return formater.replace(/YYYY|yyyy/g, Y)
        .replace(/YY|yy/g, Y.substr(2, 2))
        .replace(/MM/g, (M < 10 ? '0' : '') + M)
        .replace(/DD/g, (D < 10 ? '0' : '') + D)
        .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
        .replace(/mm/g, (m < 10 ? '0' : '') + m)
        .replace(/ss/g, (s < 10 ? '0' : '') + s)
}