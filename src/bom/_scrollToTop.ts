/**
 * 平滑滚动到页面顶部
 * 
 * @since 1.62.0
 * @example
 * 
 * ```ts
 * import { scrollToTop } from 'super-tools-lib'
 * 
 * scrollToTop()
 * ```
 */
export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
    }
}