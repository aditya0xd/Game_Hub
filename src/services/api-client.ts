import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4ad8aeda5ff844349521066754ea6310'
    }
})