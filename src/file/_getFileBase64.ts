/**
 * 将文件Base64编码，
 * 
 * @since 1.0.0
 * @param {File} file - 文件
 * @param {function} cb - 文件转换成功回调
 * @example
 * 
 * ```ts
 * import { getFileBase64 } from 'super-tools-lib'
 * 
 * getFileBase64(file, (base64) => {})
 * ```
*/
export const getFileBase64 = (file: File, cb: (base64: ArrayBuffer | string) => void): void => {
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