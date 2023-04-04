/**
 * 在给定范围内创建数字数组
 * 
 * @since 1.62.0
 * @param {number} min - 开始位置
 * @param {number} max - 结束位置
 * @return {number[]} 返回创建好的数组
 * @example
 * 
 * ```ts
 * import { range } from 'super-tools-lib'
 * 
 * range(1,10) // [1,2,3,4,5,6,7,8,9,10]
 * ```
 */
export const range = (min: number, max: number): number[] =>
    Array(max - min + 1)
        .fill(0)
        .map((_, i) => min + i)

