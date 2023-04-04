/**
 * 将3位数颜色转换为6位数颜色
 * 
 * @since 1.62.0
 * @param {string} color - 颜色值 #FFF
 * @return {string} 返回6位数的颜色值 例如：#FFFFFF
 * @example
 * 
 * ```ts
 * import { toFullHexColor } from 'super-tools-lib'
 * 
 * toFullHexColor('#FFF') // #FFFFFF
 * ```
 */
export const toFullHexColor = (color: string): string => {
    return `#${(color.startsWith('#') ? color.slice(1) : color)
        .split('')
        .map((c) => `${c}${c}`)
        .join('')}`
}