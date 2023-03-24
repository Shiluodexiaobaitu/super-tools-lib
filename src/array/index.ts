/**
 * 冒泡排序
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} 排序后的数组
 */
const bubbleSort = (arr: number[]): number[] => {
    /**
     * 交换数组中两个元素的位置
     * @param {number} v1 - 第一个元素的下标
     * @param {number} v2 - 第二个元素的下标
     */
    function exchange(v1: number, v2: number): void {
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

/**
 * 数组去重
 * @param {T[]} arr - 数组
 * @returns {T[]} 去重后的数组
 */
const arrayUnique = <T>(arr: T[]): T[] => {
    const map = new Map()
    const array = []  // 数组用于返回结果
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {  // 如果有该key值
            map.set(arr[i], true)
        } else {
            map.set(arr[i], false)   // 如果没有该key值
            array.push(arr[i])
        }
    }
    return array
}

/**
 * 返回数组中最后一项
 * @param {T[]} array - 数组
 * @returns {T} 数组中最后一项
 */
const last = <T>(array: T[]): T => {
    const length = array === null ? 0 : array.length
    return length ? array[length - 1] : undefined
}

/**
 * 按字母排序
 * @param {T[]} data - 待排序数组
 * @param {string} keyword - 排序关键字
 * @param {boolean} [ascen=true] - 是否升序，默认为true
 * @return {T[]} 排序后的数组
 */
const alphabeticSort = <T>(data: T[], keyword: string, ascen = true): T[] => {
    const _data = [...data]
    if (ascen) {
        return _data.sort((a, b) => a[keyword] < b[keyword] ? -1 : a[keyword] > b[keyword] ? 1 : 0)
    } else {
        return _data.sort((a, b) => a[keyword] > b[keyword] ? -1 : a[keyword] < b[keyword] ? 1 : 0)
    }

}

/**
 * 将数组转换为对象
 * @param {T[]} arr - 数组
 * @param {K} key - 对象的key
 * @returns {Record<string, T>} 对象
 */
const arrToObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> => {
    return Object.fromEntries(arr.map((it) => [it[key], it]))
}

/**
 * 将字符串数组转换为数字
 * @param {string[]} arr - 字符串数组
 * @returns {number[]} 数字数组
 */
const toNumbers = (arr: string[]): number[] => arr.map(Number)

/**
 * 按数组对象中的属性计数
 * @param {T[]} arr - 数组
 * @param {K} prop - 属性
 * @return {Record<string, number>} - 计数结果
 */
const countBy = <T extends Record<string, string>, K extends keyof T>(arr: T[], key: K): Record<string, number> => (
    arr.reduce((prev, curr) => ((prev[curr[key]] = ++prev[curr[key]] || 1), prev), {} as Record<string, number>)
)

/**
 * 查找数组中最大项的索引
 * @param {number[]} arr - 数组
 * @returns {number} 最大项的索引
 */
const indexOfMax = (arr: number[]): number => {
    return arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0)
}

/**
 * 查找数组中最小项的索引
 * @param {number[]} arr - 数组
 * @returns {number} 最小项的索引
 */
const indexOfMin = (arr: number[]): number => {
    return arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0)
}

/**
 * 检查数组是否包含符合某些标准的值
 * @param {Array} arr - 数组
 * @param {Function} criteria - 标准
 * @returns {Boolean} 是否包含
 */
const contains = <T>(arr: T[], criteria: (a: T) => boolean): boolean => {
    return arr.filter(criteria).length > 0
}

export {
    arrayUnique,
    bubbleSort,
    last,
    alphabeticSort,
    arrToObject,
    toNumbers,
    countBy,
    indexOfMax,
    indexOfMin,
    contains,
}