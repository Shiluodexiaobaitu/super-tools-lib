/**
 * base64转文件
 * 
 * @since 1.0.0
 * @param {string} urlData - base64
 * @param {string} fileName - 文件名
 * @returns {File} 返回转换后的文件
 * @example
 * 
 * ```ts
 * import { base64ToFile } from 'super-tools-lib'
 * 
 * base64ToFile('base64', 'name')
 * ```
 */
export const base64ToFile = (urlData: string, fileName: string): File => {
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