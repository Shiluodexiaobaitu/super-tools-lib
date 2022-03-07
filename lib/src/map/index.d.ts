declare const map: {
    getDistance: (startLon: number, startLat: number, endLon: number, endLat: number) => number;
    calcDistance: (lat1: any, lng1: any, lat2: any, lng2: any) => number;
    lonLatToMercator: (lonLat: {
        lon: number;
        lat: number;
    }) => any;
    mercatorToLonlat: (mercator: {
        x: number;
        y: number;
    }) => any;
};
export default map;
