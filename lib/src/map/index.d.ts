declare const map: {
    getDistance: (endLat: number, endLon: number, startLat: number, startLon: number) => number;
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
