import React, { useState, useRef } from 'react';
import ebay from "../api/ebay";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import Spinner from "./Spinner";
import PaginationProp from "./Pagination";

export default () => {
    const [products, setProducts]  = useState([]);
    const isInitialMount = useRef(true);

    const renderContent = () => {
        if (isInitialMount.current) {
            console.log(process.env.REACT_APP_API_KEY);
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

        const response = await ebay.get('/', {
            params: {
                search_term: term,
            }
        });

        console.log(response);
        setProducts(response.data.search_results);
    };

    return (
        <div className={"ui container"}>
            <SearchBar onTermSubmit={onTermSubmit} />
            {renderContent()}
        </div>
    );
};