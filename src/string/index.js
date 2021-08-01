/**
  * 字符串首位是字母转大写
*/
const initialToCapitali = (gname) => {
    let pattern = new RegExp('[A-Za-z]+');
    let str = gname.substr(0, 1);
    if (pattern.test(str)) {
        return `${str.toUpperCase()}${gname.substr(1)}`
    } else {
        let str1 = gname.substr(-1);
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
let repeat = (str, n) => {
    let res = ''
    while (n) {
        if (n % 2 === 1) res += str
        if (n > 1) str += str
        n >>= 1
    }
    return res
}

const string = {
    initialToCapitali,
    repeat
};
export default string;