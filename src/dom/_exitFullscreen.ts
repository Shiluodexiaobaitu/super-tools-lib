/**
 * 退出全屏展示
 * 
 * @since 1.75.0
 * @example
 * 
 * ```ts
 * import { exitFullscreen } from 'super-tools-lib'
 * 
 * exitFullscreen
 * ```
 */
export const exitFullscreen = () => {
    const d: any = document
    if (d.exitFullscreen) {
        d.exitFullscreen()
    }
    else if (d.msExitFullscreen) {
        d.msExitFullscreen()
    }
    else if (d.mozCancelFullScreen) {
        d.mozCancelFullScreen()
    }
    else if (d.webkitCancelFullScreen) {
        d.webkitCancelFullScreen()
    }
}