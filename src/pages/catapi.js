import axios from 'axios';

const catApi = axios.create({
    baseURL: 'https://api.thecatapi.com/v1'
});

catApi.defaults.headers.common['x-api-key'] = 'live_KXa2QNkQxWRsCAhx7KrKXyiuKt1uztVEAsLdX7Lw3RU6zCBSvHWCpMVkupo01GOp';

export default catApi;
