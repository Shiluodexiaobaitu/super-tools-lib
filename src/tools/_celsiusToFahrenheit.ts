/**
 * 将摄氏温度转华氏温度
 * 
 * @since 1.62.0
 * @param {*} celsius - 摄氏温度
 * @return {number} 返回华氏温度
 * @example
 * 
 * ```ts
 * import { celsiusToFahrenheit } from 'super-tools-lib'
 * 
 * celsiusToFahrenheit(10); // 50
 * ```
 */
export const celsiusToFahrenheit = (celsius: number): number => {
    return celsius * 9 / 5 + 32
}