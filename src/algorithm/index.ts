/**
 * 洗牌算法随机
*/
export const shuffle = (arr: Array<any>): Array<any> => {
    const result = []
    let random;
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}

const algorithm = {
    shuffle
}

export default algorithm;