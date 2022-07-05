declare const getDistance: (startLon: number, startLat: number, endLon: number, endLat: number) => number;
declare const calcDistance: (lat1: any, lng1: any, lat2: any, lng2: any) => number;
declare const lonLatToMercator: (lonLat: {
    lon: number;
    lat: number;
}) => any;
declare const mercatorToLonlat: (mercator: {
    x: number;
    y: number;
}) => any;
export { getDistance, calcDistance, lonLatToMercator, mercatorToLonlat };
