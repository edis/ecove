import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.sandbox.ebay.com/commerce/catalog/v1_beta/product_summary',
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
})
