/**
 * 生成一个唯一的guid
 * 
 * @since 1.62.0
 * @return {string} 返回唯一的uuid
 * @example
 * 
 * ```ts
 * import { guid } from 'super-tools-lib'
 * 
 * guid(); // 'bfa39b2f-f77e-425e-8f41-1fe0d8ac38b4'
 * ```
 */
export const guid = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c): string => {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}