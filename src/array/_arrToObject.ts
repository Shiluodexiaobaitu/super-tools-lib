/**
 * 将数组转换为对象
 * 
 * @since 1.0.0
 * @param arr - 数组
 * @param key - 对象的key
 * @returns {Record<string, T>} 返回数组转换后的对象
 * @example
 * 
 * ```ts
 * import { arrToObject } from 'super-tools-lib'
 * 
 * const arr = [{a:2},{a:3}]
 * arrToObject(arr, 'a') // {2: {a:2}, 3: {a:3}}
 * ```
 */
export const arrToObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> => {
    return Object.fromEntries(arr.map((it) => [it[key], it]))
}