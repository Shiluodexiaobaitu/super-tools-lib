import typeJudgment from '../typeJudgment';
const { isObject } = typeJudgment;

const repeat = (obj) => {

    if (Object.values(obj).length !== new Set(Object.values(obj)).size) {
        console.log('重复')
    } else {
        console.log('no')
    }

}

/**
 * 返回传入对象的一个深度克隆的副本对象
 * @param{object} obj 
 * @return{object}
 * @example
 * cloneDeep(obj)
 */
const cloneDeep = (obj) => {
    if (!isObject(obj)) return obj;
    let result
    if (Array.isArray(obj)) {
        result = []
        obj.forEach((item) => {
            result.push(cloneDeep(item))
        })
        return result
    }
    result = {}
    for (const key in obj) {
        const item = obj[key]
        if (isObject(item)) {
            result[key] = cloneDeep(item)
        } else {
            result[key] = item
        }
    }

    return result
}

const object = {
    repeat,
    cloneDeep
}

export default object;