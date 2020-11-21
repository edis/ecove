import React from 'react';
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    const renderedList = products.map(product => {
        if (product !== undefined){
                return <ProductCard key={product.asin}
                                    title={product.title}
                                    image={product.image}
                                    link={product.link}
                                    price={product.price ? product.price.raw: "Visit Site"}
                                    isPrime={product.is_prime}
                                    rating={product.rating}
                />;
        }
    });

    return <div className={"ui relaxed three stackable divided cards"}>{renderedList}</div>;
};

export default ProductList;