/**
 * 两张图片合并成一张图片
 * 
 * @since 1.0.0
 * @param {object} bgImgOps - 下层图片配置
 * @param {string} bgImgOps.url - url
 * @param {number} bgImgOps.width - 图片宽度
 * @param {number} bgImgOps.height - 图片高度
 * @param {object} upImgOps - 上层图片配置
 * @param {string} upImgOps.url - url
 * @param {number} upImgOps.width - 图片宽度
 * @param {number} upImgOps.height - 图片高度
 * @param {number} upImgOps.x - x轴偏移量
 * @param {number} upImgOps.y - y轴偏移量
 * @param {object} ops - 操作配置
 * @param {boolean} ops.download - 是否下载 默认false
 * @param {string} ops.imgName - 下载的文件名
 * @param {function} ops.success - 生成成功的回调
 * @example
 * 
 * ```ts
 * import { drawAndShareImage } from 'super-tools-lib'
 * 
 * drawAndShareImage({url: url1, width: 1000, height: 1000}, {url: url2, width: 200, height: 20}, {download: true, imgName: '1.png'})
 * ```
 */
export const drawAndShareImage = (bgImgOps: { url: string, width: number, height: number }, upImgOps: { url: string, width: number, height: number, x: number, y: number }, ops = { download: false, imgName: '1.png', success: (base64) => base64 }) => {
    const {
        url: bjUrl,
        width: bjWidth,
        height: bjHeight,
    } = bgImgOps

    const {
        url: upUrl,
        x: upX,
        y: upY,
        width: upWidth,
        height: upHeight,
    } = upImgOps

    const {
        download,
        success,
        imgName,
    } = ops

    const canvas = document.createElement('canvas')
    canvas.width = bjWidth || 1800
    canvas.height = bjHeight || 1800
    const context = canvas.getContext('2d')
    context.rect(0, 0, canvas.width, canvas.height)
    const bgImg = new Image()
    bgImg.src = bjUrl    // 背景图的url
    bgImg.crossOrigin = 'Anonymous'
    bgImg.onload = () => {
        context.drawImage(bgImg, 0, 0, bjWidth, bjHeight)
        const img = new Image()
        img.src = upUrl    // 需要合进去的图片url
        img.crossOrigin = 'Anonymous'
        img.onload = () => {
            context.drawImage(img, upX, upY, upWidth, upHeight)
            const base64 = canvas.toDataURL('image/png')// 这个就是合成后的图片链接

            success && success(base64)

            if (download) {
                const a = document.createElement('a')
                a.download = imgName
                const event = new MouseEvent('click')
                a.href = base64
                a.dispatchEvent(event)
            }
        }
    }
}