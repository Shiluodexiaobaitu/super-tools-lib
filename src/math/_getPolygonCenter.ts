import { isArray } from '../is'
import { forEach } from '../loop'

/**
 * 获取多边形中心点
 * 
 * @since 1.62.0
 * @param {Array<{x:number,y:number}>} points - 多边形点集合
 * @return {{x:number,y:number}} 返回多边形中心点
 * @example
 * 
 * ```ts
 * import { getPolygonCenter } from 'super-tools-lib'
 * 
 * getPolygonCenter([
    {
        "x": 11791461.222580431,
        "y": 3418824.913886976
    },
    {
        "x": 11791521.222580431,
        "y": 3418824.913886976
    },
    {
        "x": 11791521.222580431,
        "y": 3418789.913886976
    },
    {
        "x": 11791461.222580431,
        "y": 3418789.913886976
    }
]) // {"x": 11791491.222580431,"y": 3418807.413886976 }
 * ```
 */
export const getPolygonCenter = <T extends { x: number, y: number }>(points: T[]) => {

    const result = { x: 0, y: 0 }
    if (!isArray(points) || points.length < 3) {
        return result
    }
    forEach(points, (p) => {
        result.x += p.x
        result.y += p.y
    })
    result.x /= points.length
    result.y /= points.length
    return result
}