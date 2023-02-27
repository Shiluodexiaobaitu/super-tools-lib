
// export declare class Socket {
//   private ws;
//   private url;
//   private sendTimer;
//   private heartTimer;
//   private reconnectCount;
//   private heartTime;
//   constructor(props: {
//       url: string;
//       reconnectCount?: number;
//       heartTime?: number;
//   });
//   createWebSocket(message: any, cb: (data: any) => void): void;
//   heartbeat(message: any, cb: any): void;
// }

// declare type State = Record<string, unknown>;
// export declare class StateObserver {
//   private _state;
//   private _listener;
//   constructor(state: State);
//   on(type: any, cb: any): Error;
//   off(type: any, cb: any): void;
//   setState(state: State): Error;
//   getState(key?: string): unknown;
//   _on(type: any, cb: any): void;
//   _off(type: any, cb: any): void;
//   _spread(type: any, ...rest: any[]): void;
// }

// declare class EventObserver {
//   private _listener;
//   constructor();
//   on(type: string, cb: (...rest: any[]) => void): void;
//   off(type: string, cb: (...rest: any[]) => void): void;
//   spread(type: string, ...rest: any[]): Error;
//   _on(type: string, cb: (...rest: any[]) => void): void;
//   _off(type: string, cb: (...rest: any) => void): void;
//   _spread(type: string, ...rest: any[]): void;
// }

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


// export declare const SessionStorage: {
//   get(user: string, name: string): string;
//   set(user: string, name: string, value: any): void;
//   remove(user: string, name: string): void;
//   clear(): void;
//   forEach(cb: (value: any, key: string) => void): void;
// };
// export declare const isOdd: (v: number) => boolean;
// export declare const isEven: (v: number) => boolean;
// export declare const base64ToFile: (urlData: string, fileName: string) => File;
// export declare const blobToDataURL: (blob: Blob, callback: (result: string | ArrayBuffer) => void) => void;
// export declare const drawAndShareImage: (bgImgOps: {
//   url: string;
//   width: number;
//   height: number;
// }, upImgOps: {
//   url: string;
//   width: number;
//   height: number;
//   x: number;
//   y: number;
// }, ops?: {
//   download: boolean;
//   imgName: string;
//   success: (base64: any) => any;
// }) => void;
// export declare const map: <T_22>(data: Record<string, T_22> | T_22[], iteratee: (item: T_22, key: string | number) => any) => Record<string, T_22> | T_22[];
// export declare const isSet: (v: unknown) => boolean;
// export declare const isMap: (v: unknown) => boolean;
// export declare const isContain: <T_3 extends {
//   x: number;
//   y: number;
// }>(point: T_3, points: T_3[]) => boolean;
// export declare const getPolygonCenter: <T extends {
//   x: number;
//   y: number;
// }>(points: T[]) => {
//   x: number;
//   y: number;
// };
// export declare const scalePolygon: <T_1 extends {
//   x: number;
//   y: number;
// }>(points: T_1[], extra: number) => T_1[];
// export declare const isBasicType: (val: unknown) => boolean;
// export declare const isEqual: (value: any, other: any) => boolean;
// export declare const contains: <T_3>(arr: T_3[], criteria: (a: T_3) => boolean) => boolean;
// export declare const replaceText: (str: string, range: [number, number] | [number], mask: string) => string;
// export declare const removeSpaces: (str: string) => string;
// export declare const toPascalCase: (str: string) => string;
// export declare const letterToEmoji: (c: string) => string;
// export declare const isDarkMode: () => boolean;
// export declare const decode: (token: string) => string;
// export declare const toFullHexColor: (color: string) => string;
// export declare const degsToRads: (deg: number) => number;
// export declare const distance: (p1: {
//   x: number;
//   y: number;
// }, p2: {
//   x: number;
//   y: number;
// }) => number;
// export declare const getFirstDate: (d?: Date) => Date;
// export declare const getCurrentSecond: () => number;
// export declare const getLastDate: (d?: Date) => Date;
// export declare const getQuarter: (d?: Date) => number;
// export declare const compareDate: (a: Date, b: Date) => boolean;
// export declare const formatSeconds: (s: number) => string;
// export declare const monthDiff: (startDate: Date, endDate: Date) => number;
// export declare const insertHtmlBefore: (html: string, ele: Element) => void;
// export declare const insertHtmlAfter: (html: string, ele: Element) => void;
// export declare const insertBefore: (newEle: Element, anotherEle: Element) => Element;
// export declare const insertAfter: (newEle: Element, anotherEle: Element) => Element;
// export declare const getSelectedText: () => string;
// export declare const isDescendant: (child: Node, parent: Node) => boolean;
// export declare const removeEventListener: (type: string, cb: (...rest: any[]) => void) => void;
// export declare const alphabeticSort: <T_10>(_data: T_10[], keyword: string, ascen?: boolean) => T_10[];
// export declare const arrToObject: <T_1 extends Record<string, any>, K extends keyof T_1>(arr: T_1[], key: K) => Record<string, T_1>;
// export declare const toNumbers: (arr: string[]) => number[];
// export declare const countBy: <T_2 extends Record<string, string>, K_1 extends keyof T_2>(arr: T_2[], prop: K_1) => Record<string, number>;
// export declare const indexOfMax: (arr: number[]) => number;
// export declare const indexOfMin: (arr: number[]) => number;
// export declare const range: (min: number, max: number) => number[];
// export declare const closest: (arr: number[], n: number) => number;
// export declare const isEmptyObject: (obj: Record<string, unknown>) => boolean;
// export declare const isEmptyArray: <T>(arr: T[]) => boolean;
// export declare const isObjectKeyEqual: (a: Record<string, unknown>, b: Record<string, unknown>) => boolean;
// export declare const isObjectExistsKey: (obj: Record<string, unknown>, key: string) => boolean;
// export declare const isObjectIncludeSpecifiedKey: (a: Record<string, unknown>, b: Record<string, unknown>) => boolean;
// export declare const addEventListener: (type: string, cb: (...rest: any[]) => void) => void;
// export declare const dispatchEvent: (type: string, ...rest: any[]) => void;
// export declare const sortAscii: (data: string[]) => string[];
// export declare const generateSign: (obj: Record<string, unknown>) => string;
// export declare const last: <T_9>(array: T_9[]) => T_9;
// export declare const getTransformMatrix: (transform: string) => {
//   x: number;
//   y: number;
// };
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
// export declare const values: <T_15>(obj: Record<string, T_15>) => T_15[];
// export declare const keys: <T_16>(obj: Record<string, T_16>) => T_16[];
// export declare const forEach: <T_18>(data: Record<string, T_18> | T_18[], iteratee: (item: T_18, key?: string | number) => boolean | void) => void;
// export declare const filter: <T_19>(data: Record<string, T_19> | T_19[], iteratee: (item: T_19, key?: string | number) => boolean) => T_19[];
// export declare const formatPrice: (price: any, sign?: string) => string;
// export declare const getFitSize: (px: number, draft?: number) => number;
// export declare const accAdd: (num1: any, num2: number) => number;
// export declare const accSub: (num1: number, num2: number) => number;
// export declare const accMul: (num1: number, num2: number) => number;
// export declare const accDiv: (num1: number, num2: number) => number;
// export declare const formatPassTime: (startTime: number) => string;
// export declare const formatRemainTime: (endTime: string) => string;
// export declare const isNull: (o: unknown) => boolean;
// export declare const isUndefined: (o: unknown) => boolean;
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
// export declare const hasClass: (ele: HTMLElement, name: string) => boolean;
// export declare const addClass: (ele: HTMLElement, name: string) => void;
// export declare const removeClass: (ele: HTMLElement, name: string) => void;
// export declare const replaceClass: (ele: HTMLElement, newName: string, oldName: string) => void;
// export declare const injectScript: (src: string) => void;
// export declare const sinogToLetter: (str: string) => string;
// export declare const shuffle: <T_17>(arr: T_17[]) => T_17[];
// export declare const smallRounding: (num: number, place: number) => number;
// export declare const dateFormater: (formater: string, time?: number) => string;
// export declare const stopPropagation: (e: Event) => void;
// export declare const scrollToTop: () => void;
// export declare const getAge: (id: string) => string;
// export declare const getSex: (id: string) => '男' | '女';
// export declare const digitUppercase: (n: number) => string;
// export declare const hexToRgba: (str: string, alpa: number) => string;
// export declare const rgbaToHex: (color: any) => string;
// export declare const version: string;

// export declare const orient: (fn: (type: string) => void) => void;
// export declare const vConsole: () => void;
// export declare const downBlob: (data: BlobPart, fileName: string) => void;
// export declare const isBase64: (base64: any) => boolean;
// export declare const isArray: (arr: any) => boolean;
// export declare const isString: (str: any) => boolean;
// export declare const isFunction: (fn: any) => boolean;
// export declare const isObject: (obj: any) => boolean;
// export declare const isNumber: (num: unknown) => num is number;
// export declare const isWeiXin: () => boolean;
// export declare const repeat: (str: string, n: number) => string;
// export declare const cloneDeep: <T_14>(data: T_14) => T_14;
// export declare const arrayUnique: <T_6>(arr: T_6[]) => T_6[];
// export declare const arrayNonRepeatfy: <T_7>(arr: T_7[]) => T_7[];
// export declare const aLineUnique: <T_8>(arr: T_8[]) => T_8[];
// export declare const getOffset: (ele: HTMLElement) => {
//   left: number;
//   top: number;
// };
// export declare const shaking: ({ ele, attr, cb, rate, time }: {
//   ele: HTMLElement;
//   attr: string;
//   cb: () => void;
//   time?: number;
//   rate?: number;
// }) => void;
// export declare const calcDistance: (lat1: number, lng1: number, lat2: number, lng2: number) => number;
// export declare const lonLatToMercator: (lonLat: {
//   lon: number;
//   lat: number;
// }) => {
//   x: number;
//   y: number;
// };
// export declare const mercatorToLonlat: (mercator: {
//   x: number;
//   y: number;
// }) => {
//   lon: number;
//   lat: number;
// };
// export declare const performanceAnalysis: () => void;
// export declare const getPerformanceTiming: () => any;
// export declare const toFullScreen: () => void;
// export declare const exitFullscreen: () => void;
// export declare const LocalStorage: {
//   get(user: string, name: string): string;
//   set(user: string, name: string, value: any): void;
//   remove(user: string, name: string): void;
//   clear(): void;
//   forEach(cb: (value: any, key: string) => void): void;
// };
// export declare const getPosition: (timeout?: number, maximumAge?: number) => Promise<unknown>;
// export declare const winCopy: (flag: boolean) => void;
// export declare const print: (printEleId: string, rootEleId: string, style: string) => boolean;
// export declare const setVibration: () => void;
// export declare const copy: (str: string) => void;
// export declare const guid: () => string;
// export declare const getFileBase64: (file: File, cb: (base64: string | ArrayBuffer) => void) => void;
// export declare const isAndroidMobileDevice: () => boolean;
// export declare const isAppleMobileDevice: () => boolean;
// export declare const throttle: (fn: <T_1>(...rest: T_1[]) => void, delay?: number) => <T_2>(...rest: T_2[]) => void;
// export declare const debounce: (fn: <T_3>(...rest: T_3[]) => void, delay: number) => <T_4>(...rest: T_4[]) => void;
// export declare const fileDownload: (url: string) => boolean;
// export declare const fuzzyQuery: <T_5>(list: T_5[], key: string, keyWord: string) => T_5[];
// export declare const getUrlParam: () => any;
// export declare const getCookie: (name: string) => string;
// export declare const colorHex: (color: string) => string;
// export declare const viewportToPixels: (value: string) => number;
// export declare const noRefdelUrlParam: (ref: string) => string;
// export declare const initialToCapitali: (gname: string) => string;
// export declare const trim: (str: string) => string;
// export declare const validate: (key: "number" | "mobile" | "phone" | "chinese_and_english" | "chinese10" | "website" | "nickname" | "verify_code" | "verify_pwd" | "email" | "character" | "intNumber" | "positiveInt5" | "positiveInt3_decimal2" | "negativeInteger" | "isNotNegativeFloatNum" | "cP" | "cPattern" | "numeric_letters" | "chinese_numeric_letters" | "strong_password" | "cname" | "ename" | "ip" | "ipv4" | "color16Reg" | "mac", value: string) => boolean;
// export declare const exportExcel: (column: any[], dataSource: any[], fileName?: string) => void;