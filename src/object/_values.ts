/**
 * 将对象的value转换成数组
 * 
 * @since 1.62.0
 * @param {Record<string, T>} obj - 对象
 * @return {T[]} 返回value数组
 * @example
 * 
 * ```ts
 * import { values } from 'super-tools-lib'
 * 
 * values({a:1,b:2}) // [1, 2]
 * ```
 */
export const values = <T>(obj: Record<string, T>): T[] => Object.values<T>(obj)
