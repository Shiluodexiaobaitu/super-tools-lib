// import { File } from 'better-xlsx';
// import { saveAs } from 'file-saver';

/**
 * 二进制文件流，前端通过blob对象实现下载
*/
const downBlob = (data: any, fileName: string): void => {
    const url = window.URL.createObjectURL(new Blob([data]));
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

export {
    downBlob,
}