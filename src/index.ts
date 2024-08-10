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
    throttle,
    debounce,
    fuzzyQuery,
    colorHex,
    viewportToPixels,
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
    sortAscii,
    lighten,
    darken,
    generateSign,
    awaitTo,
} from './tools'

import {
    toFullScreen,
    LocalStorage,
    SessionStorage,
    getPosition,
    disableContext,
    print,
    copyText,
    scrollToTop,
    userBrowser,
    getLocalStorageSize,
    getUrlParam,
    cookie,
    noRefdelUrlParam,
    getWindowCorners,
    getWindowCenter,
    newWin,
    titleTex,
    mBroadcastChannel,
    removeUrlParam,
    onFullscreenchange,
    onVisibilityChange,
} from './bom'



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
    getSelectedText,
    insertAfter,
    insertBefore,
    insertHtmlAfter,
    eleReplace,
    insertHtmlBefore,
    getAttr,
    setAttr,
    getDomBound,
    classnames,
    requestFullscreen,
    exitFullscreen,
    observeContainerChange,
} from './dom'

import {
    arrayUnique,
    bubbleSort,
    last,
    arrToObject,
    toNumbers,
    countBy,
    indexOfMax,
    indexOfMin,
    contains,
    flattenArray,
    sortArray,
    shuffle,
    reduce,
    depthTraversal,
    fastFilter,
    deduplicateArray,
} from './array'

import {
    cloneDeep,
    objToOrder,
    orderToObj,
    values,
    keys,
    get,
    has,
    set,
    pick,
    omit,
    parse,
    watch,
    compareObjects,
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
    isBasicType,
    isSet,
    isMap,
    isOdd,
    isEven,
    isConsole,
    isObjectHasKeysIsValue,
    isValue,
    isNaN,
    isObjectAbsentKeys,
    isPointInPolygon,
    isDescendant,
} from './is'

import { isEqual } from './is/_isEqual'

import { isContain } from './is/_isContain'

import {
    downBlob,
    getFileBase64,
    blobToDataURL,
    drawAndShareImage,
    base64ToFile,
    fileDownload,
    watermark,
    dowDxfFile,
    addTextToImage,
    loadImages,
} from './file'

import { log } from './console'

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
    getSecond,
    getFirstDate,
} from './date'

import {
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    smallRounding,
    range,
    closest,
    toFixed,
} from './number'

import {
    forEach,
    filter,
} from './loop'

import { map } from './loop/map'

import {
    EventObserver,
    addEventListener,
    removeEventListener,
    dispatchEvent,
    IndexedDB,
    RunWorker,
    Socket,
    StateObserver,
    getState, setState, deleteState, addStateListener, removeStateListener,
    Dom,
    $,
} from './class'


import {
    disMercator,
    disLonlat,
    degsToRads,
    getPolygonCenter,
    lonLatToMercator,
    mercatorToLonlat,
    scalePolygon,
} from './math'


import { ajax, fetch, interceptResponse, interceptRequest } from './request'

import {
    _besePath,
    _toPath,
} from './private'

import { DoublyLinkedList, FastMap } from './structure'


export default {
    DoublyLinkedList,
    _besePath,
    _toPath,
    scalePolygon,
    disMercator,
    disLonlat,
    degsToRads,
    getPolygonCenter,
    StateObserver,
    FastMap,
    Dom,
    $,
    getState,
    setState,
    deleteState,
    addStateListener,
    removeStateListener,
    EventObserver,
    addEventListener,
    removeEventListener,
    dispatchEvent,
    sortAscii,
    lighten,
    darken,
    awaitTo,
    generateSign,
    forEach,
    filter,
    map,
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    smallRounding,
    range,
    closest,
    toFixed,
    shuffle,
    reduce,
    depthTraversal,
    fastFilter,
    deduplicateArray,
    dateFormater,
    formatPassTime,
    formatRemainTime,
    dayDiff,
    monthDiff,
    compareDate,
    formatSeconds,
    getQuarter,
    getLastDate,
    getSecond,
    getFirstDate,
    Socket,
    downBlob,
    getFileBase64,
    blobToDataURL,
    drawAndShareImage,
    base64ToFile,
    isContain,
    isEqual,
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
    isConsole,
    isObjectHasKeysIsValue,
    isValue,
    isNaN,
    isObjectAbsentKeys,
    isPointInPolygon,
    cloneDeep,
    objToOrder,
    orderToObj,
    values,
    keys,
    get,
    has,
    set,
    pick,
    omit,
    parse,
    watch,
    compareObjects,
    arrayUnique,
    bubbleSort,
    last,
    arrToObject,
    toNumbers,
    countBy,
    indexOfMax,
    indexOfMin,
    contains,
    flattenArray,
    sortArray,
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
    getAttr,
    setAttr,
    getDomBound,
    classnames,
    requestFullscreen,
    observeContainerChange,
    insertHtmlBefore,
    validate,
    lonLatToMercator,
    mercatorToLonlat,
    IndexedDB,
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    SessionStorage,
    getPosition,
    disableContext,
    print,
    copyText,
    scrollToTop,
    userBrowser,
    getLocalStorageSize,
    getUrlParam,
    cookie,
    guid,
    throttle,
    debounce,
    fileDownload,
    watermark,
    dowDxfFile,
    addTextToImage,
    loadImages,
    log,
    fuzzyQuery,
    colorHex,
    viewportToPixels,
    noRefdelUrlParam,
    getWindowCorners,
    getWindowCenter,
    newWin,
    titleTex,
    mBroadcastChannel,
    removeUrlParam,
    onFullscreenchange,
    onVisibilityChange,
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
    version,
    RunWorker,
    ajax,
    fetch,
    interceptResponse,
    interceptRequest,
}

export {
    DoublyLinkedList,
    _besePath,
    _toPath,
    scalePolygon,
    disMercator,
    disLonlat,
    degsToRads,
    getPolygonCenter,
    StateObserver,
    getState,
    FastMap,
    Dom,
    $,
    setState,
    deleteState,
    addStateListener,
    removeStateListener,
    EventObserver,
    addEventListener,
    removeEventListener,
    dispatchEvent,
    sortAscii,
    lighten,
    darken,
    awaitTo,
    generateSign,
    forEach,
    filter,
    map,
    accAdd,
    accSub,
    accMul,
    accDiv,
    formatPrice,
    smallRounding,
    range,
    closest,
    toFixed,
    shuffle,
    reduce,
    depthTraversal,
    fastFilter,
    deduplicateArray,
    dateFormater,
    formatPassTime,
    formatRemainTime,
    dayDiff,
    monthDiff,
    compareDate,
    formatSeconds,
    getQuarter,
    getLastDate,
    getSecond,
    getFirstDate,
    Socket,
    downBlob,
    getFileBase64,
    blobToDataURL,
    drawAndShareImage,
    base64ToFile,
    isContain,
    isEqual,
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
    isConsole,
    isObjectHasKeysIsValue,
    isValue,
    isNaN,
    isObjectAbsentKeys,
    isPointInPolygon,
    cloneDeep,
    objToOrder,
    orderToObj,
    values,
    keys,
    get,
    has,
    set,
    pick,
    omit,
    parse,
    watch,
    compareObjects,
    arrayUnique,
    bubbleSort,
    last,
    arrToObject,
    toNumbers,
    countBy,
    indexOfMax,
    indexOfMin,
    contains,
    flattenArray,
    sortArray,
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
    getAttr,
    setAttr,
    getDomBound,
    classnames,
    requestFullscreen,
    observeContainerChange,
    insertHtmlBefore,
    validate,
    lonLatToMercator,
    mercatorToLonlat,
    IndexedDB,
    toFullScreen,
    exitFullscreen,
    LocalStorage,
    SessionStorage,
    getPosition,
    disableContext,
    print,
    copyText,
    scrollToTop,
    userBrowser,
    getLocalStorageSize,
    getUrlParam,
    cookie,
    guid,
    throttle,
    debounce,
    fileDownload,
    watermark,
    dowDxfFile,
    addTextToImage,
    loadImages,
    log,
    fuzzyQuery,
    colorHex,
    viewportToPixels,
    noRefdelUrlParam,
    getWindowCorners,
    getWindowCenter,
    newWin,
    titleTex,
    mBroadcastChannel,
    removeUrlParam,
    onFullscreenchange,
    onVisibilityChange,
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
    version,
    RunWorker,
    ajax,
    fetch,
    interceptResponse,
    interceptRequest,
}