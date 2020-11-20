import React from 'react';
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    const renderedList = products.map(product => {
        if (product.image !== undefined){
            return <ProductCard key={product.asin} title={product.title} image={product.image} link={product.link} price={product.price.value} />;
        }
    });

    return <div className={"ui relaxed divided cards"}>{renderedList}</div>;
};

export default ProductList;