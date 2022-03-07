/*
 * @Author: zhangce
 * @Date: 2021-08-16 18:09:23
 * @LastEditors: zhangce
 * @LastEditTime: 2021-12-30 12:11:50
 * @Description: 
 */
import Socket from './socket';
import Ajax from './ajax';


const socket = ({ url }: { url: string }): any => {
    return new Socket({ url })
}

const request = {
    socket,
    Ajax
}

export default request;