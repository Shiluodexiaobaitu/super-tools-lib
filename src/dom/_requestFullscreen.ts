
/**
 * 将传入的dom全屏展示
 * 
 * @since 1.75.0
 * @param {HTMLElement} ele - 状态更新的回调
 * @example
 * 
 * ```ts
 * import { requestFullscreen } from 'super-tools-lib'
 * 
 *  // requestFullscreen(div)
 * ```
 */
export const requestFullscreen = (ele: any) => {
    if (ele.requestFullscreen) {
        ele.requestFullscreen()
    } else if (ele.mozRequestFullScreen) { /* Firefox */
        ele.mozRequestFullScreen()
    } else if (ele.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        ele.webkitRequestFullscreen()
    } else if (ele.msRequestFullscreen) { /* IE/Edge */
        ele.msRequestFullscreen()
    }
}