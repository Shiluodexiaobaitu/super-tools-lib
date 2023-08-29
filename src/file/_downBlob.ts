/**
 * 下载二进制文件流
 * 
 * @since 1.0.0
 * @param {BlobPart} data - 文件流
 * @param {string} fileName - 下载的文件名
 * @example
 * 
 * ```ts
 * import { downBlob } from 'super-tools-lib'
 * 
 * // downBlob('data', '1.xslx')
 * ```
 */
export const downBlob = (data: BlobPart, fileName: string): void => {
    const url = window.URL.createObjectURL(new Blob([data]))
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.setAttribute('download', fileName)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}