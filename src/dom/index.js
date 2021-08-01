/**
 * 获取一个元素距离浏览器左上角的偏移量
*/
let getOffset = function (ele) {
    let left = ele.offsetLeft // 左偏移
    let top = ele.offsetTop // 上偏移
    let parent = ele.offsetParent

    // 只要找到的父级参照物不是body 就继续往上查找（一直循环下去 一直到body为止）
    while (parent && parent.nodeName.toLowerCase() !== 'body') {
        left += parent.offsetLeft + parent.clientLeft
        top += parent.offsetTop + parent.clientTop
        parent = parent.offsetParent
    }
    return {
        left,
        top
    }
}

const dom = {
    getOffset
}

export default dom