/**
 * 对象类型验证
 * 
 * @since 1.0.0
 * @param {unknown} obj - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isObject } from 'super-tools-lib'
 * 
 * isObject(val) // true | false
 * ```
 */
export const isObject = (obj: unknown): boolean => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}