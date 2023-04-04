import { isEqual } from '../is/_isEqual'
import { _arrayEach } from '../loop'

/**
 * 数组去重
 * - 支持引用数据类型的深度对比
 * 
 * @since 1.0.0
 * @param {T[]} arr - 数组
 * @returns {T[]} 返回去重后的数组
 * @example
 * 
 * ```ts
 * import { arrayUnique } from 'super-tools-lib'
 * 
 * const arr = [1,2,2,2,3,1]
 * arrayUnique(arr) // [1, 2, 3]
 * 
 * const arr2 = [{name: 'Olivia'}, {name: 'Sophia'}, {name: 'Olivia'}]
 * arrayUnique(arr2) // [{name: 'Olivia'}, {name: 'Sophia'}]
 * ```
 */
export const arrayUnique = <T>(arr: T[]): T[] => {
    const array: T[] = []

    _arrayEach(arr, (i) => {
        let _flag = true
        _arrayEach(array, (j) => {
            if (isEqual(i, j)) {
                _flag = false
            }
        })
        if (_flag) {
            array.push(i)
        }
    })

    return array
}