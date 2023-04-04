/**
 * 查找数组中最小项的索引
 * 
 * @since 1.0.0
 * @param {number[]} arr - 数组
 * @returns {number} 返回数组中最小项的索引
 * @example
 * 
 * ```ts
 * import { indexOfMin } from 'super-tools-lib'
 * 
 * const arr = [1,2,199,22]
 * indexOfMin(arr) // 0
 * ```
 */
export const indexOfMin = (arr: number[]): number => {
    return arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0)
}