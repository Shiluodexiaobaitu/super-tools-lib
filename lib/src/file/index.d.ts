declare const file: {
    downBlob: (data: any, fileName: string) => void;
    exportExcel: (column: Array<any>, dataSource: Array<any>, fileName?: string) => void;
};
export default file;
