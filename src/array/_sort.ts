/*
 * @Author: zhangce
 * @Date: 2022-01-17 10:34:53
 * @LastEditors: zhangce
 * @LastEditTime: 2022-10-21 13:47:19
 * @Description: 
 */

/**
 * @description: 冒泡排序
 * @param {*} arr
 * @return {*}
 */
const bubbleSort = (arr) => {
    // 两个数据进行交换
    function exchange(v1, v2) {
        const temp = arr[v1]
        arr[v1] = arr[v2]
        arr[v2] = temp
    }

    // 数组长度
    const length = arr.length

    for (let i = length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                exchange(j, j + 1)
            }
        }
    }

    // 返回最终数组
    return arr
}


export {
    bubbleSort,
}
