import React, { useState, useEffect, useRef } from 'react';
import rainforest from "../api/rainforest";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import Spinner from "./Spinner";
import PaginationProp from "./Pagination";

export default () => {
    // page num
    const [pageTitle, setPageTitle] = useState('Welcome to Ecove 🌎👋');
    const [pageNum, setPageNum] = useState(1);
    const [products, setProducts]  = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        renderContent();
    }, [pageNum, products]);

    const isInitialMount = useRef(true);

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
                            <ProductList products={products.slice((pageNum - 1) * 6, pageNum * 6)} />
                            <PaginationProp totalPages={Math.ceil(products.length / 6)} onPageUpdate={setPageNum}/>
                        </div>
                    );
                }
            }
        }
    };

    const onTermSubmit = async term => {
        setProducts([]);

        const response = await rainforest.get('/', {
            params: {
                search_term: term,
            }
        });

        setPageTitle(term);
        setProducts(response.data.search_results);
    };

    return (
        <div className={"ui container"}>
            <h1 className={"ui container center aligned"} style={{ marginTop: "2rem"}}>{pageTitle}</h1>
            <SearchBar onTermSubmit={onTermSubmit} />
            {renderContent()}
        </div>
    );
};