export declare const stopPropagation: (e: any) => void;
declare const dom: {
    getOffset: (ele: any) => any;
    shaking: ({ ele, attr, cb, rate, time }: {
        ele: any;
        attr: string;
        cb: Function;
        time?: number;
        rate?: number;
    }) => void;
    stopPropagation: (e: any) => void;
};
export default dom;
