/*
 * @Author: zhangce
 * @Date: 2021-11-04 17:11:40
 * @LastEditors: zhangce
 * @LastEditTime: 2022-01-14 17:35:38
 * @Description: 
 */
import typeJudgment from '../typeJudgment';
const { returnType } = typeJudgment;

const repeat = (obj) => {

    if (Object.values(obj).length !== new Set(Object.values(obj)).size) {
        console.log('重复')
    } else {
        console.log('no')
    }

}

/**
 * 对象深拷贝
 */
// const deepClone1 = (obj, hash = new WeakMap()) => {
//     // 日期对象直接返回一个新的日期对象
//     if (obj instanceof Date) {
//         return new Date(obj);
//     }
//     //正则对象直接返回一个新的正则对象     
//     if (obj instanceof RegExp) {
//         return new RegExp(obj);
//     }
//     //如果循环引用,就用 weakMap 来解决
//     if (hash.has(obj)) {
//         return hash.get(obj);
//     }
//     // 获取对象所有自身属性的描述
//     const allDesc = Object.getOwnPropertyDescriptors(obj);
//     // 遍历传入参数所有键的特性
//     const cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)

//     hash.set(obj, cloneObj)
//     for (const key of Reflect.ownKeys(obj)) {
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             cloneObj[key] = deepClone(obj[key], hash);
//         } else {
//             cloneObj[key] = obj[key];
//         }
//     }
//     return cloneObj
// }

/**
 * @description: 深拷贝
 * @param {*} target
 * @return {*}
 * 
对一个对象进行浅拷贝，
该对象下的基本类型属性会开辟新的空间，引用类型属性是还是指向同一块空间
 */
const deepClone = (data: any) => {

    // const mapTag = '[object Map]';
    // const setTag = '[object Set]';
    // const arrayTag = '[object Array]';
    // const objectTag = '[object Object]';

    // const boolTag = '[object Boolean]';
    // const dateTag = '[object Date]';
    // const errorTag = '[object Error]';
    // const numberTag = '[object Number]';
    // const regexpTag = '[object RegExp]';
    // const stringTag = '[object String]';
    // const symbolTag = '[object Symbol]';


    const type: any = returnType(data);
    let d = null;
    console.log('type', type)
    switch (type) {
        case 'Object':
            d = copyObj(data);
            break;
        case 'Function':
            d = data
            break;
        case 'Array':
            d = copyArray(data);
            break;
        default:
            d = data;
            break;
    }

    function copyArray(data: Array<any>): Array<any> {
        const arr = [];
        const length = data.length;
        let index = 0;
        while (index < length) {
            console.log('index', index, data[index])
            arr.push(data[index])
            ++index
        }
        return data
    }

    function forEach(array, iteratee) {
        let index = -1;
        const length = array.length;
        while (++index < length) {
            iteratee(array[index], index);
        }
        return array;
    }

    function isObject(target) {
        const type = typeof target;
        return target !== null && (type === 'object' || type === 'function');
    }



    function copyObj(target: Object, map = new WeakMap()): Object {

        // 如果有更深层次的对象可以继续递归直到属性为原始类型：
        if (!isObject(target)) {
            return target;
        }

        const cloneTarget = Array.isArray(target) ? [] : {};
        const isArray = Array.isArray(target);
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        const keys = isArray ? undefined : Object.keys(target);
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value;
            }
            cloneTarget[key] = copyObj(target[key], map);
        })


        return cloneTarget;
    }

    return d
}


/**
 * @description: 对象序列化
 * @param {*} obj
 * @return {*}
 */
const stringfyQueryString = (obj: Object) => {
    if (!obj) return '';
    const pairs = [];

    for (const key in obj) {
        const value = obj[key];

        if (value instanceof Array) {
            for (let i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }

    return pairs.join('&');
}

const object = {
    repeat,
    deepClone,
    stringfyQueryString
}

export default object;