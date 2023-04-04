/**
 * 16进制颜色转RGBA
 * 
 * @since 1.62.0
 * @param {string} str - 要操作的16进制颜色值
 * @param {number} alpa - 透明度
 * @return {string} 返回RGBA颜色值
 * @example
 * 
 * ```ts
 * import { hexToRgba } from 'super-tools-lib'
 * 
 * hexToRgba("#ffc0cb"); // 'rgba(255,192,203,1)'
 * hexToRgba("#ffc0cb", 0.7); // 'rgba(255,192,203,0.7)'
 * ```
 */
export const hexToRgba = (str: string, alpa: number): string => {
    alpa = alpa === undefined ? 1 : alpa
    if (!str) return
    let color = str.toLowerCase()
    const pattern = /^#([0-9|a-f]{3}|[0-9|a-f]{6})$/
    if (color && pattern.test(color)) {
        if (color.length === 4) {
            // 将三位转换为六位
            color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3]
        }
        //处理六位的颜色值
        const colorNew = []
        for (let i = 1; i < 7; i += 2) {
            colorNew.push(parseInt('0x' + color.slice(i, i + 2)))
        }
        colorNew.push(alpa)

        return 'rgba(' + colorNew.join(',') + ')'
    }
    return color
}