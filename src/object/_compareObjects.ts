import { isBasicType, isEmptyObject, isObject } from '../is'

/**
 * 比较两个对象的差异
 * - 以新对象为基准，返回新对象与旧对象的差异
 * 
 * @since 1.71.0
 * @param {Record} newObj - 新对象
 * @param {Record} oldObj - 旧对象
 * @return {Record} 返回新对象与旧对象的差异
 * 
 * @example
 * 
 * ```ts
 * import { compareObjects } from 'super-tools-lib'
 * 
 * const newObj = {
 *   a: 1,
 *   b: 2,
 * }
 * 
 * const oldObj = {
 *  a: 1,
 *  b: 3, 
 * }
 * 
 * const res = compareObjects(newObj, oldObj)
 * 
 * console.log(res) // { b: 3 }
 * ```
 */
export const compareObjects = (
    newObj: Record<string, unknown> | unknown,
    oldObj: Record<string, unknown> | unknown,
): Record<string, any> => {
    if (!isObject(oldObj) || !isObject(newObj)) {
        return {}
    }
    const changedFields = {}
    Object.keys(newObj).forEach(key => {
        if (isBasicType(newObj[key])) {
            if (oldObj[key] !== newObj[key]) {
                changedFields[key] = newObj[key]
            }
        } else if (isObject(newObj[key]) && isObject(oldObj[key])) {
            const res = compareObjects(newObj[key], oldObj[key])
            if (!isEmptyObject(res)) {
                changedFields[key] = res
            }
        } else {
            if (JSON.stringify(oldObj[key]) !== JSON.stringify(newObj[key])) {
                changedFields[key] = newObj[key]
            }
        }
    })
    return changedFields
}