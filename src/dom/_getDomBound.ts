/**
 * 获取dom四个角的坐标 返回数组[{x,y}] | {top, left, right, bottom}格式
 * 
 * @since 1.62.0
 * @param elem - dom元素
 * @param flag - 返回格式 true: {top, left, right, bottom} false: [{x,y}]
 * @returns {any} 返回数组[{x,y}] | {top, left, right, bottom}格式
 * @example
 * ```ts
 * import { getDomBound } from 'super-tools-lib'
 * 
 * const dom = document.getElementById('test')
 * 
 * getDomBound(dom)
 * // => [{x: 0, y: 0}, {x: 100, y: 0}, {x: 100, y: 100}, {x: 0, y: 100}}]
 * ```
 */
export const getDomBound = (elem: HTMLElement, flag?: boolean) => {
    const box = elem.getBoundingClientRect()

    if (flag) {
        return {
            left: box.left,
            top: box.top,
            right: box.right,
            bottom: box.bottom,
        }
    }

    return [
        { x: box.left, y: box.top },
        { x: box.right, y: box.top },
        { x: box.right, y: box.bottom },
        { x: box.left, y: box.bottom },
    ]
}

 