
export { guid } from './_guid'

export { throttle } from './_throttle'

export { debounce } from './_debounce'

export { fuzzyQuery } from './_fuzzyQuery'

export { colorHex } from './_colorHex' 

export { hexToRgba } from './_hexToRgba'

export { rgbaToHex } from './_rgbaToHex'

export { viewportToPixels } from './_viewportToPixels'

export { getAge } from './_getAge'

export { getSex } from './_getSex'

export { digitUppercase } from './_digitUppercase'

export { injectScript } from './_injectScript'

export { sinogToLetter } from './_sinogToLetter' 

export { getFitSize } from './_getFitSize'

export { checkPassWord } from './_checkPassWord'

export { fahrenheitToCelsius } from './_fahrenheitToCelsius'

export { celsiusToFahrenheit } from './_celsiusToFahrenheit'

export { generateSign } from './_generateSign'

export { sortAscii } from './_sortAscii'

/**
 * @desc dom转img
 * 
 * @since 1.62.0
 * @param {*} id domID
 * @param {*} name 图片名
 * @param {*} cb 成功回调
 * @return {*}
 */
// 依赖库版本： "html2canvas": "^1.4.1",
//  export const domToImg = (id, name, cb) => {
// 	window.pageYoffset = 0
// 	document.documentElement.scrollTop = 0
// 	document.body.scrollTop = 0
// 	const node = document.getElementById(id)
// 	const width = node.offsetWidth //dom宽
// 	const height = node.offsetHeight //dom高
// 	const scale = 2 //放大倍数 这个相当于清晰度 调大一点更清晰一点
// 	html2canvas(node, {
// 		width: width,
// 		heigth: height,
// 		backgroundColor: '#F5F7FB', //背景颜色 为null是透明
// 		dpi: window.devicePixelRatio * 2, //按屏幕像素比增加像素
// 		scale: scale,
// 		X: 0,
// 		Y: 0,
// 		scrollX: -3, //如果左边多个白边 设置该偏移-3 或者更多
// 		scrollY: -10,
// 		useCORS: true, //是否使用CORS从服务器加载图像 !!!
// 		allowTaint: true, //是否允许跨域图像污染画布  !!!
// 	}).then((canvas) => {
// 		const url = canvas.toDataURL() //这里上面不设值cors会报错
// 		const a = document.createElement('a') //创建一个a标签 用来下载
// 		a.download = name || '图片.png'
// 		const event = new MouseEvent('click') //增加一个点击事件
// 		//如果需要下载的话就加上这两句
// 		a.href = url //此处的url为base64格式的图片资源
// 		a.dispatchEvent(event) //触发a的单击事件 即可完成下载

// 		if (cb && typeof cb === 'function') {
// 			cb()
// 		}
// 	})
// }