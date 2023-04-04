import { strChineseFirstPY, oMultiDiff } from './_utils'


/**
 * 汉字转字母
 * 
 * @since 1.62.0
 * @param {string} str - 要操作的汉字
 * @return {string} 返回汉字首字母
 * @example
 * 
 * ```ts
 * import { sinogToLetter } from 'super-tools-lib'
 * 
 * sinogToLetter("你好"); // 'NH'
 * ```
 */
export const sinogToLetter = (str: string) => {

    function checkCh(ch) {
        const uni = ch.charCodeAt(0)
        //如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数    
        if (uni > 40869 || uni < 19968)
            return ch //dealWithOthers(ch);    
        //检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母    
        return (oMultiDiff[uni] ? oMultiDiff[uni] : (strChineseFirstPY.charAt(uni - 19968)))
    }

    function mkRslt(arr: Array<any>) {
        let arrRslt = ['']
        for (let i = 0, len = arr.length; i < len; i++) {
            const str = arr[i]
            const strlen = str.length
            if (strlen === 1) {
                for (let k = 0; k < arrRslt.length; k++) {
                    arrRslt[k] += str
                }
            } else {
                const tmpArr = arrRslt.slice(0)
                arrRslt = []
                for (let k = 0; k < strlen; k++) {
                    //复制一个相同的arrRslt    
                    const tmp = tmpArr.slice(0)
                    //把当前字符str[k]添加到每个元素末尾    
                    for (let j = 0; j < tmp.length; j++) {
                        tmp[j] += str.charAt(k)
                    }
                    //把复制并修改后的数组连接到arrRslt上    
                    arrRslt = arrRslt.concat(tmp)
                }
            }
        }
        return arrRslt.join()
    }

    if (typeof (str) !== 'string')
        throw new Error('函数makePy需要字符串类型参数!')
    const arrResult = []
    //将字符串转码后转为数组  
    for (let i = 0, len = str.length; i < len; i++) {
        const ch = str.charAt(i)
        arrResult.push(checkCh(ch))
    }
    return mkRslt(arrResult)
}