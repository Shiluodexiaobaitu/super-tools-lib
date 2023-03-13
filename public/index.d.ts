
declare global {
  interface Window {
    ActiveXObject: any;
    webkitIndexedDB: any;
    mozIndexedDB: any;
  }
}

type State = Record<string, unknown>;
declare class StateObserver {
  private _state;
  private _listener;
  constructor(state: State);
  on(type: any, cb: any): Error;
  off(type: any, cb: any): void;
  setState(state: State): Error;
  getState(key?: string): unknown;
  _on(type: any, cb: any): void;
  _off(type: any, cb: any): void;
  _spread(type: any, ...rest: any[]): void;
}

export type IndexedDBProps = {
  dbName: string;
  storeName: string;
  version: number;
};

class IndexedDB {
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

declare class Ajax {
  private _options;
  constructor(options: any);
  send(callback: (res: any) => void, error: (err: any) => void): void;
  set url(url: any);
  get url(): any;
}

interface IProps {
  url: string;
  reconnectCount?: number;
  heartTime?: number;
}
declare class Socket {
  private ws;
  private url;
  private sendTimer;
  private heartTimer;
  private reconnectCount;
  private heartTime;
  constructor(props: IProps);
  createWebSocket(message: any, cb: (data: any) => void): void;
  heartbeat(message: any, cb: any): void;
}

declare class EventObserver {
  private _listener;
  constructor();
  on(type: string, cb: (...rest: any[]) => void): void;
  off(type: string, cb: (...rest: any[]) => void): void;
  spread(type: string, ...rest: any[]): Error;
  _on(type: string, cb: (...rest: any[]) => void): void;
  _off(type: string, cb: (...rest: any) => void): void;
  _spread(type: string, ...rest: any[]): void;
}

declare const reg: {
  mobile: RegExp;
  phone: RegExp;
  chinese_and_english: RegExp;
  chinese10: RegExp;
  website: RegExp;
  nickname: RegExp;
  verify_code: RegExp;
  verify_pwd: RegExp;
  email: RegExp;
  character: RegExp;
  intNumber: RegExp;
  positiveInt5: RegExp;
  positiveInt3_decimal2: RegExp;
  negativeInteger: RegExp;
  isNotNegativeFloatNum: RegExp;
  cP: RegExp;
  cPattern: RegExp;
  number: RegExp;
  numeric_letters: RegExp;
  chinese_numeric_letters: RegExp;
  strong_password: RegExp;
  cname: RegExp;
  ename: RegExp;
  ip: RegExp;
  ipv4: RegExp;
  color16Reg: RegExp;
  mac: RegExp;
}

declare const _default: {
  version: string,
  initialToCapitali: (gname: string) => string;
  repeat: (str: string, n: number) => string;
  trim: (str: string) => string;
  getTextWidth: (text: string, font: any) => number;
  transFormat: (str: string, oldChar: string, newChar: string) => string;
  strInversion: (str: string) => string;
  toLine: (val: string, isLowercase?: boolean) => string;
  toFullHexColor: (color: string) => string;
  decode: (token: string) => string;
  letterToEmoji: (c: string) => string;
  toPascalCase: (str: string) => string;
  removeSpaces: (str: string) => string;
  replaceText: (str: string, range: [number, number] | [number], mask: string) => string;
  guid: () => string;
  throttle: (fn: <T>(...rest: T[]) => void, delay?: number) => <T_1>(...rest: T_1[]) => void;
  debounce: (fn: <T>(...rest: T[]) => void, delay: number) => <T_1>(...rest: T_1[]) => void;
  fileDownload: (url: string) => boolean;
  fuzzyQuery: <T>(list: T[], key: string, keyWord: string) => T[];
  colorHex: (color: string) => string;
  hexToRgba: (str: string, alpa: number) => string;
  rgbaToHex: (color: any) => string;
  viewportToPixels: (value: string) => number;
  noRefdelUrlParam: (ref: string) => string;
  getAge: (id: string) => string;
  getSex: (id: string) => "男" | "女";
  digitUppercase: (n: number) => string;
  injectScript: (src: string) => void;
  sinogToLetter: (str: string) => string;
  getFitSize: (px: number, draft?: number) => number;
  checkPassWord: (str: string) => number;
  fahrenheitToCelsius: (fahrenheit: number) => number;
  celsiusToFahrenheit: (celsius: number) => number;
  toFullScreen: () => void;
  exitFullscreen: () => void;
  LocalStorage: {
    get(user: string, name: string): string;
    set(user: string, name: string, value: any): void;
    remove(user: string, name: string): void;
    clear(): void;
    forEach(cb: (value: any, key: string) => void): void;
  };
  SessionStorage: {
    get(user: string, name: string): string;
    set(user: string, name: string, value: any): void;
    remove(user: string, name: string): void;
    clear(): void;
    forEach(cb: (value: any, key: string) => void): void;
  };
  getPosition: (timeout?: number, maximumAge?: number) => Promise<unknown>;
  winCopy: (flag: boolean) => void;
  print: (printEleId: string, rootEleId: string, style: string) => boolean;
  copy: (str: string) => void;
  scrollToTop: () => void;
  userBrowser: () => string;
  getLocalStorageSize: () => string;
  getUrlParam: () => any;
  cookie: {
    set: (key: string, value: string, expTime?: number) => void;
    delete: (key: string) => void;
    get: (key: string) => string;
  };
  IndexedDB: IndexedDB,
  performanceAnalysis: () => void;
  getPerformanceTiming: () => any;
  calcDistance: (lat1: number, lng1: number, lat2: number, lng2: number) => number;
  lonLatToMercator: (lonLat: {
    lon: number;
    lat: number;
  }) => {
    x: number;
    y: number;
  };
  mercatorToLonlat: (mercator: {
    x: number;
    y: number;
  }) => {
    lon: number;
    lat: number;
  };

  validate: (key: keyof typeof reg, value: string) => boolean;
  getOffset: (ele: HTMLElement) => {
    left: number;
    top: number;
  };
  shaking: ({ ele, attr, cb, rate, time }: {
    ele: HTMLElement;
    attr: string;
    cb: () => void;
    time?: number;
    rate?: number;
  }) => void;
  stopPropagation: (e: Event) => void;
  hasClass: (ele: HTMLElement, name: string) => boolean;
  addClass: (ele: HTMLElement, name: string) => void;
  removeClass: (ele: HTMLElement, name: string) => void;
  replaceClass: (ele: HTMLElement, newName: string, oldName: string) => void;
  scrollToTheBottom: (ele: HTMLElement, callback: () => void, delay?: number) => void;
  textVisibilityChange: (dom: HTMLElement) => boolean;
  getTransformMatrix: (transform: string) => {
    x: number;
    y: number;
  };
  isDescendant: (child: Node, parent: Node) => boolean;
  getSelectedText: () => string;
  insertAfter: (newEle: Element, anotherEle: Element) => Element | null;
  insertBefore: (newEle: Element, anotherEle: Element) => Element;
  insertHtmlAfter: (html: string, ele: Element) => void;
  insertHtmlBefore: (html: string, ele: Element) => void;
  eleReplace: (oldEle: Element, newEle: Element) => Element | null;
  bubbleSort: (arr: any) => any;
  arrayUnique: <T>(arr: T[], field: string | number) => T[];
  arrayNonRepeatfy: <T>(arr: T[]) => T[];
  aLineUnique: <T>(arr: T[]) => T[];
  last: <T>(array: T[]) => T;
  alphabeticSort: <T>(_data: T[], keyword: string, ascen?: boolean) => T[];
  arrToObject: <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K) => Record<string, T>;
  toNumbers: (arr: string[]) => number[];
  countBy: <T extends Record<string, string>, K extends keyof T>(arr: T[], prop: K) => Record<string, number>;
  indexOfMax: (arr: number[]) => number;
  indexOfMin: (arr: number[]) => number;
  contains: <T>(arr: T[], criteria: (a: T) => boolean) => boolean;
  cloneDeep: <T>(data: T) => T;

  stringfyQueryString: (obj: Record<string, string | number | boolean>) => string;
  values: <T>(obj: Record<string, T>) => T[];
  keys: <T>(obj: Record<string, T>) => string[];
  isBase64: (base64: string) => boolean;
  isArray: (arr: unknown) => boolean;
  isString: (str: unknown) => boolean;
  isFunction: (fn: unknown) => boolean;
  isObject: (obj: unknown) => boolean;
  isNumber: (num: unknown) => num is number;
  isWeiXin: () => boolean;
  isNull: (o: unknown) => boolean;
  isUndefined: (o: unknown) => boolean;
  isDate: (o: unknown) => boolean;
  isRegExp: (o: unknown) => boolean;
  isError: (o: unknown) => boolean;
  isSymbol: (o: unknown) => boolean;
  isPromise: (o: unknown) => boolean;
  returnType: (o: unknown) => unknown;
  isSupportWebP: () => boolean;
  isMobile: () => boolean;
  isAndroidMobileDevice: () => boolean;
  isAppleMobileDevice: () => boolean;
  isImg: (path: string) => boolean;
  isUrl: (path: string) => boolean;
  isObjectKeyEqual: (a: Record<string, unknown>, b: Record<string, unknown>) => boolean;
  isObjectExistsKey: (obj: Record<string, unknown>, key: string) => boolean;
  isObjectIncludeSpecifiedKey: (a: Record<string, unknown>, b: Record<string, unknown>) => boolean;
  isEmptyObject: (obj: Record<string, unknown>) => boolean;
  isEmptyArray: <T>(arr: T[]) => boolean;
  isDarkMode: () => boolean;
  isBasicType: (val: unknown) => boolean;
  isHexColor: (color: string) => boolean;
  isMap: (v: unknown) => boolean;
  isSet: (v: unknown) => boolean;
  isOdd: (v: number) => boolean;
  isEven: (v: number) => boolean;
  isEqual: (value: any, other: any) => boolean;

  isContain: <T extends {
    x: number;
    y: number;
  }>(point: T, points: T[]) => boolean;
  downBlob: (data: BlobPart, fileName: string) => void;
  getFileBase64: (file: File, cb: (base64: ArrayBuffer | string) => void) => void;
  blobToDataURL: (blob: Blob, callback: (result: string | ArrayBuffer) => void) => void;
  drawAndShareImage: (bgImgOps: {
    url: string;
    width: number;
    height: number;
  }, upImgOps: {
    url: string;
    width: number;
    height: number;
    x: number;
    y: number;
  }, ops?: {
    download: boolean;
    imgName: string;
    success: (base64: any) => any;
  }) => void;
  base64ToFile: (urlData: string, fileName: string) => File;
  vConsole: () => void;

  Socket: Socket,
  Ajax: Ajax,
  orient: (fn: (type: string) => void) => void;

  dateFormater: (formater: string, time?: number) => string;
  formatPassTime: (startTime: number) => string;
  formatRemainTime: (endTime: string) => string;
  dayDiff: (date1: Date, date2: Date) => number;
  monthDiff: (startDate: Date, endDate: Date) => number;
  compareDate: (a: Date, b: Date) => boolean;
  formatSeconds: (s: number) => string;
  getQuarter: (d?: Date) => number;
  getLastDate: (d?: Date) => Date;
  getFirstDate: (d?: Date) => Date;
  getCurrentSecond: () => number;
  shuffle: <T>(arr: T[]) => T[];
  accAdd: (num1: any, num2: number) => number;
  accSub: (num1: number, num2: number) => number;
  accMul: (num1: number, num2: number) => number;
  accDiv: (num1: number, num2: number) => number;
  formatPrice: (price: string, sign?: string) => string;
  smallRounding: (num: number, place: number) => number;
  range: (min: number, max: number) => number[];
  closest: (arr: number[], n: number) => number;
  filter: <T>(data: Record<string, T> | T[], iteratee: (item: T, key?: string | number) => boolean) => T[];
  forEach: <T>(data: Record<string, T> | T[], iteratee: (item: T, key?: string | number) => void | boolean) => void;
  map: <T>(data: Record<string, T> | T[], iteratee: (item: T, key: number | string) => any) => Record<string, T> | T[];

  sortAscii: (data: string[]) => string[];
  generateSign: (obj: Record<string, unknown>) => string;

  EventObserver: EventObserver,
  addEventListener: (type: string, cb: (...rest: any[]) => void) => void;
  removeEventListener: (type: string, cb: (...rest: any[]) => void) => void;
  dispatchEvent: (type: string, ...rest: any[]) => void;
  StateObserver: StateObserver,
  distance: (p1: {
    x: number;
    y: number;
  }, p2: {
    x: number;
    y: number;
  }) => number;
  degsToRads: (deg: number) => number;
  getPolygonCenter: <T extends {
    x: number;
    y: number;
  }>(points: T[]) => {
    x: number;
    y: number;
  };
  scalePolygon: <T extends {
    x: number;
    y: number;
  }>(points: T[], extra: number) => T[];
}

export default _default
