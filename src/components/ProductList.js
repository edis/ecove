import React from 'react';
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    const renderedList = products.map(product => {
        if (product.image !== undefined){
            return <ProductCard key={product.epid} title={product.title} image={product.image.imageUrl}/>;
        }
    });

    return <div className={"ui relaxed divided cards"}>{renderedList}</div>;
};

export default ProductList;