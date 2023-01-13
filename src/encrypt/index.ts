
/**
 * @desc: 按 ASCII 正序排序
 * @param {*} data []
 * @return {*}
 */
const sortAscii = (data: string[]) => {
    return data.sort((a, b) => {
        return (a + '').localeCompare(b + '')
    })
}

/**
 * @desc: 生成sign 按 Key 的 ASCII 正序排序，拼接为字符串返回。
 * @param {Record} obj
 * @param {*} unknown
 * @return {string}
 */
const generateSign = (obj: Record<string, unknown>): string => {

    const arr = []
    let sign = ''
    for (const key in obj) {
        arr.push(key)
    }
    arr.sort()
    for (let i = 0; i < arr.length; i++) {
        sign += `${arr[i]}=${obj[arr[i]]}`
    }

    return sign.replace(/\=/g, '')
}

export {
    sortAscii,
    generateSign,
}