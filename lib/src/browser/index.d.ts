import { IndexedDB } from './IndexedDB';
declare global {
    interface Window {
        ActiveXObject: any;
    }
}
declare const toFullScreen: () => void;
declare const exitFullscreen: () => void;
declare const LocalStorage: {
    get(user: string, name: string): string;
    set(user: string, name: string, value: any): void;
    remove(user: string, name: string): void;
    clear(): void;
};
declare const getPosition: (timeout?: number, maximumAge?: number) => Promise<unknown>;
declare const winCopy: (flag: any) => void;
declare const print: (printEleId: string, rootEleId: string, style: string) => boolean;
declare const setVibration: () => void;
declare const copy: (str: string) => void;
declare const scrollToTop: () => void;
declare const userBrowser: () => string;
declare const getLocalStorageSize: () => string;
export { toFullScreen, exitFullscreen, LocalStorage, getPosition, winCopy, print, setVibration, copy, scrollToTop, userBrowser, IndexedDB, getLocalStorageSize };
