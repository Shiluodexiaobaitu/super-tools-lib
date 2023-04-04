/**
 * 经纬度坐标转墨卡托坐标
 * 
 * @since 1.62.0
 * @param {object} lonLat
 * @param {number} lonLat.lon - 经度
 * @param {number} lonLat.lat - 纬度
 * @return {{x: number, y: number}} 返回墨卡托坐标
 * @example
 * 
 * ```ts
 * import { lonLatToMercator } from 'super-tools-lib'
 * 
 * lonLatToMercator({ lon: 116.445088, lat: 39.94614 }) 
 * // => {x: 12962607.899733523, y: 4858118.574453057}
 * ```
 */
export const lonLatToMercator = (lonLat: { lon: number, lat: number }): { x: number, y: number } => {
    const mercator = { x: 0, y: 0 }
    mercator.x = lonLat.lon * 20037508.34 / 180
    mercator.y = Math.log(Math.tan((90 + lonLat.lat) * Math.PI / 360)) / (Math.PI / 180)
    mercator.y = mercator.y * 20037508.34 / 180
    return mercator
}