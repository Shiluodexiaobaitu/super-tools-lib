/**
 * 数组类型验证
 * 
 * @since 1.0.0
 * @param {unknown} arr - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isArray } from 'super-tools-lib'
 * 
 * isArray(val) // true | false
 * ```
 */
export const isArray = (arr: unknown): boolean => {
    return Array.isArray(arr)
}