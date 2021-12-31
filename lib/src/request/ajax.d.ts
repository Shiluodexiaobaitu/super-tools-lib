declare class Ajax {
    private options;
    constructor(options: any);
    send(callback: Function, error: Function): void;
    set url(url: any);
    get url(): any;
}
export default Ajax;
