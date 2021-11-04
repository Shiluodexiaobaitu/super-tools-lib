declare const object: {
    repeat: (obj: any) => void;
    deepClone: (obj: any, hash?: WeakMap<object, any>) => any;
};
export default object;
