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

const array = {
    arrayUnique,
    arrayNonRepeatfy,
    aLineUnique
}

export default array;