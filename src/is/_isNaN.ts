/**
 * 检查 value 是否为NaN
 * 
 * @since 1.72.0
 * @param {unknown} value - 要检查的值
 * @return {boolean} true | false
 * @example
 * 
 * ```ts
 * import { isNaN } from 'super-tools-lib'
 * 
 * isNaN(NaN) // true
 * isNaN(1) // false
 * ```
 */
export const isNaN = (value: unknown): boolean => {
    return Number.isNaN(value)
}