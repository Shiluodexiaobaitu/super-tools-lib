/**
 * 获取transform translate矩阵中x，y坐标
 * 
 * @since 1.62.0
 * @param {string} transform - css transform
 * @return {{x: number, y: number}} 返回x,y坐标
 * @example
 * 
 * ```ts
 * import { getTransformMatrix } from 'super-tools-lib'
 * 
 * getTransformMatrix('translate(10px, 10px)') // { x: 10, y: 10 }
 * ```
 */
export const getTransformMatrix = (transform: string): { x: number, y: number } => {
    const matrix = new WebKitCSSMatrix(transform)
    if (matrix) {
        return { x: matrix.m41, y: matrix.m42 }
    }
    return { x: -1, y: -1 }
}