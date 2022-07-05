/**
 * 移动端横屏竖屏
*/
const orient = () => {
    console.log('orient')
    window.addEventListener('resize', function () {
        const orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
        if (orientation === 'portrait') {
            console.log('竖屏')
        } else {
            console.log('横屏')
        }
    }, false);
}


export {
    orient
}