
/**
 * 检查对象是否缺少指定的键
 * 
 * @since 1.72.0
 * @param {Record<string, T>} obj - 要检查的对象
 * @param {string[]} [keys=[]] - 要检查的键
 * @return {boolean} true | false
 * @example
 * 
 * ```ts
 * import { isObjectAbsentKeys } from 'super-tools-lib'
 * 
 * isObjectAbsentKeys({ a: 1, b: 2 }, ['a']) // false
 * isObjectAbsentKeys({ a: 1, b: 2 }, ['c']) // true
 * ```
 */
export const isObjectAbsentKeys = <T>(
    obj: Record<string, T>,
    keys: string[] = [],
): boolean => {
    const objKeys = Object.keys(obj)
    return keys.every(item => !objKeys.includes(item)) ?? false
}