import React from 'react';

const ProductCard = ({ title, image }) => {
    return (
        <div className="card">
            <div className="image">
                <img src={image} width={"220px"}/>
            </div>
            <div className="content">
                <div className="header">{title}</div>
                <div className="meta">
                    <span className="date">Coworker</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;