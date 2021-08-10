const reg: Object = {
    //手机号
    mobile: /^(((13[0-9]{1})|(14[5,7,9]{1})|(15[0-3,5-9]{1})|(166)|(17[0-3,5-8]{1})|(18[0-9]{1})|(19[8,9]{1}))+\d{8})$|(^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$)/,
    //网址
    website: /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/,
    nickname: /^[\u4E00-\u9FA5a-zA-Z0-9]{2,12}$/,
    verify_code: /^\d{6}$/,
    verify_pwd: /^([a-zA-Z0-9_*@#]{6,16})$/,
    //邮箱
    email: /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/,
    //字符
    character: /^.{0,254}$/,
    //正整数
    intNumber: /^[1-9]\d*$/,
    //身份证
    cP: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    //车牌号
    cPattern: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
    //数字0～30
    number: /^[0-9]+.{0,1}[0-9]{0,30}$/,
    //数字，字母，数字或字母，字母或数字组合
    numeric_letters: /^[0-9a-zA-Z]{0,40}$/g,
    //数字，字母，汉字，任意组合
    chinese_numeric_letters: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
};

function validate(key:string, value:string):boolean {
    return new RegExp(reg[`${key}`]).test(value);
}

const regular = {
    validate
}

export default regular;