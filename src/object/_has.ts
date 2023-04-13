import { _besePath } from '../private'

/**
 * 检查对象是否存在path属性路径
 * 
 * @since 1.62.0
 * @param {Object} object - 要检索的对象
 * @param {string} path - 属性的路径
 * @return {any} 返回 true ｜ false
 * @example
 * 
 * ```ts
 * import { has } from 'super-tools-lib'
 * 
 * const obj = {a: {b: {c: 1}}, b: {a:[[2]]}}
 * 
 * has(obj, 'a.b.c') // true
 * 
 * has(obj, 'b.a[0][0]') // true
 * 
 * has(obj, 'b.a[0][0].a') // false
 * ```
 */
export const has = (object: Record<string, any>, path: string) => {
    const pathArray = path.split('.')

    let index = -1
    const length = pathArray.length

    while (object !== null && ++index < length) {
        const _path = pathArray[index]

        object = _besePath(object, _path)
    }

    return (index && index === length) ? true : false
}