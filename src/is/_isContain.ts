
/**
 * 判断点是否在多边形内部
 * @param {*} T
 * @return {*}
 */
const isContain = <T extends { x: number, y: number }>(point: T, points: T[]): boolean => {
    if (!Array.isArray(points) || points.length < 3) {
        return false
    }
    const n = points.length
    let nCross = 0
    for (let i = 0; i < n; i++) {
        const p1 = points[i]
        const p2 = points[(i + 1) % n]
        // 求解 y=p.y 与 p1 p2 的交点
        // p1p2 与 y=p0.y平行
        if (p1.y === p2.y) continue
        // 交点在p1p2延长线上
        if (point.y < Math.min(p1.y, p2.y)) continue
        // 交点在p1p2延长线上
        if (point.y >= Math.max(p1.y, p2.y)) continue
        // 求交点的 X 坐标
        const x = ((point.y - p1.y) * (p2.x - p1.x)) / (p2.y - p1.y) + p1.x
        // 只统计单边交点
        if (x > point.x) nCross++
    }
    return nCross % 2 === 1
}

export { isContain }
