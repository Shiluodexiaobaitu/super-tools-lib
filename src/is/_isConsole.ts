
/**
 * 检查浏览器是否打开了控制台
 * 
 * @since 1.0.0
 * @return {boolean} 返回是否打开了控制台
 * @example
 * 
 * ```ts
 * import { isConsole } from 'super-tools-lib'
 * 
 * isConsole() // true | false
 * ```
 */
export const isConsole = () => {
    const devtools = {
        isOpen: false,
        orientation: undefined,
    }

    const threshold = 170

    const emitEvent = (isOpen, orientation) => {
        globalThis.dispatchEvent(new globalThis.CustomEvent('devtoolschange', {
            detail: {
                isOpen,
                orientation,
            },
        }))
    }

    const main = ({ emitEvents = true } = {}) => {
        const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold
        const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold
        const orientation = widthThreshold ? 'vertical' : 'horizontal'

        if (
            !(heightThreshold && widthThreshold)
            && ((globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
        ) {
            if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
                emitEvent(true, orientation)
            }

            devtools.isOpen = true
            devtools.orientation = orientation
        } else {
            if (devtools.isOpen && emitEvents) {
                emitEvent(false, undefined)
            }

            devtools.isOpen = false
            devtools.orientation = undefined
        }
    }

    main({ emitEvents: false })
    return devtools.isOpen
    // setInterval(main, 500)
}