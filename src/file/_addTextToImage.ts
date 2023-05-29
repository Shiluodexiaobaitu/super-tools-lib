
/**
 * 给图片添加文字
 * 
 * @since 1.66.0
 * @param {*} url - 图片地址
 * @param {*} text - 文字内容
 * @param {CanvasRenderingContext2D} textStyle - 文字样式，参考{@link https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D 
 * @param {function} cb - 回调函数，返回文字的坐标
 * @return {Promise<string>} - 返回一个Promise对象，resolve后返回一个base64的图片地址
 * @example
 * 
 * ```ts
 * 
 * import { addTextToImage } from 'super-tools-lib'
 * addTextToImage('https://www.baidu.com/img/bd_logo1.png', '百度一下你就知道', ({ x, y }) => {
 *    return { x, y: y + 100 }
 * }).then(res => {
 *   console.log(res)
 * })
 * ```
 */
export const addTextToImage = (url, text, textStyle: CanvasRenderingContext2D, cb?: ({ x, y }: { x: number, y: number }) => { x: number, y: number }) => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = function () {
            const canvas = document.createElement('canvas')
            canvas.width = img.width
            canvas.height = img.height
            let ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0)
            // 添加文字背景
            ctx.fillStyle = 'white'
            // 水平居中
            ctx.textAlign = 'center'
            // 垂直居中
            ctx.textBaseline = 'middle'
            // 添加文字颜色
            ctx.fillStyle = '#2ea9fa'
            // 文字大小
            ctx.font = 'bold 26px Arial'
            ctx = Object.assign(ctx, textStyle)
            const { x, y } = cb ? cb({ x: canvas.width / 2, y: canvas.height / 2 }) : { x: canvas.width / 2, y: canvas.height / 2 }
            ctx.fillText(text, x, y)
            const dataURL = canvas.toDataURL()
            resolve(dataURL)
        }
        img.onerror = function () {
            reject(new Error('Failed to load image'))
        }
        img.src = url
    })
}