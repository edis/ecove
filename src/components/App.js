import React, { useState } from 'react';
import ebay from "../api/ebay";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

export default () => {
    const [products, setProducts]  = useState([]);

    const onTermSubmit = async term => {
        const response = await ebay.get('/search', {
            params: {
                q: term
            }
        })

        console.log(response.data.productSummaries)
        setProducts(response.data.productSummaries)
    };

    return (
        <div className={"ui container"}>
            <SearchBar onTermSubmit={onTermSubmit} />
            <ProductList products={products}/>
        </div>
    );
};