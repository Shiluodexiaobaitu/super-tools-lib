/**
 * 数字类型验证
 * 
 * @since 1.0.0
 * @param {any} num - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isNumber } from 'super-tools-lib'
 * 
 * isNumber(val) // true | false
 * ```
 */
export const isNumber = (num: unknown): num is number => {
    return typeof num === 'number' && !isNaN(num)
}