
/**
 * 将color颜色变深level倍
 * 
 * @param {string} color - 颜色值
 * @param {number} level - 变深倍数
 * @return {*} 返回变深后的颜色值
 * @example
 * 
 * ```ts
 * import { darken } from 'super-tools-lib'
 * 
 * darken('#000', 0.5) // '#000000'
 * ```
 */
export const darken = (color: string, level: number) => {
    color = color.replace('#', '')
    let colorNew = '#'
    let num
    for (let i = 0; i < 3; i++) {
        num = parseInt(color.substring(i * 2, i * 2 + 2), 16)
        num = Math.round(Math.min(Math.max(0, num - (num * level)), 255)).toString(16)
        colorNew += ('00' + num).substr(num.length)
    }
    return colorNew
}