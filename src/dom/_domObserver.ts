
/**
 * dom观察者
 * @param {IntersectionObserverCallback} callback
 * @param {IntersectionObserverInit} options
 * @return {IntersectionObserver}
 * 
 * @example
 * 
 * const io = domObserver((entries) => {
 *    console.log(entries)
 * })
 * 
 * io.observe(document.querySelector('#test'))
 */
export const domObserver = (callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => {
    return new IntersectionObserver(callback, options)
}