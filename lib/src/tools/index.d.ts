declare const tools: {
    guid: () => string;
    getFileBase64: (file: File, cb: Function) => void;
    isAndroidMobileDevice: () => boolean;
    isAppleMobileDevice: () => boolean;
    throttle: (func: Function, delay: number) => Function;
    debounce: (fn: Function, wait: number) => Function;
    fileDownload: (url: string) => boolean;
    fuzzyQuery: (list: Array<any>, key: string, keyWord: String) => Array<any>;
    getUrlParam: () => Object;
    getCookie: (name: string) => string;
    colorHex: (color: string) => string;
    viewportToPixels: (value: string) => number;
    noRefdelUrlParam: (ref: string) => string;
    getAge: (id: string) => string;
    getSex: (id: string) => "男" | "女";
    digitUppercase: (n: number) => string;
};
export default tools;
