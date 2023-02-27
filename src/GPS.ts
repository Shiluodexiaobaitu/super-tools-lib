import { EventObserver } from './EventObserver'

class GPS {

    private _timeId: NodeJS.Timer
    private _time: number
    private _timOptions: {
        timeout: number,
        maximumAge: number,
        enableHighAccuracy: boolean
    }
    private _failCount: number
    private _observer: EventObserver
    constructor() {
        this._time = 700
        this._timOptions = {
            timeout: 1200,
            maximumAge: 0,
            enableHighAccuracy: true,
        }

        this._observer = new EventObserver()
    }

    on(type: 'success' | 'erroe', cb: (...rest: any[]) => void) {
        this._observer.on(type, cb)
    }

    watch() {
        this._timeId = setInterval(() => {

            navigator.geolocation.getCurrentPosition((suc) => {
                const _data = {
                    lon: suc.coords.longitude,
                    lat: suc.coords.latitude,
                    level: 1,
                    name: '我的位置',
                    type: 'GPS',
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
     * @desc: 清除定位监听
     * @return {*}
     */
    clearWatch() {
        clearInterval(this._timeId)
        this._timeId = null
    }
}

export { GPS }