/**
 * 将对象的key转换成数组
 * 
 * @since 1.62.0
 * @param {Record<string, T>} obj - 对象
 * @return {string[]} 返回key数组
 * @example
 * 
 * ```ts
 * import { keys } from 'super-tools-lib'
 * 
 * keys({a:2,b:1}) // ['a', 'b']
 * ```
 */
export const keys = <T>(obj: Record<string, T>): string[] => Object.keys(obj)
