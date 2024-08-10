
/**
 * 监听浏览器窗口是否可见
 * 
 * @since 1.72.0
 * @param {function} callback - 回调函数  true: 可见  false: 不可见
 * @return {function} stop - 停止监听函数 
 * @example
 * 
 * ```ts
 * import { onVisibilityChange } from 'super-tools-lib'
 * 
 * onVisibilityChange((flag) => {
 *    if (flag) {
 *       console.log('可见')
 *   } else {
 *      console.log('不可见')
 *  }
 * })
 * ```
 */
export const onVisibilityChange = (callback: (flag: boolean)=> void) => {
    document.addEventListener("visibilitychange", handleVisibilityChange)

    function handleVisibilityChange() {
        if (document.visibilityState === 'visible') {
            callback(true)
        } else {
            callback(false)
        }
    }
    handleVisibilityChange()

    return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
}