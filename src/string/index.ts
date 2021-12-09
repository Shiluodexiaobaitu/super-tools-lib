/**
  * 字符串首位是字母转大写
*/
const initialToCapitali = (gname: string): string => {
    const pattern = new RegExp('[A-Za-z]+');
    const str = gname.substr(0, 1);
    if (pattern.test(str)) {
        return `${str.toUpperCase()}${gname.substr(1)}`
    } else {
        const str1 = gname.substr(-1);
        return `${gname.substr(0, gname.length - 1)}${str1.toUpperCase()}`
    }
}

/**
* 传入字符串，和重复次数，返回结果字符串
* @return {string} 
* @param{string, number} str n 
* @example
* loadImg(url).then(console.log('加载完成')).catch(err => {console.log(err)})
*/
const repeat = (str: string, n: number): string => {
    let res = ''
    while (n) {
        if (n % 2 === 1) res += str
        if (n > 1) str += str
        n >>= 1
    }
    return res
}

/**
 * 去除字符串首尾空格
*/
const trim = (str:string):string => {
    return str.replace(/^\s+(.*?)\s+$/g, '$1');
}

const string = {
    initialToCapitali,
    repeat,
    trim
};
export default string;