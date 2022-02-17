export declare const hexToRgba: (str: string, alpa: number) => string;
export declare const rgbaToHex: (color: any) => string;
export declare const injectScript: (src: string) => void;
export declare const sinogToLetter: (str: string) => string;
export declare function getFitSize(px: number, draft?: number): number;
declare const tools: {
    guid: () => string;
    getFileBase64: (file: File, cb: Function) => void;
    isAndroidMobileDevice: () => boolean;
    isAppleMobileDevice: () => boolean;
    throttle: (fn: Function, delay: number) => Function;
    debounce: (fn: Function, wait: number) => Function;
    fileDownload: (url: string) => boolean;
    fuzzyQuery: (list: Array<any>, key: string, keyWord: string) => Array<any>;
    getUrlParam: () => Object;
    getCookie: (name: string) => string;
    colorHex: (color: string) => string;
    viewportToPixels: (value: string) => number;
    noRefdelUrlParam: (ref: string) => string;
    getAge: (id: string) => string;
    getSex: (id: string) => "男" | "女";
    digitUppercase: (n: number) => string;
    hexToRgba: (str: string, alpa: number) => string;
    rgbaToHex: (color: any) => string;
    injectScript: (src: string) => void;
    sinogToLetter: (str: string) => string;
    getFitSize: typeof getFitSize;
};
export default tools;
