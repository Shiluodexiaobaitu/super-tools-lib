/**
 * @desc: 二进制文件流，前端通过blob对象实现下载
 * @param {BlobPart} data
 * @param {string} fileName
 * @return {*}
 */
const downBlob = (data: BlobPart, fileName: string): void => {
    const url = window.URL.createObjectURL(new Blob([data]))
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.setAttribute('download', fileName)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

/**
 * @desc: 文件的Base64编码，
 * @param {则需要FileReader。FileReader类型实现的是一种异步文件读取机制。可以把FileReader想象成XMLHttpRequest，区别只是它读取的是文件系统，而不是远程服务器。}
*/
const getFileBase64 = (file: File, cb: (base64: ArrayBuffer | string) => void): void => {
    if (!file) throw new Error('Error! no param "file"(getFileBase64()).')

    const reader = new FileReader()
    reader.onload = function (e): void {
        const base64 = e.target.result   // 该文件的完整Base64

        if (cb) cb(base64)
    }
    reader.onerror = function (): void {
        console.error('Read file fail.')
    }
    reader.readAsDataURL(file)
}

/**
 * @desc: blob转url
 * @param {*} blob
 * @param {*} callback
 * @return {*}
 */
const blobToDataURL = (blob: Blob, callback: (result: string | ArrayBuffer) => void) => {
    const a = new FileReader()
    a.onload = function (e) {
        callback(e.target.result)
    }
    a.readAsDataURL(blob)
}

/**
 * @desc: 两张图片合并成一张图片
 * @param {*} bgImgOps
 * @param {*} upImgOps
 * @param {*} ops
 * @return {*}
 */
const drawAndShareImage = (bgImgOps: { url: string, width: number, height: number }, upImgOps: { url: string, width: number, height: number, x: number, y: number }, ops = { download: false, imgName: '', success: (base64) => base64 }) => {
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

/**
 * @desc: base64转文件
 * @param {*} urlData
 * @param {*} fileName
 * @return {*}
 */
const base64ToFile = (urlData: string, fileName: string) => {
    const arr = urlData.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bytes = window.atob(arr[1])
    let n = bytes.length
    const ia = new Uint8Array(n)
    while (n--) {
        ia[n] = bytes.charCodeAt(n)
    }
    return new File([ia], fileName, { type: mime })
}

export {
    downBlob,
    getFileBase64,
    blobToDataURL,
    drawAndShareImage,
    base64ToFile,
}