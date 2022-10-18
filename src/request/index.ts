/*
 * @Author: zhangce
 * @Date: 2021-08-16 18:09:23
 * @LastEditors: zhangce
 * @LastEditTime: 2022-10-18 17:39:42
 * @Description: 
 */
import Socket from './socket'
import Ajax from './ajax'


const socket = ({ url }: { url: string }): any => {
    return new Socket({ url })
}

export {
    socket,
    Ajax
}