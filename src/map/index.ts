/*
 * @Author: zhangce
 * @Date: 2021-10-08 14:15:34
 * @LastEditors: zhangce
 * @LastEditTime: 2023-01-12 14:19:46
 * @Description: 
 */

/**
 * @desc: 获取两个高德坐标的距离, 后一个点，不传，默认为用户坐标
 * @param {number} startLon
 * @param {number} startLat
 * @param {number} endLon
 * @param {number} endLat
 * @return {*}
 */
const getDistance = (startLon: number, startLat: number, endLon: number, endLat: number): number => {

    const PI = Math.PI
    const lon1: number = (PI / 180) * startLon
    const lon2: number = (PI / 180) * endLon
    const lat1: number = (PI / 180) * startLat
    const lat2: number = (PI / 180) * endLat
    // 地球半径  
    const R = 6378.137

    // 两点间距离 km，如果想要米的话，结果*1000就可以了  
    const d: number = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * R
    const s = d * 1000
    return parseInt(`${s}`, 10)
}

/**
 * @desc: 计算经纬度
 * @param {number} lat1
 * @param {number} lng1
 * @param {number} lat2
 * @param {number} lng2
 * @return {*}
 */
const calcDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const radLat1 = lat1 * Math.PI / 180.0
    const radLat2 = lat2 * Math.PI / 180.0
    const a = radLat1 - radLat2
    const b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(
        b / 2), 2)))
    s = s * 6378.137
    s = Math.round(s * 10000) / 10000
    return s //  
}

/**
 * @desc: 经纬度转墨卡托
 * @param {object} lonLat
 * @return {*}
 */
const lonLatToMercator = (lonLat: { lon: number, lat: number }): { x: number, y: number } => {
    const mercator = { x: 0, y: 0 }
    mercator.x = lonLat.lon * 20037508.34 / 180
    mercator.y = Math.log(Math.tan((90 + lonLat.lat) * Math.PI / 360)) / (Math.PI / 180)
    mercator.y = mercator.y * 20037508.34 / 180
    return mercator
}

/**
 * @desc: 墨卡托转经纬度
 * @param {object} mercator
 * @return {*}
 */
const mercatorToLonlat = (mercator: { x: number, y: number }): { lon: number, lat: number } => {
    const lonlat = { lon: 0, lat: 0 }
    lonlat.lon = mercator.x / 20037508.34 * 180
    lonlat.lat = mercator.y / 20037508.34 * 180
    lonlat.lat = 180 / Math.PI * (2 * Math.atan(Math.exp(lonlat.lat * Math.PI / 180)) - Math.PI / 2)
    return lonlat
}

export {
    getDistance,
    calcDistance,
    lonLatToMercator,
    mercatorToLonlat,
}