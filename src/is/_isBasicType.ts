/**
 * 判断是否是基本数据类型
 * 
 * @since 1.0.0
 * @param {unknown} val - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isBasicType } from 'super-tools-lib'
 * 
 * isBasicType(val) // true | false
 * ```
 */
export const isBasicType = (val: unknown): boolean => {
    const t = Object.prototype.toString.call(val)
    if (t === '[object String]' ||
        t === '[object Boolean]' ||
        t === '[object Number]' ||
        t === '[object Null]' ||
        t === '[object Undefined]' ||
        t === '[object Symbol]') {
        return true
    }
    return false
}