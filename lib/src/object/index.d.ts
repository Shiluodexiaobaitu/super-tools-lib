import { cloneDeep } from './_cloneDeep';
export declare type pos = string | number | boolean;
declare const stringfyQueryString: (obj: Record<string, pos>) => string;
declare const deserialization: (str: string) => {};
declare const values: (obj: Record<string, unknown>) => unknown[];
declare const keys: (obj: Record<string, unknown>) => unknown[];
export { cloneDeep, stringfyQueryString, deserialization, values, keys };
