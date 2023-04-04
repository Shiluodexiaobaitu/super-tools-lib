/**
 * 冒泡排序
 * 
 * @since 1.0.0
 * @param {T[]} arr - 待排序数组
 * @param {(v1:T, v2:T)=>boolean} iteratee - 每次迭代调用的函数 (v1第一个值, v2第二个值)=> 返回true则需要调换位置
 * @returns {number[]} 返回排序后的数组
 * @example
 * 
 * ```ts
 * import { bubbleSort } from 'super-tools-lib'
 * 
 * const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
 * const sortedArr = bubbleSort(arr, (v1, v2)=> v1 > v2)
 * console.log(sortedArr) // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
 * 
 * const arr2 = [{age:10},{age:8},{age: 18}]
 * const sortedArr2 = bubbleSort(arr,(v1, v2)=>v1.age > v2.age)
 * console.log(sortedArr2) // [{age:8},{age:10},{age: 18}]
 * ```
 */
export const bubbleSort = <T>(arr: T[], iteratee: (v1: T, v2: T) => boolean): T[] => {

    function exchange(v1: number, v2: number): void {
        const temp = arr[v1]
        arr[v1] = arr[v2]
        arr[v2] = temp
    }
    const length = arr.length

    for (let i = length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (iteratee(arr[j], arr[j + 1])) {
                exchange(j, j + 1)
            }
        }
    }
    return arr
}
