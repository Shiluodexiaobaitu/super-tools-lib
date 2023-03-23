/**
 * 移动端横屏竖屏
 * @param {function} fn
 * @return {*}
 */
const orient = (fn: (type: string) => void) => {
    window.addEventListener('resize', function () {
        const orientation = (window.innerWidth > window.innerHeight) ? '0' : '1'
        fn(orientation)
    }, false)
}


export {
    orient,
}