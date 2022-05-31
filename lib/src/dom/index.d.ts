declare const getOffset: (ele: any) => any;
declare const shaking: ({ ele, attr, cb, rate, time }: {
    ele: any;
    attr: string;
    cb: Function;
    time?: number;
    rate?: number;
}) => void;
declare const stopPropagation: (e: any) => void;
declare const hasClass: (ele: HTMLElement, name: string) => RegExpMatchArray;
declare const addClass: (ele: HTMLElement, name: string) => void;
declare const removeClass: (ele: HTMLElement, name: string) => void;
declare const replaceClass: (ele: HTMLElement, newName: string, oldName: string) => void;
declare function numberRoll(ele: any, targetNumber: number, duration: number): void;
declare const scrollToTheBottom: (ele: HTMLElement, callback: Function, delay?: number) => void;
export { getOffset, shaking, stopPropagation, hasClass, addClass, removeClass, replaceClass, numberRoll, scrollToTheBottom };
