declare global {
    interface Window {
        ActiveXObject: any;
    }
}
declare const browser: {
    toFullScreen: () => void;
    exitFullscreen: () => void;
    LocalStorage: {
        get(user: string, name: string): string;
        set(user: string, name: string, value: string): void;
        remove(user: string, name: string): void;
        clear(): void;
    };
    getPosition: (timeout?: number, maximumAge?: number) => Promise<unknown>;
    winCopy: (flag: any) => void;
    print: (id: string, src: string) => void;
    setVibration: () => void;
    copy: (str: string) => void;
    scrollToTop: () => void;
};
export default browser;