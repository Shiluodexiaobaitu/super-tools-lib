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

    /**
     * H5 获取地理位置
    */
    const getPosition = (
        timeout = 10000,
        maximumAge = 60000,
        enableHighAcuracy = false) => new Promise((resolve, reject) => {
            if (!navigator && !navigator.geolocation) {
                return reject(new Error('geolocation api not supported'))
            }

            const success = (loc) => {
                const location = {
                    latitude: loc.coords.latitude,  // 纬度
                    longitude: loc.coords.longitude,  // 经度
                    accuracy: loc.coords.accuracy // 精确度
                }
                resolve(location)
            }

            const error = () => reject('出错了')

            navigator.geolocation.getCurrentPosition(success, error, {
                enableHighAcuracy,  // 指示浏览器获取高精度的位置，默认为false
                timeout,  // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
                maximumAge // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
            })
        })

    // 使用示例
    // getPosition()
    //     .then(pos => {
    //         console.log('pos', pos)
    //     })
    //     .catch(err => console.log(err))

    return {
        lonLatToMercator,       // 经纬度转墨卡托
        mercatorToLonlat,       // 墨卡托转经纬度
        getPosition,            // H5 获取地理位置
    }
})()