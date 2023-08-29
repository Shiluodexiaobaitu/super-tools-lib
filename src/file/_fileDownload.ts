/**
 * 根据url地址下载
 * 
 * @since 1.0.0
 * @param {string} url - url地址
 * @return {boolean} 返回true
 * @example
 * 
 * ```ts
 * import { fileDownload } from 'super-tools-lib'
 * 
 * // fileDownload(url)
 * ```
 */
export const fileDownload = function (url: string): boolean {
    const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1
    const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1
    if (isChrome || isSafari) {
        const link = document.createElement('a')
        link.href = url
        if (link.download !== undefined) {
            const fileName = url.substring(url.lastIndexOf('/') + 1, url.length)
            link.download = fileName
        }
        if (document.createEvent) {
            const e = document.createEvent('MouseEvents')
            e.initEvent('click', true, true)
            link.dispatchEvent(e)
            return true
        }
    }
    if (url.indexOf('?') === -1) {
        url += '?download'
    }
    window.open(url, '_self')
    return true
}
