/**
 * 检测暗模式
 * 
 * @since 1.0.0
 * @example
 * 
 * ```ts
 * import { isDarkMode } from 'super-tools-lib'
 * 
 * isDarkMode() // true | false
 * ```
 */
export const isDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}