/**
 * 是否Promise对象
 * 
 * @since 1.0.0
 * @param {*} o - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isPromise } from 'super-tools-lib'
 * 
 * isPromise(val) // true | false
 * ```
 */
export const isPromise = (o: unknown): boolean => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}