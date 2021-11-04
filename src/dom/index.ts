/**
 * 获取一个元素距离浏览器左上角的偏移量
 * @param {ele} dom元素
*/
const getOffset = function (ele: any): any {
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

/**
 * 抖动函数
 * @param {ele} 抖动的dom元素
 * @param {attr} 抖动的方向 left top
 * @param {cb} 抖动的完成回调
 * @param {rate} 抖动次数
 * @param {time} 每次抖动需要的时间
*/
const shaking = ({ ele, attr, cb, rate = 20, time = 50 }: { ele: any, attr: string, cb: Function, time?: number, rate?: number }): void => {

    function getStyle(ele, attr) {
        if (ele.currentStyle) {
            return ele.currentStyle[attr];
        } else {
            return window.getComputedStyle(ele)[attr];
        }
    }
    const pos = parseInt(getStyle(ele, attr));
    const arr = [];
    let timer = null;
    let num = 0;
    for (let i = rate; i > 0; i -= 2) {
        arr.push(i, -i);
    }
    arr.push(0);
    clearInterval(timer);
    timer = setInterval(function () {
        ele.style[attr] = pos + arr[num] + 'px';
        num++;
        if (num === arr.length) {
            clearInterval(timer);
            cb && cb();
        }
    }, time);
}

/**
 * 阻止冒泡事件
*/
export const stopPropagation = (e) => { 
    e = e || window.event; 
    if(e.stopPropagation) {    // W3C阻止冒泡方法 
        e.stopPropagation(); 
    } else { 
        e.cancelBubble = true; // IE阻止冒泡方法 
    } 
} 

const dom = {
    getOffset,
    shaking,
    stopPropagation
}

export default dom