import { version } from '../package.json'

import {
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

import {
    guid,
    getFileBase64,
    throttle,
    debounce,
    fileDownload,
    fuzzyQuery,
    getUrlParam,
    cookie,
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

import {
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    getPosition,
    winCopy,
    print,
    copy,
    scrollToTop,
    userBrowser,
    getLocalStorageSize,
} from './browser'

import { IndexedDB } from './IndexedDB'

import {
    performanceAnalysis,
    getPerformanceTiming,
} from './performance'

import {
    getDistance,
    calcDistance,
    lonLatToMercator,
    mercatorToLonlat,
} from './map'

import { validate } from './reg'

import {
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

import {
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

import {
    cloneDeep,
    stringfyQueryString,
    values,
    keys,
} from './object'

import {
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
} from './is'

import { downBlob } from './file'

import { vConsole } from './console'

import { Socket } from './Socket'

import { Ajax } from './Ajax'

import { orient } from './mobile'

import {
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

import { shuffle } from './algorithm'

import {
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    smallRounding,
    range,
    closest,
} from './number'

import {
    forEach,
    filter,
} from './loop'

import {
    sortAscii,
    generateSign,
} from './encrypt'

import {
    EventObserver,
    addEventListener,
    removeEventListener,
    dispatchEvent,
} from './EventObserver'

import { StateObserver } from './StateObserver'

import {
    distance,
    degsToRads,
} from './math'

export default {
    version: version,
    distance,
    degsToRads,
    isImg,
    isUrl,
    isObjectKeyEqual,
    isObjectExistsKey,
    isObjectIncludeSpecifiedKey,
    isEmptyObject,
    isEmptyArray,
    isDarkMode,
    isHexColor,
    transFormat,
    strInversion,
    toLine,
    toFullHexColor,
    decode,
    letterToEmoji,
    toPascalCase,
    removeSpaces,
    replaceText,
    initialToCapitali,
    repeat,
    trim,
    getTextWidth,
    guid,
    getFileBase64,
    isAndroidMobileDevice,
    isAppleMobileDevice,
    throttle,
    debounce,
    fileDownload,
    fuzzyQuery,
    getUrlParam,
    cookie,
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
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    getPosition,
    winCopy,
    print,
    copy,
    scrollToTop,
    userBrowser,
    IndexedDB,
    getLocalStorageSize,
    performanceAnalysis,
    getPerformanceTiming,
    getDistance,
    calcDistance,
    lonLatToMercator,
    mercatorToLonlat,
    validate,
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
    insertHtmlBefore,
    eleReplace,
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
    cloneDeep,
    stringfyQueryString,
    values,
    keys,
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
    downBlob,
    vConsole,
    Ajax,
    Socket,
    orient,
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
    smallRounding,
    range,
    closest,
    shuffle,
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    forEach,
    filter,
    sortAscii,
    generateSign,
    EventObserver,
    StateObserver,
    addEventListener,
    removeEventListener,
    dispatchEvent,
}