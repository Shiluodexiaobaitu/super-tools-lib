import Socket from './socket';


const socket = ({ url }: { url: string }): any => {
    return new Socket({ url })
}

const request = {
    socket
}

export default request;