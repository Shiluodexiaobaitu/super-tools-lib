
// 生成一个唯一的guid
export { guid } from './_guid'

// 节流
export { throttle } from './_throttle'

// 防抖
export { debounce } from './_debounce'

// 模糊查询
export { fuzzyQuery } from './_fuzzyQuery'

// RGB颜色转16进制
export { colorHex } from './_colorHex' 

// 16进制颜色转RGBA
export { hexToRgba } from './_hexToRgba'

// rgba颜色转16进制
export { rgbaToHex } from './_rgbaToHex'

// 计算vh / vw转px
export { viewportToPixels } from './_viewportToPixels'

// 根据身份证号获取年龄
export { getAge } from './_getAge'

// 根据身份证号获取性别
export { getSex } from './_getSex'

// 数字转化为大写金额
export { digitUppercase } from './_digitUppercase'

// 动态引入js
export { injectScript } from './_injectScript'

// 汉字转字母
export { sinogToLetter } from './_sinogToLetter' 

// 返回设计稿上px在不同屏幕下的适配尺寸
export { getFitSize } from './_getFitSize'

// 检测密码强度
export { checkPassWord } from './_checkPassWord'

// 将华氏温度转换为摄氏温度
export { fahrenheitToCelsius } from './_fahrenheitToCelsius'

// 将摄氏温度转华氏温度
export { celsiusToFahrenheit } from './_celsiusToFahrenheit'

// 生成sign 按 Key 的 ASCII 正序排序，拼接为字符串返回
export { generateSign } from './_generateSign'

// 按 ASCII 正序排序
export { sortAscii } from './_sortAscii'

// 将color颜色变浅level倍
export { lighten } from './_lighten'

// 将color颜色变深level倍
export { darken } from './_darken'

// 处理promise的错误
export { awaitTo } from './_awaitTo'