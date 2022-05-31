/**
 * 小数取整
 * @param {数字} num
 * @param {第几位小数四舍五入} place
*/
const smallRounding = (num: number, place: number): number => {
    const p = '10000000000000000000000000000';
    const n = Number(p.slice(0, place))
    return Math.round(num * n) / n
}



export {
    smallRounding
}