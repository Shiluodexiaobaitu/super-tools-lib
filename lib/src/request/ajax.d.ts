declare class Ajax {
    private options;
    constructor(options: any);
    send(callback: (res: any) => void, error: (err: any) => void): void;
    set url(url: any);
    get url(): any;
}
export default Ajax;
