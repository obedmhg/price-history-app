import axios from 'axios';

const instance = axios.create( {
    baseURL: 'https://my-json-server.typicode.com/obedmhg/price-history-app'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN from instance';

instance.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error => {
    return Promise.reject(error);
});

export default instance;