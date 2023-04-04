/**
 * 检查数组是否包含符合某些标准的值
 * 
 * @since 1.0.0
 * @param {T[]} arr - 数组
 * @param {(a:T)=>boolean} criteria - 标准
 * @returns {Boolean} 返回是否包含
 * @example
 * 
 * ```ts
 * import { contains } from 'super-tools-lib'
 * 
 * const arr = [1,2,3,4]
 * contains(arr, (item) => item > 3) // true
 * ```
 */
export const contains = <T>(arr: T[], criteria: (a: T) => boolean): boolean => {
    return arr.filter(criteria).length > 0
}