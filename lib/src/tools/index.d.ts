declare const guid: () => string;
declare const getFileBase64: (file: File, cb: Function) => void;
declare const isAndroidMobileDevice: () => boolean;
declare const isAppleMobileDevice: () => boolean;
declare const throttle: (fn: Function, delay?: number) => () => void;
declare const debounce: (fn: Function, wait: number) => Function;
declare const fileDownload: (url: string) => boolean;
declare const fuzzyQuery: (list: Array<any>, key: string, keyWord: string) => Array<any>;
declare const getUrlParam: () => Object;
declare const cookie: {
    set: (key: string, value: string, expTime?: number) => void;
    delete: (key: string) => void;
    get: (key: string) => string;
};
declare const colorHex: (color: string) => string;
declare const hexToRgba: (str: string, alpa: number) => string;
declare const rgbaToHex: (color: any) => string;
declare const viewportToPixels: (value: string) => number;
declare const noRefdelUrlParam: (ref: string) => string;
declare const getAge: (id: string) => string;
declare const getSex: (id: string) => "男" | "女";
declare const digitUppercase: (n: number) => string;
declare const injectScript: (src: string) => void;
declare const sinogToLetter: (str: string) => string;
declare const getFitSize: (px: number, draft?: number) => number;
export { guid, getFileBase64, isAndroidMobileDevice, isAppleMobileDevice, throttle, debounce, fileDownload, fuzzyQuery, getUrlParam, cookie, colorHex, viewportToPixels, noRefdelUrlParam, getAge, getSex, digitUppercase, hexToRgba, rgbaToHex, injectScript, sinogToLetter, getFitSize };
