import { version } from '../package.json';

import string from './string';
import tools from './tools';
import browser from './browser';
import performance from './performance';
import map from './map';
import regular from './reg';
import dom from './dom';
import array from './array';
 
const superToolsLib = {
    version: version,
    ...regular,
    ...string,
    ...tools,
    ...browser,
    ...performance,
    ...map,
    ...dom,
    ...array
}

export default superToolsLib;