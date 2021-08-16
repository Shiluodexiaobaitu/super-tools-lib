export declare const socket: ({ url }: {
    url: string;
}) => any;
export declare const downBlob: (data: any, fileName: string) => void;
export declare const isBase64: (base64: any) => boolean;
export declare const isArray: (arr: any) => boolean;
export declare const isString: (str: any) => boolean;
export declare const isFunction: (fn: any) => boolean;
export declare const isObject: (obj: any) => boolean;
export declare const isNumber: (num: any) => boolean;
export declare const isWeiXin: () => boolean;
export declare const repeat: (obj: any) => void;
export declare const arrayUnique: (arr: any[]) => any[];
export declare const arrayNonRepeatfy: (arr: any[]) => any[];
export declare const aLineUnique: (arr: any[]) => any[];
export declare const getOffset: (ele: any) => any;
export declare const shaking: ({ ele, attr, cb, rate, time }: {
    ele: any;
    attr: string;
    cb: Function;
    time?: number;
    rate?: number;
}) => void;
export declare const getDistance: (endLat: number, endLon: number, startLat: number, startLon: number) => number;
export declare const lonLatToMercator: (lonLat: {
    lon: number;
    lat: number;
}) => any;
export declare const mercatorToLonlat: (mercator: {
    x: number;
    y: number;
}) => any;
export declare const performanceAnalysis: () => void;
export declare const toFullScreen: () => void;
export declare const exitFullscreen: () => void;
export declare const LocalStorage: {
    get(user: string, name: string): string;
    set(user: string, name: string, value: string): void;
    remove(user: string, name: string): void;
    clear(): void;
};
export declare const getPosition: (timeout?: number, maximumAge?: number) => Promise<unknown>;
export declare const winCopy: (flag: any) => void;
export declare const print: (id: string, src: string) => void;
export declare const setVibration: () => void;
export declare const guid: () => string;
export declare const getFileBase64: (file: File, cb: Function) => void;
export declare const isAndroidMobileDevice: () => boolean;
export declare const isAppleMobileDevice: () => boolean;
export declare const throttle: (func: Function, delay: number) => Function;
export declare const debounce: (fn: Function, wait: number) => Function;
export declare const fileDownload: (url: string) => boolean;
export declare const fuzzyQuery: (list: any[], key: string, keyWord: String) => any[];
export declare const getUrlParam: () => Object;
export declare const getCookie: (name: string) => string;
export declare const colorHex: (color: string) => string;
export declare const viewportToPixels: (value: string) => number;
export declare const noRefdelUrlParam: (ref: string) => string;
export declare const initialToCapitali: (gname: string) => string;
export declare const trim: (str: string) => string;
export declare const validate: (key: string, value: string) => boolean;
export declare const version: string;

declare const superToolsLib: {
    socket: ({ url }: {
        url: string;
    }) => any;
    downBlob: (data: any, fileName: string) => void;
    isBase64: (base64: any) => boolean;
    isArray: (arr: any) => boolean;
    isString: (str: any) => boolean;
    isFunction: (fn: any) => boolean;
    isObject: (obj: any) => boolean;
    isNumber: (num: any) => boolean;
    isWeiXin: () => boolean;
    repeat: (obj: any) => void;
    arrayUnique: (arr: any[]) => any[];
    arrayNonRepeatfy: (arr: any[]) => any[];
    aLineUnique: (arr: any[]) => any[];
    getOffset: (ele: any) => any;
    shaking: ({ ele, attr, cb, rate, time }: {
        ele: any;
        attr: string;
        cb: Function;
        time?: number;
        rate?: number;
    }) => void;
    getDistance: (endLat: number, endLon: number, startLat: number, startLon: number) => number;
    lonLatToMercator: (lonLat: {
        lon: number;
        lat: number;
    }) => any;
    mercatorToLonlat: (mercator: {
        x: number;
        y: number;
    }) => any;
    performanceAnalysis: () => void;
    toFullScreen: () => void;
    exitFullscreen: () => void;
    LocalStorage: {
        get(user: string, name: string): string;
        set(user: string, name: string, value: string): void;
        remove(user: string, name: string): void;
        clear(): void;
    };
    getPosition: (timeout?: number, maximumAge?: number) => Promise<unknown>;
    winCopy: (flag: any) => void;
    print: (id: string, src: string) => void;
    setVibration: () => void;
    guid: () => string;
    getFileBase64: (file: File, cb: Function) => void;
    isAndroidMobileDevice: () => boolean;
    isAppleMobileDevice: () => boolean;
    throttle: (func: Function, delay: number) => Function;
    debounce: (fn: Function, wait: number) => Function;
    fileDownload: (url: string) => boolean;
    fuzzyQuery: (list: any[], key: string, keyWord: String) => any[];
    getUrlParam: () => Object;
    getCookie: (name: string) => string;
    colorHex: (color: string) => string;
    viewportToPixels: (value: string) => number;
    noRefdelUrlParam: (ref: string) => string;
    initialToCapitali: (gname: string) => string;
    trim: (str: string) => string;
    validate: (key: string, value: string) => boolean;
    version: string;
};
export default superToolsLib;
