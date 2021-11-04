// import typeJudgment from '../typeJudgment';
// const { isObject } = typeJudgment;

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
const deepClone = (obj, hash = new WeakMap()) => {
    // 日期对象直接返回一个新的日期对象
    if (obj instanceof Date) {
        return new Date(obj);
    }
    //正则对象直接返回一个新的正则对象     
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    //如果循环引用,就用 weakMap 来解决
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    // 获取对象所有自身属性的描述
    const allDesc = Object.getOwnPropertyDescriptors(obj);
    // 遍历传入参数所有键的特性
    const cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)

    hash.set(obj, cloneObj)
    for (const key of Reflect.ownKeys(obj)) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            cloneObj[key] = deepClone(obj[key], hash);
        } else {
            cloneObj[key] = obj[key];
        }
    }
    return cloneObj
}


const object = {
    repeat,
    deepClone
}

export default object;