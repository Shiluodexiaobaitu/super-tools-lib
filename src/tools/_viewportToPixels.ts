/**
 * 计算vh / vw转px
 * 
 * @since 1.62.0
 * @param {string} value - 要操作的vh/vw值
 * @return {string} 返回转换后的px值
 * @example
 * 
 * ```ts
 * import { viewportToPixels } from 'super-tools-lib'
 * 
 * viewportToPixels("90vh"); // 640
 * ```
 */
export const viewportToPixels = (value: string) => {
    const parts: any = value.match(/([0-9\.]+)(vh|vw)/)
    const q = Number(parts[1])
    let side = 0
    if (parts[2] === 'vw') {
        side = window.innerWidth
    } else {
        side = window.innerHeight
    }
    // side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
    return side * (q / 100)
}