!(function () {

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

    return {
        lonLatToMercator,       // 经纬度转墨卡托
        mercatorToLonlat        // 墨卡托转经纬度
    }
})()