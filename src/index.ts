/*
 * @Author: zhangce
 * @Date: 2021-11-04 17:11:40
 * @LastEditors: zhangce
 * @LastEditTime: 2022-09-23 14:35:52
 * @Description: 
 */
import { version } from '../package.json';

import {
    initialToCapitali,
    repeat,
    trim,
    getTextWidth,
    transFormat,
    strInversion,
    toLine,
} from './string';

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
} from './tools';

import {
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    getPosition,
    winCopy,
    print,
    setVibration,
    copy,
    scrollToTop,
    userBrowser,
    getLocalStorageSize
} from './browser';

import { IndexedDB } from './IndexedDB';

import {
    performanceAnalysis,
    getPerformanceTiming,
} from './performance';

import {
    getDistance,
    calcDistance,
    lonLatToMercator,
    mercatorToLonlat
} from './map';

import { validate } from './reg';

import {
    getOffset,
    shaking,
    stopPropagation,
    hasClass,
    addClass,
    removeClass,
    replaceClass,
    numberRoll,
    scrollToTheBottom,
    textVisibilityChange,
} from './dom';

import {
    arrayUnique,
    arrayNonRepeatfy,
    aLineUnique,
    bubbleSort
} from './array';

import {
    cloneDeep,
    stringfyQueryString,
    values,
    keys
} from './object';

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
} from './is';

import { downBlob } from './file';

import { vConsole } from './console';

import {
    socket,
    Ajax
} from './request';

import { orient } from './mobile';

import {
    dateFormater,
    formatPassTime,
    formatRemainTime,
    dayDiff,
} from './date';

import { shuffle } from './algorithm';

import {
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    smallRounding
} from './number';

import {
    forEach,
    filter
} from './loop'

export default {
    version: version,
    isImg,
    isUrl,
    transFormat,
    strInversion,
    toLine,
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
    setVibration,
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
    numberRoll,
    scrollToTheBottom,
    textVisibilityChange,
    arrayUnique,
    arrayNonRepeatfy,
    aLineUnique,
    bubbleSort,
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
    socket,
    Ajax,
    orient,
    dateFormater,
    formatPassTime,
    formatRemainTime,
    dayDiff,
    smallRounding,
    shuffle,
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    forEach,
    filter
};