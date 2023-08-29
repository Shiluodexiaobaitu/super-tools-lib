
/**
 * 图片增加水印
 * 
 * @since 1.63.0
 * @param {HTMLImageElement} img - 图片
 * @param {string} text - 水印文字
 * @param {any} options - 水印配置
 * @return {base64} 返回添加水印后的图
 * @example
 * 
 * ```ts
 * import { watermark } from 'super-tools-lib'
 * 
 * watermark('imgUrl', '水印文字', {
 *  fontSize: 20,
 *  color: '#000',
 *  alpha: 0.5,
 *  x: 0,
 *  y: 0,
 * }).then(res=>{
 * 
 * })
 * ```
 */
export const watermark = (img: HTMLImageElement, text: string, options: any = {}) => {
    const { fontSize = 20, color = '#000', alpha = 0.5, x = 0, y = 0 } = options
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0, img.width, img.height)
    ctx.globalAlpha = alpha
    ctx.fillStyle = color
    ctx.font = `${fontSize}px Arial`
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillText(text, x, y)
    return canvas.toDataURL()
}