import { isArray } from '../is'

/**
 * 缩放多边形坐标
 * @param {*} T
 * @return {*}
 */
const scalePolygon = <T extends { x: number, y: number }>(points: T[], extra: number): T[] => {
    if (!isArray(points) || points.length < 3) {
        return
    }
    const ps = points
    // 通过顺时针判断取正值还是负值
    const extra0 = _isClockwise(ps) ? -extra : extra

    const norm = (x, y) => Math.sqrt(x * x + y * y)

    const len = ps.length
    const polygon = []
    for (let i = 0; i < len; i++) {
        const point = ps[i]
        const point1 = ps[i === 0 ? len - 1 : i - 1]
        const point2 = ps[i === len - 1 ? 0 : i + 1]

        // 向量PP1
        const vectorX1 = point1.x - point.x // 向量PP1 横坐标
        const vectorY1 = point1.y - point.y // 向量PP1 纵坐标
        const n1 = norm(vectorX1, vectorY1) // 向量的平方根 为了对向量PP1做单位化
        let vectorUnitX1 = vectorX1 / n1 // 向量单位化 横坐标
        let vectorUnitY1 = vectorY1 / n1 // 向量单位化 纵坐标

        // 向量PP2
        const vectorX2 = point2.x - point.x // 向量PP2 横坐标
        const vectorY2 = point2.y - point.y // 向量PP2 纵坐标
        const n2 = norm(vectorX2, vectorY2) // 向量的平方根 为了对向量PP1做单位化
        let vectorUnitX2 = vectorX2 / n2 // 向量单位化 横坐标
        let vectorUnitY2 = vectorY2 / n2 // 向量单位化 纵坐标

        // PQ距离
        const vectorLen =
            -extra0 /
            Math.sqrt(
                (1 - (vectorUnitX1 * vectorUnitX2 + vectorUnitY1 * vectorUnitY2)) / 2,
            )

        // 根据向量的叉乘积来判断角是凹角还是凸角
        if (vectorX1 * vectorY2 + -1 * vectorY1 * vectorX2 < 0) {
            vectorUnitX2 *= -1
            vectorUnitY2 *= -1
            vectorUnitX1 *= -1
            vectorUnitY1 *= -1
        }

        // PQ的方向
        const vectorX = vectorUnitX1 + vectorUnitX2
        const vectorY = vectorUnitY1 + vectorUnitY2
        const n = vectorLen / norm(vectorX, vectorY)
        const vectorUnitX = vectorX * n
        const vectorUnitY = vectorY * n

        const polygonX = vectorUnitX + point.x
        const polygonY = vectorUnitY + point.y

        polygon[i] = { x: polygonX, y: polygonY }
    }

    return polygon
}


/**
 * 判断坐标数组是否顺时针（默认为false）
 * @param {Point[]} points 点坐标数组 [{x:0,y:0}...]
 * @return {boolean}
 */
const _isClockwise = <T extends { x: number, y: number }>(points: T[]): boolean => {
    // 三个点可以判断矢量是顺时针旋转还是逆时针旋转的，但由于可能存在凹边，所以并不是任意三点都可以正确反映多边形的走向
    // 因此需要取多边形中绝对是凸边的点来判断，
    // 多边形中的极值点（x最大或x最小或y最大或y最小）它与相邻两点构成的边必然是凸边，因此我们先取出多边形中的极值点，再由极值点和其前后两点去判断矢量的走向，从而判断出多边形的走向。
    if (!isArray(points) || points.length < 3) {
        return false
    }
    let coords = JSON.parse(JSON.stringify(points))

    if (coords[0] === coords[coords.length - 1]) {
        coords = coords.slice(0, coords.length - 1)
    }
    coords = coords.reverse()
    let maxXIndex = 0
    let maxX = parseFloat(coords[maxXIndex].x)
    let c1
    let c2
    let c3
    for (let i = 0; i < coords.length; i++) {
        if (parseFloat(coords[i].x) > maxX) {
            maxX = parseFloat(coords[i].x)
            maxXIndex = i
        }
    }
    if (maxXIndex === 0) {
        c1 = coords[coords.length - 1]
        c2 = coords[maxXIndex]
        c3 = coords[maxXIndex + 1]
    } else if (maxXIndex === coords.length - 1) {
        c1 = coords[maxXIndex - 1]
        c2 = coords[maxXIndex]
        c3 = coords[0]
    } else {
        c1 = coords[maxXIndex - 1]
        c2 = coords[maxXIndex]
        c3 = coords[maxXIndex + 1]
    }
    const x1 = parseFloat(c1.x)
    const y1 = parseFloat(c1.y)
    const x2 = parseFloat(c2.x)
    const y2 = parseFloat(c2.y)
    const x3 = parseFloat(c3.x)
    const y3 = parseFloat(c3.y)
    const s = (x1 - x3) * (y2 - y3) - (x2 - x3) * (y1 - y3)
    return s < 0
}

export { scalePolygon }

