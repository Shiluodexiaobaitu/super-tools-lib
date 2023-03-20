/**
 * 洗牌算法随机
 * @param arr 需要操作的数组
 * @return {*}
 * 
 * @example
 * 示例
 * ```ts
 * shuffle([1,2,3,4,5])
 * ```
 */
const shuffle = <T>(arr: T[]): T[] => {
    const result = []
    let random
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length)
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result
}


export {
    shuffle,
}