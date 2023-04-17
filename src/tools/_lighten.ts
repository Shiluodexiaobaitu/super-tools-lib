
/**
 * 将color颜色变浅level倍
 * 
 * @since 1.63.0
 * @param {*} color - 颜色值
 * @param {*} level - 变浅倍数
 * @return {*} 返回变浅后的颜色值
 * @example
 * 
 * ```ts
 * import { lighten } from 'super-tools-lib'
 * 
 * lighten('#000', 0.5) // '#808080'
 * ```
 */
export const lighten = (color: string, level: number) => {
    color = color.replace('#', '')
    let colorNew = '#'
    let num
    for (let i = 0; i < 3; i++) {
        num = parseInt(color.substring(i * 2, i * 2 + 2), 16)
        num = Math.round(Math.min(Math.max(0, num + (num * level)), 255)).toString(16)
        colorNew += ('00' + num).substr(num.length)
    }
    return colorNew
}