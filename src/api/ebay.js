import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.sandbox.ebay.com/buy/browse/v1/item_summary/',
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
})
