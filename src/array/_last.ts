/**
 * 返回数组中最后一项
 * 
 * @since 1.0.0
 * @param {T[]} array - 数组
 * @returns {T} 返回数组的最后一项
 * @example
 * 
 * ```ts
 * import { last } from 'super-tools-lib'
 * 
 * const arr = [1,2,3]
 * last(arr) // 3
 * ```
 */
export const last = <T>(array: T[]): T => {
    const length = array === null ? 0 : array.length
    return length ? array[length - 1] : undefined
}