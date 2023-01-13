import { viewportToPixels } from '../tools'

/**
 * @desc: 移动端日志查看工具
 * @return {*}
 */
const vConsole = () => {
    const btn = document.createElement('div')
    btn.style.cssText = ' background: #07c160;position: fixed; left: 0;top: 85%;font-size: 1.07692308em;border-radius: 0.30769231em;box-shadow: 0 0 0.61538462em rgb(0 0 0 / 40%);padding: 0.61538462em 1.23076923em;color: #fff'
    btn.innerHTML = 'vConsole'
    document.body.appendChild(btn)

    const cvmask = document.createElement('div')
    cvmask.id = 'vc_mask'
    cvmask.style.cssText = 'position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.6);z-index:1'

    const panel = document.createElement('div')
    panel.id = 'vc_panel'
    panel.style.cssText = ' font-size: 14px; max-height: 85vh; position: fixed;min-height: 85vh;left: 0;right: 0; bottom: 0;z-index: 10002; background-color: #191919;-webkit-transition: -webkit-transform 0.3s;transition: -webkit-transform 0.3s; transition: transform 0.3s; transition: transform 0.3s, -webkit-transform 0.3s;'
    const panel_top = document.createElement('div')
    panel_top.style.cssText = 'border-bottom: 1px solid rgba(255,255,255,0.05);overflow-x: auto;height: 3em;width: auto;white-space: nowrap;color: #fff; line-height: 3em; padding: 0 1.15384615em;'
    panel_top.innerHTML = 'log'
    panel.appendChild(panel_top)
    const h = viewportToPixels('85vh')
    const ulH = h - (14 * 6)

    const panel_ul = document.createElement('ul')
    panel_ul.style.cssText = `padding-bottom: 2em; width: 100%; height: ${ulH}px; overflow-y: auto; padding-bo`
    panel.appendChild(panel_ul)

    const panel_b = document.createElement('div')
    panel_b.style.cssText = 'justify-content: space-between;align-items: center; background-color: #191919; height: 3em; border-top: 1px solid rgba(255,255,255,0.05);line-height: 3em;position: absolute;left: 0;right: 0;bottom: 0; display: flex; -webkit-box-orient: horizontal;-webkit-box-direction: normal; -webkit-flex-direction: row;-moz-box-orient: horizontal;-moz-box-direction: normal; -ms-flex-direction: row;flex-direction: row;'
    const clear = document.createElement('div')
    clear.style.cssText = 'color: #fff; text-decoration: none;width: 50%;-webkit-box-flex: 1;-webkit-flex: 1;-moz-box-flex: 1;-ms-flex: 1;flex: 1;text-align: center;position: relative;'
    clear.innerText = 'Clear'
    const hide = document.createElement('div')
    hide.style.cssText = 'color: #fff; text-decoration: none;width: 50%;-webkit-box-flex: 1;-webkit-flex: 1;-moz-box-flex: 1;-ms-flex: 1;flex: 1;text-align: center;position: relative;'
    hide.innerText = 'Hide'
    const panel_b_c = document.createElement('div')
    panel_b_c.style.cssText = 'width: 1px; background: rgb(97 94 94);height: 2em;'
    panel_b.appendChild(clear)
    panel_b.appendChild(panel_b_c)
    panel_b.appendChild(hide)
    panel.appendChild(panel_b)

    const onHide = () => {
        const vc_panel = document.getElementById('vc_panel')
        const vc_mask = document.getElementById('vc_mask')
        document.body.removeChild(vc_panel)
        document.body.removeChild(vc_mask)
    }

    const drawerMove = (e) => {
        let l = e.touches[0].clientX - (btn.scrollWidth / 2)
        let t = e.touches[0].clientY - (btn.scrollHeight / 2)

        const minL = 0
        const minT = 0

        const maxL = window.innerWidth - btn.scrollWidth
        const maxT = window.innerHeight - btn.scrollHeight

        l < minL && (l = 0)
        t < minT && (t = 0)

        l > maxL && (l = maxL)
        t > maxT && (t = maxT)

        btn.style.left = l + 'px'
        btn.style.top = t + 'px'
    }

    const winMouseup = () => {
        window.removeEventListener('touchmove', drawerMove)
        window.removeEventListener('touchend', winMouseup)
    }

    //打开
    btn.onclick = () => {
        document.body.appendChild(panel)
        document.body.appendChild(cvmask)
    }
    btn.ontouchstart = () => {
        window.removeEventListener('touchmove', drawerMove)
        window.addEventListener('touchmove', drawerMove)
        window.addEventListener('touchend', winMouseup)
    }

    //移除
    cvmask.onclick = () => {
        onHide()
    }
    //hide
    hide.onclick = () => {
        onHide()
    }
    //clear
    clear.onclick = () => {
        panel_ul.innerHTML = ''
    }
    const oldLog = console.log
    window.console.log = function (...rest) {
        const panel_li = document.createElement('li')
        // const pre = document.createElement('pre');
        // const code = document.createElement('code');

        panel_li.style.cssText = 'margin: 0;padding: 0.46153846em 0.61538462em;overflow: hidden;line-height: 1.3;border-bottom: 1px solid rgba(255,255,255,0.05);word-break: break-word;color: #fff'
        let text = ''

        rest.forEach((it: any) => {
            oldLog(Object.prototype.toString.call(it))
            text += JSON.stringify(it, null, 4)

        })
        panel_li.innerText = `${text}`
        // code.textContent = JSON.stringify(rest, null, 4)
        // panel_li.innerText = `${rest}`

        // pre.appendChild(code);
        // panel_li.appendChild(pre);
        panel_ul.appendChild(panel_li)
    }
}

export {
    vConsole,
}