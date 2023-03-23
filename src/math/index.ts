import { isArray } from '../is'
import { forEach } from '../loop'

/**
 * 计算两点之间的距离
 * @return {*}
 */
const distance = (p1: {
    x: number;
    y: number;
}, p2: {
    x: number;
    y: number;
}): number => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}

/**
 * 将度转换为弧度
 * @param {number} deg
 * @return {*}
 */
const degsToRads = (deg: number): number => (deg * Math.PI) / 180.0


/**
 * 获取多边形中心点
 * @param {*} T
 * @return {*}
 */
const getPolygonCenter = <T extends { x: number, y: number }>(points: T[]) => {

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

export {
    distance,
    degsToRads,
    getPolygonCenter,
}