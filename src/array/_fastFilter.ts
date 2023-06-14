
/**
 * 快速过滤，过滤数组中符合条件的元素
 * - 不同于 Array.prototype.filter，该方法会同步遍历数组的前半部分和后半部分
 * 
 * @since 1.67.0
 * @param {*} T
 * @return {*}
 * 
 * @example
 * 
 * ```ts
 * import { fastFilter } from 'super-tools-lib'
 * 
 * fastFilter([1,2,3], (i) => i <= 2 ) // [1,2]
 * ```
 */
export const fastFilter = <T>(data: T[], iteratee: (item: T, key?: string | number) => boolean) => {
    const len = data.length
    const result = []
    let resIndex = 0
    let left = 0
    let right = len - 1

    while (left <= right) {
        const leftValue = data[left]
        const rightValue = data[right]
        if (iteratee(leftValue, left)) {
            result[resIndex++] = leftValue
        }
        if (iteratee(rightValue, right)) {
            result[resIndex++] = rightValue
        }
        left++
        right--
    }

    return result
}