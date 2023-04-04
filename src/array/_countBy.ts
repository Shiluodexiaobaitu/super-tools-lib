/**
 * 按数组对象中的属性计数
 * 
 * @since 1.0.0
 * @param {T[]} arr - 数组
 * @param {K} prop - 属性
 * @return {Record<string, number>} - 返回统计数量
 * @example
 * 
 * ```ts
 * import { countBy } from 'super-tools-lib'
 * 
 * const arr = [{age: 12},{age: 12}, {age: 10}]
 * countBy(arr) // {10: 1, 12: 2}
 * ```
 */
export const countBy = <T extends Record<string, string>, K extends keyof T>(arr: T[], key: K): Record<string, number> => (
    arr.reduce((prev, curr) => ((prev[curr[key]] = ++prev[curr[key]] || 1), prev), {} as Record<string, number>)
)