import { File } from 'better-xlsx';
import { saveAs } from 'file-saver';
// import _ from 'lodash';

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

/**
 * table表格格式 导出Excel
*/
const exportExcel = (column: Array<any>, dataSource: Array<any>, fileName = 'example') => {

    const file = new File();

    const sheet = file.addSheet('sheet-test');

    const depth = getDepth(column);

    const columnNum = getColumns(column);

    const rowArr = [];
    for (let k = 0; k < depth; k++) {
        rowArr.push(sheet.addRow());
    }

    rowArr.forEach(ele => {
        for (let j = 0; j < columnNum; j++) {
            const cell = ele.addCell();
            cell.value = j;
        }
    });

    init(column, 0, 0);

    const columnLineArr = [];
    columnLine(column);

    const dataSourceArr = [];
    dataSource.forEach(ele => {
        const dataTemp = [];
        columnLineArr.forEach(item => {
            dataTemp.push({
                [item.dataIndex]: ele[item.dataIndex],
                value: ele[item.dataIndex],
            });
        });
        dataSourceArr.push(dataTemp);
    });

    dataSourceArr.forEach((item, index: number) => {

        const row = sheet.addRow();
        row.setHeightCM(0.8);

        item.forEach(ele => {
            const cell = row.addCell();
            //num99序列号
            if (ele.hasOwnProperty('num99')) {
                cell.value = index + 1;
            } else {
                cell.value = ele.value;
            }
            cell.style.align.v = 'center';
            cell.style.align.h = 'center';
        });
    });
    //设置每列的宽度
    for (let i = 0; i < 4; i++) {
        sheet.col(i).width = 20;
    }
    file.saveAs('blob').then(function (content) {
        saveAs(content, fileName + '.xlsx');
    });

    // 按顺序展平column
    function columnLine(column) {
        column.forEach(ele => {
            if (ele.children === undefined || ele.children.length === 0) {
                columnLineArr.push(ele);
            } else {
                columnLine(ele.children);
            }
        });
    }
    // 初始化表头
    function init(column, rowIndex, columnIndex) {
        column.forEach((item) => {
            const hCell = sheet.cell(rowIndex, columnIndex);

            if (item.title === '操作') {
                hCell.value = '';
                return;
            } else if (item.children === undefined || item.children.length === 0) {

                hCell.value = item.title;
                hCell.vMerge = depth - rowIndex - 1;
                hCell.style.align.h = 'center';
                hCell.style.align.v = 'center';
                columnIndex++;
                // rowIndex++
            } else {
                let childrenNum = 0;
                function getColumns(arr) {
                    arr.forEach(ele => {
                        if (ele.children) {
                            getColumns(ele.children);
                        } else {
                            childrenNum++;
                        }
                    });
                }
                getColumns(item.children);
                hCell.hMerge = childrenNum - 1;
                hCell.value = item.title;
                hCell.style.align.h = 'center';
                hCell.style.align.v = 'center';
                let rowCopy = rowIndex;
                rowCopy++;
                init(item.children, rowCopy, columnIndex);
                // 下次单元格起点
                columnIndex = columnIndex + childrenNum;
            }
        });
    }

    function getDepth(arr) {
        const eleDepths = [];
        arr.forEach(ele => {
            let depth = 0;
            if (Array.isArray(ele.children)) {
                depth = getDepth(ele.children);
            }
            eleDepths.push(depth);
        });
        return 1 + max(eleDepths);
    }

    function max(arr) {
        return arr.reduce((accu, curr) => {
            if (curr > accu) return curr;
            return accu;
        });
    }

    function getColumns(arr) {
        let columnNum = 0;
        arr.forEach(ele => {
            if (ele.children) {
                getColumns(ele.children);
            } else {
                columnNum++;
            }
        });
        return columnNum;
    }
}

const file = {
    downBlob,
    exportExcel
}

export default file;