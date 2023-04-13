import { _besePath } from '../private'

/**
 * 根据对象的path路径获取值
 * 
 * @since 1.62.0
 * @param {Object} object - 要检索的对象
 * @param {string} path - 获取属性的路径
 * @param {any} defaultValue - 获取属性的路径失败时，这值会被返回
 * @return {any} 返回解析的值
 * @example
 * 
 * ```ts
 * import { get } from 'super-tools-lib'
 * 
 * const obj = {a: {b: {c: 1}}, b: {a:[[2]]}}
 * 
 * get(obj, 'a.b.c') // 1
 * 
 * get(obj, 'b.a[0][0]') // 2
 * 
 * get(obj, 'b.a[0][0].a', '2222') // '2222'
 * ```
 */
export const get = (object: Record<string, any>, path: string, defaultValue: any) => {

    const pathArray = path.split('.')

    let index = -1
    const length = pathArray.length

    while (object !== null && ++index < length) {
        const _path = pathArray[index]

        object = _besePath(object, _path)
    }

    return (index && index === length) ? object : defaultValue
}