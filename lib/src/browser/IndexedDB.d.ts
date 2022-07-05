declare global {
    interface Window {
        webkitIndexedDB: any;
        mozIndexedDB: any;
    }
}
export declare type IndexedDBProps = {
    dbName: string;
    storeName: string;
    version: number;
};
export declare class IndexedDB {
    private storeName;
    db: any;
    store: any;
    constructor(props: IndexedDBProps);
    get(key: string, callback: (data: any) => void): void;
    set(key: any, value: any): void;
    update(key: any, newValue: any): void;
    remove(key: any): void;
    close(): void;
}
