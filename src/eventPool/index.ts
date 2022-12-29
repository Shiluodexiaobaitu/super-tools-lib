/**
 * 自定义事件池
*/
class EventObserver {
    private _listener = {}
    constructor() {

        this._listener = {}
    }

    /**
     * 监听事件
    */
    on(type: string, cb: () => void) {
        this._on(type, cb)
    }

    /**
     * 移除事件
    */
    off(type: string, cb: () => void) {
        this._off(type, cb)
    }

    /**
     * 触发事件
    */
    spread(type: string, ...rest) {
        this._spread(type, ...rest)
    }

    _on(type: string, cb: () => void) {

        if (this._listener[type]) {
            if (this._listener[type].includes(cb)) return
            this._listener[type].push(cb)
        } else {
            this._listener[type] = [cb]
        }
    }

    _off(type: string, cb: () => void) {
        if (this._listener[type]) {
            this._listener[type] = this._listener[type].filter(i => i !== cb)
        }
    }

    _spread(type: string, ...rest) {
        if (this._listener[type]) {
            this._listener[type].forEach(cb => {
                cb(...rest)
            })
        }
    }
}

const _eventPool = new EventObserver()

const addEventListener = (type: string, cb: () => void) => {
    _eventPool.on(type, cb)
}

const dispatchEvent = (type: string, ...rest) => {
    _eventPool.spread(type, ...rest)
}

export {
    EventObserver,
    addEventListener,
    dispatchEvent,
}