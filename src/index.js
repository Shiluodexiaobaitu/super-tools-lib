import string from './string';
import tools from './tools';
import browser from './browser';
import performance from './performance';
import map from './map';
import validate from './reg';
import dom from './dom';
import array from './array';

const zcutils = {
    validate,
    ...string,
    ...tools,
    ...browser,
    ...performance,
    ...map,
    ...dom,
    ...array
}

export default zcutils;