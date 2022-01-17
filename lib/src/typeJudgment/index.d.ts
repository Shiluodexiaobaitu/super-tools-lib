declare const typeJudgment: {
    isBase64: (base64: any) => boolean;
    isArray: (arr: any) => boolean;
    isString: (str: any) => boolean;
    isFunction: (fn: any) => boolean;
    isObject: (obj: any) => boolean;
    isNumber: (num: any) => boolean;
    isWeiXin: () => boolean;
    isNull: (o: any) => boolean;
    isUndefined: (o: any) => boolean;
    isDate: (o: any) => boolean;
    isRegExp: (o: any) => boolean;
    isError: (o: any) => boolean;
    isSymbol: (o: any) => boolean;
    isPromise: (o: any) => boolean;
    returnType: (o: any) => any;
    isSupportWebP: () => boolean;
};
export default typeJudgment;
