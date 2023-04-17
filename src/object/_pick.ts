
/**
 * 从 object 中选中的 key 的对象
 * 
 * @since 1.63.0
 * @param {any} obj - 对象
 * @param {string} keys - 选中的 key
 * @return {any} 返回选中的 key 的对象
 * @example
 * 
 * ```ts
 * import { pick } from 'super-tools-lib'
 * 
 * pick({a:1,b:2}, ['a']) // {a:1}
 * ```
 */
export const pick = (obj: any, keys: string[]) => {
    return keys.reduce((acc, key) => {
        if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
            acc[key] = obj[key]
        }
        return acc
    }, {})
}