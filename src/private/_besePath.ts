import { validate, reg } from '../reg'
import { _arrayFilter } from '../loop'
import { isArray, isObject } from '../is'


export const _besePath = (object, path) => {
    

    function to(arr, indexs) {
        _arrayFilter(indexs, (index) => {
            arr = isArray(arr) ? arr[index] : null
        })
        return arr
    }

    if (validate('arr', path)) {
        const key = path.slice(0, 1)
        const indexs = []
        _arrayFilter(path.match(reg.arr), (a) => {
            indexs.push(a.replace(/[^0-9]/ig, ''))
        })
        return isArray(object[key]) ? to(object[key], indexs) : null
    }

    return isObject(object) ? object[path] : null
}

// export const _besePath = (object, path) => {

//     function to(arr, indexs) {
//         _arrayFilter(indexs, (index) => {
//             arr = isArray(arr) ? arr[index] : null
//         })
//         return arr
//     }

//     if (validate('arr', path)) {
//         const key = path.slice(0, 1)
//         const indexs = []
//         _arrayFilter(path.match(reg.arr), (a) => {
//             indexs.push(a.replace(/[^0-9]/ig, ''))
//         })
//         return isArray(object[key]) ? to(object[key], indexs) : null
//     }

//     return isObject(object) ? object[path] : null
// }