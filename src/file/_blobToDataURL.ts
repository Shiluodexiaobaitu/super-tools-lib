/**
 * blob转url
 * 
 * @since 1.0.0
 * @param {Blob} blob - blob
 * @param {function} callback - 回调
 * @example
 * 
 * ```ts
 * import { blobToDataURL } from 'super-tools-lib'
 * 
 * blobToDataURL(blob, (url) => {})
 * ```
 */
export const blobToDataURL = (blob: Blob, callback: (result: string | ArrayBuffer) => void) => {
    const a = new FileReader()
    a.onload = function (e) {
        callback(e.target.result)
    }
    a.readAsDataURL(blob)
}