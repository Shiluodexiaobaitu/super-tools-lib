import { _besePath } from '../private'


// path支持数组字符串格式 例如：'a.b[0].c'
/**
 * 根据对象的path路径设置值
 * 
 * @since 1.62.0
 * @param {object} object - 要检索的对象
 * @param {string} path - 获取属性的路径
 * @param {any} value - 要设置的值
 * @return {*} 返回设置后的对象
 * @example
 * 
 * ```ts
 * import { set } from 'super-tools-lib'
 * 
 * const obj = {a: {b: {c: 1}}, b: {a:[[2]]}}
 * 
 * set(obj, 'a.b.c', 2) // {a: {b: {c: 2}}, b: {a:[[2]]}}
 * 
 * set(obj, 'b.a[0][0]', 3) // {a: {b: {c: 2}}, b: {a:[[3]]}}
 */
export const set = (object: Record<string, any>, path: string, value: any) => {
    const pathArray = path.split('.')

    let index = -1
    const length = pathArray.length

    while (object !== null && ++index < length) {
        const _path = pathArray[index]

        if (index === length - 1) {
            object[_path] = value
        } else {
            object = _besePath(object, _path)
        }
    }

    return object
}