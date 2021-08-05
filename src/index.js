import { version } from '../package.json';

import string from './string';
import tools from './tools';
import browser from './browser';
import performance from './performance';
import map from './map';
import validate from './reg';
import dom from './dom';
import array from './array';

const superToolsLib = {
    validate,
    ...string,
    ...tools,
    ...browser,
    ...performance,
    ...map,
    ...dom,
    ...array
}
superToolsLib.version = version;

export default superToolsLib;