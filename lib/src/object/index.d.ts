declare const object: {
    cloneDeep: (data: any) => any;
    stringfyQueryString: (obj: Object) => string;
    values: (obj: any) => Array<any>;
    keys: (obj: any) => Array<any>;
};
export default object;
