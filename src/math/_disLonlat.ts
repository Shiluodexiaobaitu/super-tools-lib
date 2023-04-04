/**
 * 计算两个经纬度坐标的距离
 * 
 * @since 1.62.0
 * @param {object} start - 经纬度坐标
 * @param {object} end - 经纬度坐标
 * @return {number} 返回两个点的距离，单位为米
 * @example
 * 
 * ```ts
 * import { disLonlat } from 'super-tools-lib'
 * 
 * disLonlat({lon: 116.445088, lat: 39.94614}, {lon: 116.145088, lat: 39.94614}) // 25574.209968296687
 * ```
 */
export const disLonlat = ({ lat: lat1, lon: lon1 }: { lat: number, lon: number }, { lat: lat2, lon: lon2 }: { lat: number, lon: number }) => {

    // 将经纬度转换为弧度
    const radLat1 = (lat1 * Math.PI) / 180
    const radLon1 = (lon1 * Math.PI) / 180
    const radLat2 = (lat2 * Math.PI) / 180
    const radLon2 = (lon2 * Math.PI) / 180

    // 使用 Haversine 公式计算距离
    const dlon = radLon2 - radLon1
    const dlat = radLat2 - radLat1
    const a =
        Math.sin(dlat / 2) ** 2 +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dlon / 2) ** 2
    const c = 2 * Math.asin(Math.sqrt(a))
    const r = 6371 * 1000 // 地球半径，单位为米
    return c * r
}