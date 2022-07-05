interface IProps {
    url: string;
    reconnectCount?: number;
    heartTime?: number;
}
declare class Socket {
    private ws;
    private url;
    private sendTimer;
    private heartTimer;
    private reconnectCount;
    private heartTime;
    constructor(props: IProps);
    createWebSocket(message: any, cb: (data: any) => void): void;
    heartbeat(message: any, cb: any): void;
}
export default Socket;
