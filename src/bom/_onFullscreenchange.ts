
/**
 * 监听浏览器全屏状态
 * 
 * @since 1.75.0
 * @param {Function} callback - 状态更新的回调
 * @example
 * 
 * ```ts
 * import { onFullscreenchange } from 'super-tools-lib'
 * 
 * onFullscreenchange((flag) => {
 *  if (flag) {
 *  // 全屏
 *  }else {
 *  // 非全屏
 *  }
 * })
 * ```
 */
export const onFullscreenchange = (callback: (flag: boolean) => void) => {
    document.addEventListener('fullscreenchange', () => {
        // 变大了
        if (document.fullscreenElement) {
            callback(true)
        } else {
            //变小了
            callback(false)
        }
    })
}