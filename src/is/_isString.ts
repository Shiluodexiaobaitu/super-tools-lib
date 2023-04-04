/**
 * 字符串类型验证
 * 
 * @since 1.0.0
 * @param {unknown} str - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isString } from 'super-tools-lib'
 * 
 * isString(val) // true | false
 * ```
 */
export const isString = (str: unknown): boolean => {
    return typeof str === 'string'
}