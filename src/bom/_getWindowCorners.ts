
/**
 * 获取窗口四个角的坐标
 * 
 * @since 1.64.0
 * @return {Point[]} 返回一个数组，包含四个角的坐标
 * @example
 * 
 * ```ts
 * import { getWindowCorners } from 'super-tools-lib'
 * 
 * getWindowCorners()
 * // => [{x: 0, y: 0}, {x: 1920, y: 0}, {x: 1920, y: 1080}, {x: 0, y: 1080}]
 * ```
 */
export const getWindowCorners = () => {
    const { innerWidth, innerHeight } = window
    return [
        { x: 0, y: 0 },
        { x: innerWidth, y: 0 },
        { x: innerWidth, y: innerHeight },
        { x: 0, y: innerHeight },
    ]
}