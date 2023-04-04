/**
 * 判断两个对象是否拥有一样的键
 * 
 * @since 1.0.0
 * @param {object} a - 要检查的值
 * @param {object} b - 要检查的值
 * @return {boolean} 返回true | false
 * @example
 * 
 * ```ts
 * import { isObjectKeyEqual } from 'super-tools-lib'
 * 
 * isObjectKeyEqual({a:1}, {a:2}) // true
 * ```
 */
export const isObjectKeyEqual = (a: Record<string, unknown>, b: Record<string, unknown>): boolean => {
    const aKeyNames = Object.getOwnPropertyNames(a)
    const bKeyNames = Object.getOwnPropertyNames(b)
    if (aKeyNames.length !== bKeyNames.length) {
        return false
    }
    for (let i = 0; i < aKeyNames.length; i++) {
        if (!bKeyNames.includes(aKeyNames[i])) {
            return false
        }
    }
    return true

}