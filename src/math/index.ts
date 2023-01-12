
/**
 * @desc: 计算两点之间的距离
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
 * @desc: 将度转换为弧度
 * @param {number} deg
 * @return {*}
 */
const degsToRads = (deg: number): number => (deg * Math.PI) / 180.0

export {
    distance,
    degsToRads,
}