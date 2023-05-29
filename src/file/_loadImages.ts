import { _arrayEach } from "../loop"

/**
 * 预加载图片
 * 
 * @since 1.66.0
 * @param urls - 图片地址数组
 * @example
 * 
 * ```ts
 * import { loadImages } from 'super-tools-lib'
 * 
 * loadImages([
 * 'https://www.baidu.com/img/bd_logo1.png',
 * 'https://www.baidu.com/img/bd_logo2.png',
 * 'https://www.baidu.com/img/bd_logo3.png',
 * 'https://www.baidu.com/img/bd_logo4.png',
 * 'https://www.baidu.com/img/bd_logo5.png',
 * 'https://www.baidu.com/img/bd_logo6.png',
 * ]).then((imgs) => {
 *   console.log(imgs)
 * })
 * ```
 */
export const loadImages = (urls: string[]) => {
    const size = urls.length
    const imgs = []

    const _Image = (resolve, reject, url) => {
        const img = new Image()

        img.onload = () => {
            imgs.push(img.src)
            if (imgs.length === size) {
                resolve(imgs)
            }
        }

        img.onerror = () => {
            setTimeout(() => {
                _Image(resolve, reject, url)
            }, 1000)
        }
        img.src = url
    }

    return new Promise((resolve, reject) => {
        _arrayEach(urls, (url) => {
            _Image(resolve, reject, url)
        })
    })
}