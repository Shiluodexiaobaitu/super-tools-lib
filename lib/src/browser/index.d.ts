import { IndexedDB } from './IndexedDB';
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
        set(user: string, name: string, value: any): void;
        remove(user: string, name: string): void;
        clear(): void;
    };
    getPosition: (timeout?: number, maximumAge?: number) => Promise<unknown>;
    winCopy: (flag: any) => void;
    print: (printEleId: string, rootEleId: string, style: string) => boolean;
    setVibration: () => void;
    copy: (str: string) => void;
    scrollToTop: () => void;
    userBrowser: () => string;
    IndexedDB: typeof IndexedDB;
    getLocalStorageSize: () => string;
};
export default browser;
