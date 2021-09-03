export default class Mito {
    render<T extends true>(tpl: string, data: any, toString: T): string;
    render<T extends false>(tpl: string, data: any, toString?: T): Element;
}
