import axios from 'axios';

export default axios.create({
    baseURL: `https://api.rainforestapi.com/request?`,
    params: {
        amazon_domain: "amazon.com",
        type: "search",
        api_key: process.env.REACT_APP_API_KEY
    }
});