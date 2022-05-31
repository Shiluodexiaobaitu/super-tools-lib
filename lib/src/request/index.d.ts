import Ajax from './ajax';
declare const socket: ({ url }: {
    url: string;
}) => any;
export { socket, Ajax };
