export declare const stopPropagation: (e: any) => void;
declare function numberRoll(ele: any, targetNumber: number, duration: number): void;
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
    hasClass: (ele: HTMLElement, name: string) => RegExpMatchArray;
    addClass: (ele: HTMLElement, name: string) => void;
    removeClass: (ele: HTMLElement, name: string) => void;
    replaceClass: (ele: HTMLElement, newName: string, oldName: string) => void;
    numberRoll: typeof numberRoll;
    scrollToTheBottom: (ele: HTMLElement, callback: Function, delay?: number) => void;
};
export default dom;
