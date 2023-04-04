/**
 * 检测数字是否为偶数
 * 
 * @since 1.62.0
 * @param {number} v - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isEven } from 'super-tools-lib'
 * 
 * isEven(val) // true | false
 * ```
 */
export const isEven = (v: number) => !(v & 1)