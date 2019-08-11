import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-ac7a6.firebaseio.com/'
});

export default instance;