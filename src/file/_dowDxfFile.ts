
/**
 * 
 * 下载dxf文件
 * @since 1.0.0
 * @param data dxf文件内容
 * @param fileName 下载的文件名
 * @example
 * 
 * ```ts
 * import { dowDxfFile } from 'super-tools-lib'
 * 
 * dowDxfFile(data, '1.dxf')
 * ```
 * 
 * @see
 * 
 * [dxf文件格式](https://blog.csdn.net/qq_35624642/article/details/103654622)
 * 
 */
export const dowDxfFile = (data, fileName: string) => {
    const blob = new Blob([data], { type: 'application/dxf' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}