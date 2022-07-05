/*
 * @Author: zhangce
 * @Date: 2021-12-30 11:56:59
 * @LastEditors: zhangce
 * @LastEditTime: 2022-07-05 13:37:25
 * @Description: 
 */

class Ajax {

    private options: any = null
    constructor(options) {
        this.options = { data: null, method: 'GET', responseType: 'json', ...options };
    }

    send(callback: (res: any) => void, error: (err: any) => void) {
        const { data, method, url, responseType } = this.options;
        const xhr = new XMLHttpRequest();

        xhr.responseType = responseType;

        xhr.open(method, url);

        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        data !== null && xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');
        xhr.addEventListener('load', function () {
            const { status, response } = this;
            if (status === 200 && callback && typeof callback === 'function') {
                callback(response)
            }
        });

        xhr.addEventListener('progress', function (event) {
            console.log('event', event)
        });

        xhr.addEventListener('error', function (err) {
            error(err)
        });

        xhr.send(JSON.stringify(data));
    }

    set url(url) {
        this.options.url = url;
    }

    get url() {
        return this.options.url;
    }

}

export default Ajax;