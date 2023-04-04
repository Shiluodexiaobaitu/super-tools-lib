/**
 * 判断a对象是否包含b对象的键
 * 
 * @since 1.0.0
 * @param {Record} a - 要检查的值
 * @param {Record} b - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isObjectIncludeSpecifiedKey } from 'super-tools-lib'
 * 
 * isObjectIncludeSpecifiedKey({a: 1, v: 2}, {v: 1}) // true
 * ```
 */
export const isObjectIncludeSpecifiedKey = (a: Record<string, unknown>, b: Record<string, unknown>): boolean => {
    const aKeyNames = Object.getOwnPropertyNames(a)
    const bKeyNames = Object.getOwnPropertyNames(b)
    // for (let i = 0; i < bKeyNames.length; i++) {
    //     if (!aKeyNames.includes(bKeyNames[i])) {
    //         return false
    //     }
    // }
    // return true
    return bKeyNames.every(key => aKeyNames.includes(key))
}