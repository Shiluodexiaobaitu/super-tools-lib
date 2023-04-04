/**
 * 将字符串数组转换为数字数组
 * 
 * @since 1.0.0
 * @param {string[]} arr - 字符串数组
 * @returns {number[]} 返回转换后的数字数组
 * @example
 * 
 * ```ts
 * import { arrToObject } from 'super-tools-lib'
 * 
 * const arr = ['1', '2', '3']
 * arrToObject(arr) // [1, 2, 3]
 * ```
 */
export const toNumbers = (arr: string[]): number[] => arr.map(Number)