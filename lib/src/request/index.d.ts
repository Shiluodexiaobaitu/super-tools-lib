import Ajax from './ajax';
declare const request: {
    socket: ({ url }: {
        url: string;
    }) => any;
    Ajax: typeof Ajax;
};
export default request;
