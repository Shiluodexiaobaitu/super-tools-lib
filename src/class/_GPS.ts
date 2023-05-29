import { EventObserver } from './_EventObserver'


/**
 * 获取GPS位置
 * 
 * @since 1.62.0
 * @example
 * 
 * ```ts
 * import { GPS } from 'super-tools-lib'
 * 
 * const gps = new GPS()
 * 
 * gps.start()
 * 
 * gps.on('success', ({lon,lat}) => {
 *  
 * })
 * ```
 */
class GPS {

    private _timeId: number
    private _time: number
    private _timOptions: {
        timeout: number,
        maximumAge: number,
        enableHighAccuracy: boolean
    }
    private _failCount: number
    private _observer: EventObserver
    constructor(props) {
        const { time = 1000 } = props
        this._time = time
        this._timOptions = {
            timeout: 1200,
            maximumAge: 0,
            enableHighAccuracy: true,
        }

        this._observer = new EventObserver()
    }

    /**
     * 监听事件
     * 
     * @param {'success' | 'erroe'} type - 事件
     * @param {function} cb - 事件回调
     */
    on(type: 'success' | 'erroe', cb: (...rest: any[]) => void) {
        this._observer.on(type, cb)
    }

    /**
     * 启动
     */
    start() {
        this._failCount = 0

        this._timeId = setInterval(() => {

            navigator.geolocation.getCurrentPosition((suc) => {
                const _data = {
                    lon: suc.coords.longitude,
                    lat: suc.coords.latitude,
                    accuracy: suc.coords.accuracy,
                    timestamp: suc.timestamp,
                }

                this._observer.spread('success', _data)
                this._failCount = 0
            }, (e) => {
                ++this._failCount
                if (this._failCount === 3) {
                    let _text = ''
                    switch (e.code) {
                        case e.PERMISSION_DENIED:
                            _text = '定位失败,用户拒绝请求地理定位'
                            break
                        case e.POSITION_UNAVAILABLE:
                            _text = '定位失败,位置信息是不可用'
                            break
                        case e.TIMEOUT:
                            _text = '定位失败,请求获取用户位置超时'
                            break
                        default:
                            break
                    }
                    this._observer.spread('erroe', _text)
                }
            }, this._timOptions)
        }, this._time)
    }

    /**
     * 清除定位监听
     */
    clear() {
        clearInterval(this._timeId)
        this._timeId = null
    }
}

export { GPS }