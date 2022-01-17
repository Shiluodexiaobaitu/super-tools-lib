/*
 * @Author: zhangce
 * @Date: 2021-11-04 17:11:40
 * @LastEditors: zhangce
 * @LastEditTime: 2022-01-14 17:54:26
 * @Description: 
 */
import { version } from '../package.json';

import string from './string';
import tools from './tools';
import browser from './browser';
import performance from './performance';
import map from './map';
import regular from './reg';
import dom from './dom';
import array from './array';
import object from './object';
import typeJudgment from './typeJudgment';
import file from './file';
import vconsole from './console';
import request from './request';
import mobile from './mobile';
import data from './date';
import count from './count';
import algorithm from './algorithm';
import _number from './number';

const superToolsLib = {
    version: version,
    ...regular,
    ...string,
    ...tools,
    ...browser,
    ...performance,
    ...map,
    ...dom,
    ...array,
    ...object,
    ...typeJudgment,
    ...file,
    ...request,
    ...vconsole,
    ...mobile,
    ...data,
    ...count,
    ...algorithm,
    ..._number
}

export default superToolsLib;

// export declare const