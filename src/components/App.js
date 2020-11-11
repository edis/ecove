import React, { useState, useEffect, useRef } from 'react';
import ebay from "../api/ebay";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import Spinner from "./Spinner";

export default () => {
    const [products, setProducts]  = useState([]);
    const isInitialMount = useRef(true)

    const renderContent = () => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }else{
            if (products !== undefined){
                return products.length === 0 ? <Spinner/> : <ProductList products={products}/>;
            }
        }
    };

    const onTermSubmit = async term => {
        setProducts([]);
        const response = await ebay.get('/search', {
            params: {
                q: term
            }
        });

        console.log(response)
        setProducts(response.data.itemSummaries);
    };


    return (
        <div className={"ui container"}>
            <SearchBar onTermSubmit={onTermSubmit} />
            {renderContent()}
        </div>
    );
};