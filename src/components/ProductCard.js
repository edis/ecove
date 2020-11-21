import React from 'react';
import { Rating } from "semantic-ui-react";

const ProductCard = ({ title, image, link, price, isPrime, rating }) => {
    return (
        <div className="card">
            <div className="image">
                <a href={link}><img src={image} style={{ width: "100%", height: "300px", maxWidth: "auto"}}/></a>
            </div>
            <div className="content">
                <div className="header">{title.slice(0, 50)}...</div>
                <span className="right floated">
                    { isPrime ? <a className="ui blue tag label">Prime</a>: <a></a>}
                </span>
                <Rating icon='star' rating={Math.round(rating)} maxRating={5} style={{ marginTop: "0.35rem"}} size={"huge"} disabled/>
            </div>
            <div className="extra content">
                    <span className="right floated">
                        <a href={link} target="_blank">
                            <div className="ui vertical animated green button" tabIndex="0">
                             <div className="hidden content">Shop</div>
                                <div className="visible content">
                                <i className="shop icon" />
                              </div>
                            </div>
                        </a>
                    </span>
                    <div className="header" style={{fontSize: "1.4rem", marginTop: "0.25rem"}}>{price}</div>
            </div>
        </div>
    );
};

export default ProductCard;