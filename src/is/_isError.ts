/**
 * 是否错误对象
 * 
 * @since 1.0.0
 * @param {*} o - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isError } from 'super-tools-lib'
 * 
 * isError(val) // true | false
 * ```
 */
export const isError = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}