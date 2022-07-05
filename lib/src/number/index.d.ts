import { accAdd, accSub, accMul, accDiv } from './floatPares';
declare const formatPrice: (price: any, sign?: string) => string;
declare const smallRounding: (num: number, place: number) => number;
export { accAdd, accSub, accMul, accDiv, formatPrice, smallRounding };
