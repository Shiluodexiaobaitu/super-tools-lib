/**
 * RGB颜色转16进制
 * 
 * @since 1.62.0
 * @param {string} color - 要操作的RGB颜色值
 * @return {string} 返回16进制的颜色值
 * @example
 * 
 * ```ts
 * import { colorHex } from 'super-tools-lib'
 * 
 * colorHex("255,192,203"); // '#ffc0cb'
 * colorHex("rgb(255,192,203)"); // '#ffc0cb'
 * ```
 */
export const colorHex = (color: string): string => {
    const that = color
    const aColor = color
        .replace(/rgb?\(/, '')
        .replace(/\)/, '')
        .replace(/[\s+]/g, '')
        .split(',')
    let strHex = '#'
    for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16)
        if (hex.length < 2) {
            hex = '0' + hex
        }
        strHex += hex
    }
    if (strHex.length !== 7) {
        strHex = that
    }
    return strHex
}