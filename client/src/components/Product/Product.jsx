import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import Rating from './Rating';

function Product({id,name,discription,rating,mainRating,price,imageLink,key}) {
    return (
        <>
                
                <div className="Product__wrapper" >
                <Link exact to={`/product/${id}`} target="_blank">
                    <div className="Product">
                        <div className="Product__Image">
                            <img src={`${imageLink}`} alt="Product Image"/>
                        </div>
                        <div className="Producat__Content">
                            <div className="Product__Name">
                                <h6>{name}</h6>...
                            </div>
                            <div className="Product__Rating">
                                <Rating Productrating={rating} />
                            </div>
                            <div className="Product__Price">
                                {price} $
                            </div>
                            <div>
                                See Details
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                
        </>
    )
}
// name discription rating mainRating price imageLink

export default Product
