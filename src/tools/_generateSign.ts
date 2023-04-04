/**
 * 生成sign 按 Key 的 ASCII 正序排序，拼接为字符串返回。
 * 
 * @since 1.62.0
 * @param {object} obj - 要操作的数据
 * @return {string} 返回sign字符串
 * @example
 * 
 * ```ts
 * import { generateSign } from 'super-tools-lib'
 * 
 * generateSign({userName: '1', paseWord: '1111'}) // 'paseWord1111userName1'
 * ```
 */
export const generateSign = (obj: Record<string, unknown>): string => {

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