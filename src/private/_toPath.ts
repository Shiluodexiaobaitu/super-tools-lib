
// path: 支持'a.b.c'，a[0].b.c 返回路径数组

/**
 * 转化 path 为属性路径的数组 
 * 
 * @since 1.63.0
 * @param {*} path - 路径
 * @return {*} 返回路径数组
 * @example
 * 
 * ```ts
 * import { _toPath } from 'super-tools-lib'
 * 
 * _toPath('a.b.c') // ['a', 'b', 'c']
 * 
 * _toPath('a[0].b.c') // ['a', '0', 'b', 'c']
 * ```
 */
export const _toPath = (path: string) => {
    const pathArray = path.split('.')
    const result = []

    pathArray.forEach(item => {
        const index = item.indexOf('[')

        if (index === -1) {
            result.push(item)
        } else {
            result.push(item.slice(0, index))
            result.push(item.slice(index + 1, -1))
        }
    })

    return result
}