/**
* 获取两个高德坐标的距离, 后一个点，不传，默认为用户坐标
* @return {null|number} 距离多少米，没有定位信息，返回null
* @example
* getDistance(31.282055633974, 121.379623888259)
*/
let getDistance = function (endLat, endLon, startLat, startLon) {

    const PI = Math.PI
    let lon1 = (PI / 180) * startLon
    let lon2 = (PI / 180) * endLon
    let lat1 = (PI / 180) * startLat
    let lat2 = (PI / 180) * endLat
    // 地球半径  
    let R = 6378.137;

    // 两点间距离 km，如果想要米的话，结果*1000就可以了  
    let d = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * R;

    return parseInt(d * 1000, 10)
}

// 经纬度转墨卡托
const lonLatToMercator = (lonLat) => {
    let mercator = { x: 0, y: 0 };
    mercator.x = lonLat.lon * 20037508.34 / 180;
    mercator.y = Math.log(Math.tan((90 + lonLat.lat) * Math.PI / 360)) / (Math.PI / 180);
    mercator.y = mercator.y * 20037508.34 / 180;
    return mercator;
}

// 墨卡托转经纬度
const mercatorToLonlat = (mercator) => {
    let lonlat = { lon: 0, lat: 0 };
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