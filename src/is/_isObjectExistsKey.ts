/**
 * 判断一个对象内是否包含指定的键
 * 
 * @since 1.0.0
 * @param {Record} obj - 对象
 * @param {*} unknown
 * @param {string} key - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isObjectExistsKey } from 'super-tools-lib'
 * 
 * isObjectExistsKey({a:1},'1') // true
 * ```
 */
export const isObjectExistsKey = (obj: Record<string, unknown>, key: string): boolean => key in obj
