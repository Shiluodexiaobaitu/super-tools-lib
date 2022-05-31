/*
 * @Author: zhangce
 * @Date: 2021-11-04 17:11:40
 * @LastEditors: zhangce
 * @LastEditTime: 2022-05-31 15:41:30
 * @Description: 
 */
import { version } from '../package.json';

import {
    initialToCapitali,
    repeat,
    trim,
    getTextWidth,
    transFormat,
    strInversion
} from './string';

import {
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
    getFitSize
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
    IndexedDB,
    getLocalStorageSize
} from './browser';

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
    scrollToTheBottom
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
    deserialization,
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
    isSupportWebP
} from './typeJudgment';

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
    formatRemainTime
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
    transFormat,
    strInversion,
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
    arrayUnique,
    arrayNonRepeatfy,
    aLineUnique,
    bubbleSort,
    cloneDeep,
    stringfyQueryString,
    deserialization,
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
    downBlob,
    vConsole,
    socket,
    Ajax,
    orient,
    dateFormater,
    formatPassTime,
    formatRemainTime,
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

// export declare const