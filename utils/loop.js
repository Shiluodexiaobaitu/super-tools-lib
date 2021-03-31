!(function () {

    /**
     * 数组去重复 利用ES6 Set去重（ES6中最常用）
    */
    let arrayUnique = function (arr) {
        return Array.from(new Set(arr))
        // var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    }

    /**
     * 利用Map数据结构去重
    */
    let arrayNonRepeatfy = function (arr) {
        let map = new Map();
        let array = new Array();  // 数组用于返回结果
        for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {  // 如果有该key值
                map.set(arr[i], true);
            } else {
                map.set(arr[i], false);   // 如果没有该key值
                array.push(arr[i]);
            }
        }
        return array;
    }

    /**
     * 一行代码数组去重复
    */
    let aLineUnique = function (arr) {
        return [...new Set(arr)]
    }

    /**
     * 获取一个元素距离浏览器左上角的偏移量
    */
    let getOffset = function(ele) {
        let left = ele.offsetLeft // 左偏移
        let top = ele.offsetTop // 上偏移
        let parent = ele.offsetParent

        // 只要找到的父级参照物不是body 就继续往上查找（一直循环下去 一直到body为止）
        while (parent && parent.nodeName.toLowerCase() !== "body") {
            left += parent.offsetLeft + parent.clientLeft
            top += parent.offsetTop + parent.clientTop
            parent = parent.offsetParent
        }
        return {
            left,
            top
        }
    }

    return {
        arrayUnique,
        arrayNonRepeatfy,
        aLineUnique,             
        getOffset,                 
    }
})()