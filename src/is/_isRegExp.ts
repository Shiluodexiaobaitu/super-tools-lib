/**
 * 是否正则
 * 
 * @since 1.0.0
 * @param {*} o - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isRegExp } from 'super-tools-lib'
 * 
 * isRegExp(val) // true | false
 * ```
 */
export const isRegExp = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}