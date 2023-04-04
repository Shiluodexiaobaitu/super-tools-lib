/**
 * 从数组中查找最接近的数字
 * 
 * @since 1.62.0
 * @param {number} arr
 * @param {number} n
 * @return {*}
 * @example
 * 
 * ```ts
 * import { closest } from 'super-tools-lib'
 * 
 * closest([1,3,8], 7) // 8
 * ```
 */
export const closest = (arr: number[], n: number): number => {
    return arr.reduce((prev, curr) => (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev))
}