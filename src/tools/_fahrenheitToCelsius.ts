/**
 * 将华氏温度转换为摄氏温度
 * 
 * @since 1.62.0
 * @param {*} fahrenheit - 华氏温度
 * @return {number} 返回摄氏温度
 * @example
 * 
 * ```ts
 * import { fahrenheitToCelsius } from 'super-tools-lib'
 * 
 * fahrenheitToCelsius(50); // 10
 * ```
 */
export const fahrenheitToCelsius = (fahrenheit: number): number => {
    return (fahrenheit - 32) * 5 / 9
}