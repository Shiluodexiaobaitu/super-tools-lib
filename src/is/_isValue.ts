import { isNaN } from './_isNaN'

/**
 * 检查 value 不是 null / undefined / NaN / Infinity / -Infinity / ''
 * 
 * @since 1.72.0
 * @param {unknown} value - 要检查的值
 * @return {boolean} true | false
 * @example
 * 
 * ```ts
 * import { isValue } from 'super-tools-lib'
 * 
 * isValue('') // true | false
 * ```
 */
export const isValue = (value: unknown): boolean => {

    return value !== null && value !== undefined && value !== Infinity && value !== -Infinity && value !== '' && !isNaN(value)
}