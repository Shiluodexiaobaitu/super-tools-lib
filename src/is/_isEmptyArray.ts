/**
 * 检查数组是否为空
 * 
 * @since 1.0.0
 * @param {*} T - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isEmptyArray } from 'super-tools-lib'
 * 
 * isEmptyArray(val) // true | false
 * ```
 */
export const isEmptyArray = <T>(arr: T[]): boolean => Array.isArray(arr) && !arr.length