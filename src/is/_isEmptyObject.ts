/**
 * 判断对象是否为空
 * 
 * @since 1.0.0
 * @param {Record} obj - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isEmptyObject } from 'super-tools-lib'
 * 
 * isEmptyObject(val) // true | false
 * ```
 */
export const isEmptyObject = (obj: Record<string, unknown>): boolean => {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false
    return !Object.keys(obj).length
}