// import { File } from 'better-xlsx';
// import { saveAs } from 'file-saver';

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
        alert('Read file fail.')
    }
    reader.readAsDataURL(file)
}

export {
    downBlob,
    getFileBase64,
}