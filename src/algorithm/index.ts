/**
 * @desc: 洗牌算法随机
 * @param {*} T
 * @return {*}
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