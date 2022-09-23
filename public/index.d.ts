
// declare global {
//   interface Window {
//       webkitIndexedDB: any;
//       mozIndexedDB: any;
//   }
// }
// export declare type IndexedDBProps = {
//   dbName: string;
//   storeName: string;
//   version: number;
// };
// export declare class IndexedDB {
//   private storeName;
//   db: any;
//   store: any;
//   constructor(props: IndexedDBProps);
//   get(key: string, callback: (data: any) => void): void;
//   set(key: any, value: any): void;
//   update(key: any, newValue: any): void;
//   remove(key: any): void;
//   close(): void;
// }

// export declare class Ajax {
//   private options;
//   constructor(options: any);
//   send(callback: (res: any) => void, error: (err: any) => void): void;
//   set url(url: any);
//   get url(): any;
// }


// export declare const dayDiff: (date1: Date, date2: Date) => number;
// export declare const isMobile: () => boolean;
// export declare const textVisibilityChange: (dom: HTMLElement) => boolean;
// export declare const scrollToTheBottom: (ele: HTMLElement, callback: () => void, delay?: number) => void;
// export declare const toLine: (val: string, isLowercase?: boolean) => string;
// export declare const isImg: (path: string) => boolean;
// export declare const isUrl: (path: string) => boolean;
// export declare const fahrenheitToCelsius: (fahrenheit: number) => number;
// export declare const celsiusToFahrenheit: (celsius: number) => number;
// export declare const checkPassWord: (str: string) => number;
// export declare const transFormat: (str: any, oldChar: any, newChar: any) => any;
// export declare const strInversion: (str: any) => any[];
// export declare const cookie: {
//   set: (key: string, value: string, expTime?: number) => void;
//   delete: (key: string) => void;
//   get: (key: string) => string;
// };
// export declare const getLocalStorageSize: () => string;
// export declare const getTextWidth: (text: string, font: any) => number;
// export declare const values: (obj: any) => any[];
// export declare const keys: (obj: any) => any[];
// export declare const forEach: (data: Record<string, unknown> | unknown[], fn: () => void) => any;
// export declare const filter: (data: any[] | Record<string, any>, fn: () => void) => any[];
// export declare const formatPrice: (price: any, sign?: string) => string;
// export declare const getFitSize: (px: number, draft?: number) => number;
// export declare const accAdd: (num1: any, num2: number) => number;
// export declare const accSub: (num1: number, num2: number) => number;
// export declare const accMul: (num1: number, num2: number) => number;
// export declare const accDiv: (num1: number, num2: number) => number;
// export declare const formatPassTime: (startTime: any) => string;
// export declare const formatRemainTime: (endTime: any) => string;
// export declare const isNull: (o: any) => boolean;
// export declare const isUndefined: (o: any) => boolean;
// export declare const isDate: (o: any) => boolean;
// export declare const isRegExp: (o: any) => boolean;
// export declare const isError: (o: any) => boolean;
// export declare const isSymbol: (o: any) => boolean;
// export declare const isPromise: (o: any) => boolean;
// export declare const returnType: (o: any) => any;
// export declare const isSupportWebP: () => boolean;
// export declare const stringfyQueryString: (obj: Record<string, string | number | boolean>) => string;
// export declare const bubbleSort: (arr: any) => any;
// export declare const numberRoll: (ele: any, targetNumber: number, duration: number) => void;
// export declare const userBrowser: () => string;
// export declare const hasClass: (ele: HTMLElement, name: string) => RegExpMatchArray;
// export declare const addClass: (ele: HTMLElement, name: string) => void;
// export declare const removeClass: (ele: HTMLElement, name: string) => void;
// export declare const replaceClass: (ele: HTMLElement, newName: string, oldName: string) => void;
// export declare const injectScript: (src: string) => void;
// export declare const sinogToLetter: (str: string) => string;
// export declare const shuffle: (arr: any[]) => any[];
// export declare const smallRounding: (num: number, place: number) => number;
// export declare const dateFormater: (formater: string, time?: number) => string;
// export declare const stopPropagation: (e: any) => void;
// export declare const scrollToTop: () => void;
// export declare const getAge: (id: string) => string;
// export declare const getSex: (id: string) => '男' | '女';
// export declare const digitUppercase: (n: number) => string;
// export declare const hexToRgba: (str: string, alpa: number) => string;
// export declare const rgbaToHex: (color: any) => string;
// export declare const version: string;

// export declare const orient: () => void;
// export declare const vConsole: () => void;
// export declare const socket: ({ url }: {
//   url: string;
// }) => any;
// export declare const downBlob: (data: any, fileName: string) => void;
// export declare const isBase64: (base64: any) => boolean;
// export declare const isArray: (arr: any) => boolean;
// export declare const isString: (str: any) => boolean;
// export declare const isFunction: (fn: any) => boolean;
// export declare const isObject: (obj: any) => boolean;
// export declare const isNumber: (num: any) => boolean;
// export declare const isWeiXin: () => boolean;
// export declare const repeat: (str: string, n: number) => string;
// export declare const cloneDeep: (obj: any) => any;
// export declare const arrayUnique: (arr: any[]) => any[];
// export declare const arrayNonRepeatfy: (arr: any[]) => any[];
// export declare const aLineUnique: (arr: any[]) => any[];
// export declare const getOffset: (ele: any) => any;
// export declare const shaking: ({ ele, attr, cb, rate, time }: {
//   ele: any;
//   attr: string;
//   cb: () => void;
//   time?: number;
//   rate?: number;
// }) => void;
// export declare const getDistance: (startLon: number, startLat: number, endLon: number, endLat: number) => number;
// export declare const calcDistance: (lat1: any, lng1: any, lat2: any, lng2: any) => number;
// export declare const lonLatToMercator: (lonLat: {
//   lon: number;
//   lat: number;
// }) => any;
// export declare const mercatorToLonlat: (mercator: {
//   x: number;
//   y: number;
// }) => any;
// export declare const performanceAnalysis: () => void;
// export declare const getPerformanceTiming: () => any;
// export declare const toFullScreen: () => void;
// export declare const exitFullscreen: () => void;
// export declare const LocalStorage: {
//   get(user: string, name: string): string;
//   set(user: string, name: string, value: any): void;
//   remove(user: string, name: string): void;
//   clear(): void;
// };
// export declare const getPosition: (timeout?: number, maximumAge?: number) => Promise<unknown>;
// export declare const winCopy: (flag: any) => void;
// export declare const print: (printEleId: string, rootEleId: string, style: string) => boolean;
// export declare const setVibration: () => void;
// export declare const copy: (str: string) => void;
// export declare const guid: () => string;
// export declare const getFileBase64: (file: File, cb: (base64: any) => void) => void;
// export declare const isAndroidMobileDevice: () => boolean;
// export declare const isAppleMobileDevice: () => boolean;
// export declare const throttle: (fn: () => void, delay?: number) => () => void;
// export declare const debounce: (fn: () => void, wait: number) => () => void;
// export declare const fileDownload: (url: string) => boolean;
// export declare const fuzzyQuery: (list: any[], key: string, keyWord: string) => any[];
// export declare const getUrlParam: () => any;
// export declare const getCookie: (name: string) => string;
// export declare const colorHex: (color: string) => string;
// export declare const viewportToPixels: (value: string) => number;
// export declare const noRefdelUrlParam: (ref: string) => string;
// export declare const initialToCapitali: (gname: string) => string;
// export declare const trim: (str: string) => string;
// export declare const validate: (key: string, value: string) => boolean;
// export declare const exportExcel: (column: any[], dataSource: any[], fileName?: string) => void;


