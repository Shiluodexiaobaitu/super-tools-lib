import { isValue } from './_isValue'

/**
 * 检查对象是否有指定的key，并且key对应的value不为null / undefined / NaN / Infinity / -Infinity / ''
 * 
 * @since 1.72.0
 * @param {Record<string, T>} obj - 要检查的对象
 * @param {string[]} [keys=[]] - 要检查的键
 * @return {*}
 */
export const isObjectHasKeysIsValue = <T>(
    obj: Record<string, T>,
    keys: string[] = [],
) => {
    const objKeys = Object.keys(obj)
    return keys.every(item => objKeys.includes(item) && isValue(obj[item])) ?? false
}