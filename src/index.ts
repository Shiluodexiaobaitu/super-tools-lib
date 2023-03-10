export { version } from '../package.json'

export {
    initialToCapitali,
    repeat,
    trim,
    getTextWidth,
    transFormat,
    strInversion,
    toLine,
    toFullHexColor,
    decode,
    letterToEmoji,
    toPascalCase,
    removeSpaces,
    replaceText,
} from './string'

export {
    guid,
    throttle,
    debounce,
    fileDownload,
    fuzzyQuery,
    colorHex,
    viewportToPixels,
    noRefdelUrlParam,
    getAge,
    getSex,
    digitUppercase,
    hexToRgba,
    rgbaToHex,
    injectScript,
    sinogToLetter,
    getFitSize,
    checkPassWord,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
} from './tools'

export {
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    SessionStorage,
    getPosition,
    winCopy,
    print,
    copy,
    scrollToTop,
    userBrowser,
    getLocalStorageSize,
    getUrlParam,
    cookie,
} from './browser'

export { IndexedDB } from './IndexedDB'

export {
    performanceAnalysis,
    getPerformanceTiming,
} from './performance'

export {
    calcDistance,
    lonLatToMercator,
    mercatorToLonlat,
} from './map'

export { validate } from './reg'

export {
    getOffset,
    shaking,
    stopPropagation,
    hasClass,
    addClass,
    removeClass,
    replaceClass,
    scrollToTheBottom,
    textVisibilityChange,
    getTransformMatrix,
    isDescendant,
    getSelectedText,
    insertAfter,
    insertBefore,
    insertHtmlAfter,
    eleReplace,
    insertHtmlBefore,
} from './dom'

export {
    arrayUnique,
    arrayNonRepeatfy,
    aLineUnique,
    bubbleSort,
    last,
    alphabeticSort,
    arrToObject,
    toNumbers,
    countBy,
    indexOfMax,
    indexOfMin,
    contains,
} from './array'

export {
    cloneDeep,
    stringfyQueryString,
    values,
    keys,
} from './object'

export {
    isBase64,
    isArray,
    isString,
    isFunction,
    isObject,
    isNumber,
    isWeiXin,
    isNull,
    isUndefined,
    isDate,
    isRegExp,
    isError,
    isSymbol,
    isPromise,
    returnType,
    isSupportWebP,
    isMobile,
    isAndroidMobileDevice,
    isAppleMobileDevice,
    isImg,
    isUrl,
    isObjectKeyEqual,
    isObjectExistsKey,
    isObjectIncludeSpecifiedKey,
    isEmptyObject,
    isEmptyArray,
    isDarkMode,
    isHexColor,
    isBasicType,
    isSet,
    isMap,
    isOdd,
    isEven,
} from './is'
export { isEqual } from './is/isEqual'
export { isContain } from './is/isContain'

export {
    downBlob,
    getFileBase64,
    blobToDataURL,
    drawAndShareImage,
    base64ToFile,
} from './file'

export { vConsole } from './console'

export { Socket } from './Socket'

export { Ajax } from './Ajax'

export { orient } from './mobile'

export {
    dateFormater,
    formatPassTime,
    formatRemainTime,
    dayDiff,
    monthDiff,
    compareDate,
    formatSeconds,
    getQuarter,
    getLastDate,
    getCurrentSecond,
    getFirstDate,
} from './date'

export { shuffle } from './algorithm'

export {
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    smallRounding,
    range,
    closest,
} from './number'

export {
    forEach,
    filter,
} from './loop'
export { map } from './loop/map'

export {
    sortAscii,
    generateSign,
} from './encrypt'

export {
    EventObserver,
    addEventListener,
    removeEventListener,
    dispatchEvent,
} from './EventObserver'

export { StateObserver } from './StateObserver'

export {
    distance,
    degsToRads,
    getPolygonCenter,
} from './math'
export { scalePolygon } from './math/scalePolygon'