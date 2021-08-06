/**
* 获取两个高德坐标的距离, 后一个点，不传，默认为用户坐标
* @return {null|number} 距离多少米，没有定位信息，返回null
* @example
* getDistance(31.282055633974, 121.379623888259)
*/
const getDistance = (endLat: number, endLon: number, startLat: number, startLon: number): number => {

    const PI = Math.PI
    const lon1: number = (PI / 180) * startLon
    const lon2: number = (PI / 180) * endLon
    const lat1: number = (PI / 180) * startLat
    const lat2: number = (PI / 180) * endLat
    // 地球半径  
    const R = 6378.137;

    // 两点间距离 km，如果想要米的话，结果*1000就可以了  
    const d: number = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * R;
    const s = d * 1000
    return parseInt(`${s}`, 10)
}

// 经纬度转墨卡托
const lonLatToMercator = (lonLat: { lon: number, lat: number }): any => {
    const mercator = { x: 0, y: 0 };
    mercator.x = lonLat.lon * 20037508.34 / 180;
    mercator.y = Math.log(Math.tan((90 + lonLat.lat) * Math.PI / 360)) / (Math.PI / 180);
    mercator.y = mercator.y * 20037508.34 / 180;
    return mercator;
}

// 墨卡托转经纬度
const mercatorToLonlat = (mercator: { x: number, y: number }): any => {
    const lonlat = { lon: 0, lat: 0 };
    lonlat.lon = mercator.x / 20037508.34 * 180;
    lonlat.lat = mercator.y / 20037508.34 * 180;
    lonlat.lat = 180 / Math.PI * (2 * Math.atan(Math.exp(lonlat.lat * Math.PI / 180)) - Math.PI / 2);
    return lonlat;
}

const map = {
    getDistance,
    lonLatToMercator,
    mercatorToLonlat
}

export default map;