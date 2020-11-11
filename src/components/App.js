import React, { useState, useEffect, useRef } from 'react';
import ebay from "../api/ebay";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import Spinner from "./Spinner";

export default () => {
    const [products, setProducts]  = useState([]);
    const [ref, setRef]  = useState('');
    const isInitialMount = useRef(true)

    useEffect(() => {
        if (isInitialMount.current){
            isInitialMount.current = false;
        }else{
            setRef(renderContent());
        }
    }, [products]);

    const renderContent = () => {
        if (products !== undefined){
            return products.length === 0 ? <Spinner/> : <ProductList products={products}/>;
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
            {ref}
        </div>
    );
};