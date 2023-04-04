/**
 * 函数类型验证
 * 
 * @since 1.0.0
 * @param {unknown} fn - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isFunction } from 'super-tools-lib'
 * 
 * isFunction(val) // true | false
 * ```
 */
export const isFunction = (fn: unknown): boolean => typeof fn === 'function'