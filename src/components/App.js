import React, { useState, useEffect, useRef } from 'react';
import rainforest from "../api/rainforest";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import Spinner from "./Spinner";
import PaginationProp from "./Pagination";
import Error from "./Error";

export default () => {
    const perPageItems = 9;

    const [pageTitle, setPageTitle] = useState('Welcome to Ecove 🌎👋');
    const [pageNum, setPageNum] = useState(1);
    const [products, setProducts]  = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        renderContent();
    }, [pageNum, products]);

    const isInitialMount = useRef(true);

    const isError = useRef(false);

    const renderContent = () => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }else{
            // if (products !== undefined){
                if (products.length === 0){
                    if (!isError.current) {
                        return <Spinner/>;
                    }else{
                        isError.current = false;
                        return <Error /> ;
                    }
                }else{
                    return (
                        <div>
                            <ProductList products={products.slice((pageNum - 1) * perPageItems, pageNum * perPageItems)} />
                            <PaginationProp totalPages={Math.ceil(products.length / perPageItems)} onPageUpdate={setPageNum}/>
                        </div>
                    );
                }
            // }
        }
    };

    const onTermSubmit = async term => {
        setProducts([]);

        try {
            const response = await rainforest.get('/', {
                params: {
                    search_term: term,
                }
            });


            setPageTitle(term);
            setProducts(response.data.search_results);
        }catch(err){
            isError.current = true;
            setProducts([]);
        }
    };

    return (
        <div className={"ui container"}>
            <h1 className={"ui container center aligned"} style={{ marginTop: "2rem"}}>{pageTitle}</h1>
            <SearchBar onTermSubmit={onTermSubmit} />
            {renderContent()}
        </div>
    );
};