
/**
 * 获取窗口中心点
 * 
 * @since 1.64.0
 * @return {Point} 返回一个对象，包含 x 和 y 坐标
 * @example
 * 
 * ```ts
 * import { getWindowCenter } from 'super-tools-lib'
 * 
 * getWindowCenter()
 * // => {x: 960, y: 540}
 * ```
 */
export const getWindowCenter = () => {
    const { innerWidth, innerHeight } = window
    return { x: innerWidth / 2, y: innerHeight / 2 }
}