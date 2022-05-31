/*
 * @Author: zhangce
 * @Date: 2021-08-16 18:09:23
 * @LastEditors: zhangce
 * @LastEditTime: 2022-05-31 13:47:25
 * @Description: 
 */
import Socket from './socket';
import Ajax from './ajax';


const socket = ({ url }: { url: string }): any => {
    return new Socket({ url })
}

export {
    socket,
    Ajax
}