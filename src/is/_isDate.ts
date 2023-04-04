/**
 * 是否时间
 * 
 * @since 1.0.0
 * @param {*} o - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isDate } from 'super-tools-lib'
 * 
 * isDate(val) // true | false
 * ```
 */
export const isDate = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}