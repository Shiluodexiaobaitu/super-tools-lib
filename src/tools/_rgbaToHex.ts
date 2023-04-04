/**
 * rgba颜色转16进制
 * 
 * @since 1.62.0
 * @param {*} color - 要操作的RGBA颜色值
 * @return {string} 返回16进制颜色值
 * @example
 * 
 * ```ts
 * import { rgbaToHex } from 'super-tools-lib'
 * 
 * rgbaToHex("rgba(255,192,203,1)"); // '#ffc0cb'
 * ```
 */
export const rgbaToHex = (color): string => {
    const values = color
        .replace(/rgba?\(/, '')
        .replace(/\)/, '')
        .replace(/[\s+]/g, '')
        .split(',')
    const a = parseFloat(values[3] || 1),
        r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
        g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
        b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255)
    return '#' +
        ('0' + r.toString(16)).slice(-2) +
        ('0' + g.toString(16)).slice(-2) +
        ('0' + b.toString(16)).slice(-2)
}