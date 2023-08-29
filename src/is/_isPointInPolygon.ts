type Point = { x: number, y: number }
type Polygon = Point[]

/**
 * 检查点是否在多边形内
 * 
 * @since 1.72.0
 * @param {Point} point - 点
 * @param {Polygon} polygon - 多边形
 * @return {boolean} true | false
 * @example
 * 
 * ```ts
 * import { isPointInPolygon } from 'super-tools-lib'
 * 
 * isPointInPolygon({ x: 1, y: 1 }, [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 2 }, { x: 0, y: 2 }]) // true
 * ```
 */
export const isPointInPolygon = (point: Point, polygon: Polygon): boolean => {
    let isInside = false
    const x = point.x
    const y = point.y
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i].x
        const yi = polygon[i].y
        const xj = polygon[j].x
        const yj = polygon[j].y
        const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)
        if (intersect) {
            isInside = !isInside
        }
    }
    return isInside
}