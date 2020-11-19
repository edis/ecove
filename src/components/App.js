import React, { useState, useRef } from 'react';
import ebay from "../api/ebay";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import Spinner from "./Spinner";
import PaginationProp from "./Pagination";

export default () => {
    const [products, setProducts]  = useState([]);
    const isInitialMount = useRef(true)

    const renderContent = () => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }else{
            if (products !== undefined){
                if (products.length === 0){
                   return <Spinner />;
                }else{
                    return (
                        <div>
                            <ProductList products={products} />
                            <PaginationProp />
                        </div>
                    );
                }
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

        setProducts(response.data.productSummaries);
    };

    return (
        <div className={"ui container"}>
            <SearchBar onTermSubmit={onTermSubmit} />
            {renderContent()}
        </div>
    );
};