import React from 'react';

const ProductCard = ({ title, image, link, price }) => {
    return (
        <div className="card">
            <div className="image">
                <a href={link}><img src={image} style={{ width: "100%", height: "300px", maxWidth: "auto"}}/></a>
            </div>
            <div className="content">
                <div className="header">{title.slice(0, 50)}...</div>
            </div>
            <div className="extra content">
                    <span className="right floated">
                        <a href={link} target="_blank"><button className="ui button">Buy</button></a>
                    </span>
                    <div className="header">${price}</div>
            </div>
        </div>
    );
};

export default ProductCard;