/**
 * 数组排序
 * - 支持按字母顺序排序
 * 
 * @since 1.0.0
 * @param {T[]} data - 待排序数组
 * @param {string} keyword - 排序关键字
 * @param {string} [order='asc'] 排序方式，asc为升序，desc为降序
 * @return {T[]} 返回排序后的数组
 * @example
 * 
 * ```ts
 * import { sortArray } from 'super-tools-lib'
 * 
 * const arr = [{name: 'c'}, {name: 'b'}, {name: 'a'}, {name: 'd'}]
 * 
 * sortArray(arr, 'name') // [{name: 'a'}, {name: 'b'}, {name: 'c'}, {name: 'd'}]
 * 
 * sortArray(arr, 'name', 'desc') // [{name: 'a'}, {name: 'b'}, {name: 'c'}, {name: 'd'}]
 * ```
 */
export const sortArray = <T>(data: T[], keyword: string, order = 'asc'): T[] => {
    const _data = [...data]
    if (order === 'asc') {
        return _data.sort((a, b) => a[keyword] < b[keyword] ? -1 : a[keyword] > b[keyword] ? 1 : 0)
    } else {
        return _data.sort((a, b) => a[keyword] > b[keyword] ? -1 : a[keyword] < b[keyword] ? 1 : 0)
    }

}