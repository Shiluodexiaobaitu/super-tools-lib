/**
 * 数值千分位加符号
 * 
 * @since 1.62.0
 * @param {string} price - 数值
 * @param {string} sign - 符号 默认 （,）
 * @return {string} 返回添加符号后的值
 * @example
 * 
 * ```ts
 * import { disLonlat } from 'super-tools-lib'
 * 
 * disLonlat({lon: 116.445088, lat: 39.94614}, {lon: 116.145088, lat: 39.94614}) // 25574.209968296687
 * ```
 */
export const formatPrice = (price: string, sign = ','): string => {
    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, sign)
}