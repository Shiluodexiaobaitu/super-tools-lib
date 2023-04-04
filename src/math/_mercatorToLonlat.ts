/**
 * 墨卡托坐标转经纬度坐标
 * 
 * @since 1.62.0
 * @param {object} mercator
 * @param {number} mercator.x - x
 * @param {number} mercator.y - y
 * @return {{lon: number, lat: number }} 返回经纬度坐标
 * @example
 * 
 * ```ts
 * import { mercatorToLonlat } from 'super-tools-lib'
 * 
 * mercatorToLonlat({x: 12962607.899733523, y: 4858118.574453057}) 
 * // => { lon: 116.445088, lat: 39.94614 }
 * ```
 */
export const mercatorToLonlat = (mercator: { x: number, y: number }): { lon: number, lat: number } => {
    const lonlat = { lon: 0, lat: 0 }
    lonlat.lon = mercator.x / 20037508.34 * 180
    lonlat.lat = mercator.y / 20037508.34 * 180
    lonlat.lat = 180 / Math.PI * (2 * Math.atan(Math.exp(lonlat.lat * Math.PI / 180)) - Math.PI / 2)
    return lonlat
}