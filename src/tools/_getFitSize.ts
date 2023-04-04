/**
 * 返回设计稿上px在不同屏幕下的适配尺寸
 * 
 * @since 1.62.0
 * @param {number} px - 要操作的px尺寸
 * @param {*} draft - 设计稿宽度
 * @return {number} 返回适配后的px尺寸
 * @example
 * 
 * ```ts
 * import { getFitSize } from 'super-tools-lib'
 * 
 * //375屏幕下
 * getFitSize(100, 750); // 50
 * ```
 */
export const getFitSize = (px: number, draft = 750): number => {
    const scale = document.body.clientWidth / draft
    return Math.floor((scale * px))
}