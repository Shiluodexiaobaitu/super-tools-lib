/**
 * 根据身份证号获取年龄
 * 
 * @since 1.62.0
 * @param {string} id - 身份证号
 * @return {string} 返回年龄
 * @example
 * 
 * ```ts
 * import { getAge } from 'super-tools-lib'
 * 
 * getAge("xxxxxxxxxxxxxxxxx"); // '29岁0月14天'
 * ```
 */
export const getAge = (id: string) => {
    // 1、先判断身份证号的正确性
    // 2、判断是否在世
    const year = id.substr(6, 4)
    const month = id.substr(10, 2)
    const day = id.substr(12, 2)

    const timeBrth = new Date(`${year}/${month}/${day}`).getTime()
    const timeNow = new Date().getTime()
    const longTime = timeNow - timeBrth
    const days = longTime / (1 * 24 * 60 * 60 * 1000)

    let result = ''
    if (days < 31) {
        result = parseInt(`${days}`) + '天'
    } else if (days < 365) {
        result = `${parseInt(`${days / 30}`)}月${parseInt(`${days % 30}`)}天`
    } else {
        result = `${parseInt(`${days / 365}`)}岁${parseInt(`${days % 365 / 30}`)}月${parseInt(`${days % 365 % 30}`)}天`
    }
    return result
}