/**
 * 数组扁平化
 * 
 * @since 1.61.0
 * @param arr 数组
 * @returns T[] 返回一维数组
 * @example
 * 
 * ```ts
 * import { flattenArray } from 'super-tools-lib'
 * 
 * const arr = [[1],2,[3,[4]]]
 * flattenArray(arr) // [1,2,3,4]
 * ```
 */
export const flattenArray = <T>(arr: T[]): T[] => {
    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flattenArray(cur) : cur)
    }, [])
}