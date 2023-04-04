/**
 * 计算墨卡托两点之间的距离
 * 
 * @since 1.62.0
 * @param {object} start
 * @param {number} start.x
 * @param {number} start.y
 * 
 * @param {object} end
 * @param {number} end.x
 * @param {number} end.y
 * @return {number} 返回亮点直接的距离 m
* @example
 * 
 * ```ts
 * import { disMercator } from 'super-tools-lib'
 * 
 * disMercator({
    x: 12601590.934991667,
    y: 2507144.4488188336,
  },
  {
    x: 12603303.603016667,
    y: 2506982.020053167,
  }) // 1720.353122987682
 * ```
 */


export const disMercator = (start: {
    x: number;
    y: number;
}, end: {
    x: number;
    y: number;
}): number => {
    return Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2))
}

