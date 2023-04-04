/**
 * 获取localStorage使用容量
 * 
 * @since 1.62.0
 * @return {string} 返回localStorage的使用空间大小 （KB）
 * @example
 * 
 * ```ts
 * import { getLocalStorageSize } from 'super-tools-lib'
 * 
 * getLocalStorageSize() // 11KB
 * ```
 */
export const getLocalStorageSize = (): string => {
    if (!window.localStorage) {
        console.log('浏览器不支持localStorage')
    }
    let size = 0
    for (const item in window.localStorage) {
        if (window.localStorage.hasOwnProperty(item)) {
            size += window.localStorage.getItem(item).length
        }
    }
    return (size / 1024).toFixed(2) + 'KB'
}