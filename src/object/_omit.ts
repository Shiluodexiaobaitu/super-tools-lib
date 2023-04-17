
/**
 * 忽略对象中指定的key返回新的对象
 * @param {any} obj - 对象
 * @param {string} keys - 忽略的key
 * @return {any} 返回忽略指定key的新对象
 * @example
 * 
 * ```ts
 * import { omit } from 'super-tools-lib'
 * 
 * omit({a:1,b:2}, ['a']) // {b:2}
 * ```
 */
export const omit = (obj: any, keys: string[]) => {
    return keys.reduce((acc, key) => {
        if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
            delete acc[key]
        }
        return acc
    }, obj)
}