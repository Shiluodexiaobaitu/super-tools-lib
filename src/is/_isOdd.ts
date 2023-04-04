/**
 * 检测数字是否为奇数
 * 
 * @since 1.62.0
 * @param {number} v - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isOdd } from 'super-tools-lib'
 * 
 * isOdd(val) // true | false
 * ```
 */
export const isOdd = (v: number) => !!(v & 1)