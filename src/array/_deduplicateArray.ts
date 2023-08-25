import { filter } from '../loop'

/**
 * 数组去重
 * 
 * @since 1.74.0
 * @param {T[]} arr - 数组
 * @param {string} key - 去重的key
 * @return {T[]} 返回去重后的数组
 * 
 * @example
 * 
 * ```ts
 * import { deduplicateArray } from 'super-tools-lib'
 * 
 * const arr = [1,2,2,2,3,1]
 * deduplicateArray(arr) // [1, 2, 3]
 * 
 * const arr2 = [{name: 'Olivia'}, {name: 'Sophia'}, {name: 'Olivia'}]
 * deduplicateArray(arr2, 'name') // [{name: 'Olivia'}, {name: 'Sophia'}]
 * 
 * ```
 */
export const deduplicateArray = <T>(arr: T[], key?: string): T[] => {
    const _keys = {}

    return filter(arr, (item) => {
        const _key = key ? item[key] : JSON.stringify(item)

        if (!_keys[_key]) {
            _keys[_key] = true
            return true
        }

        return false
    })
}