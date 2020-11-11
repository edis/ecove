import React from 'react';

const ProductCard = ({ title, image }) => {
    return (
        <div className="card">
            <div className="image">
                <img src={image} style={{ width: "100%", height: "300px", maxWidth: "auto"}}/>
            </div>
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    );
};

export default ProductCard;