/**
 * 计算文字宽度
 * 
 * @since 1.62.0
 * @param {string} text - 文字
 * @param {string} font - '14px sans-serif' 字号 字体
 * @return {*}
 * @example
 * 
 * ```ts
 * import { getTextWidth } from 'super-tools-lib'
 * 
 * getTextWidth('哈哈哈哈', '14px sans-serif') // 56
 * ```
 */
export const getTextWidth = (text: string, font: string): number => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    context.font = font
    const metrics = context.measureText(text)
    return metrics.width
}