/**
 * 获取地理位置
 * - 方法用来获取设备当前位置因浏览器安全策略需要https环境中使用
 * 
 * @since 1.60.0
 * @param {{}} ops - 参数
 * @param {boolean} ops.enableHighAccuracy - 指示浏览器获取高精度的位置，默认为false
 * @param {number} ops.timeout - 指定获取地理位置的超时时间，默认不限时，单位为毫秒
 * @param {number} ops.maximumAge - 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
 * @return {Promise} 
 * @example
 * 
 * ```ts
 * import { getPosition } from 'super-tools-lib'
 * 
 * getPosition().then((res)=>{
 *  console.log(res) // {lat: 123.2131231, lon: 232.3e13123, accuracy: 20, timestamp: 1680059936948}
 * }).catch(err => console.log(err))
 * ```
 */
export const getPosition = (ops: {
    enableHighAccuracy?: boolean
    timeout?: number
    maximumAge?: number
} = {}) => {
    const {
        enableHighAccuracy = false,
        timeout = 4000,
        maximumAge = 0,
    } = ops
    return new Promise((resolve, reject) => {
        if (!navigator && !navigator.geolocation) {
            return reject(new Error('geolocation api not supported'))
        }

        const success = (loc) => {
            const location = {
                lat: loc.coords.latitude,  // 纬度
                lon: loc.coords.longitude,  // 经度
                accuracy: loc.coords.accuracy, // 精确度
                timestamp: loc.timestamp, // 时间戳
            }
            resolve(location)
        }

        const error = () => reject('出错了')

        const get = () => {
            // 方法用来获取设备当前位置  需要https
            navigator.geolocation.getCurrentPosition(success, error, {
                enableHighAccuracy: enableHighAccuracy,  // 指示浏览器获取高精度的位置，默认为false
                timeout,  // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
                maximumAge, // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
            })
        }

        get()

    })
}