declare global {
    interface Window {
        ActiveXObject: any;
    }
}
declare const browser: {
    toFullScreen: () => void;
    exitFullscreen: () => void;
    LocalStorage: {
        get(name: string): any;
        set(name: string, value: string): void;
        remove(name: string): void;
        clear(): void;
    };
    getPosition: (timeout?: number, maximumAge?: number) => Promise<unknown>;
    winCopy: (flag: any) => void;
};
export default browser;
