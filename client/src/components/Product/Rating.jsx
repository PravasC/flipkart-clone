import React from 'react';
import './Product.css';

function Rating({Productrating}) {
 
    return (
        <>
            <div className="Product__Rating">
                <i className="fas fa-star" className={Productrating >= 1 ? "fas fa-star" : Productrating === 0.5 ? "fas fa-star-half-alt": null }></i>
                <i className="fas fa-star" className={Productrating >= 2 ? "fas fa-star" : Productrating === 1.5 ? "fas fa-star-half-alt": null }></i>
                <i className="fas fa-star" className={Productrating >= 3 ? "fas fa-star" : Productrating === 2.5 ? "fas fa-star-half-alt": null }></i>
                <i className="fas fa-star" className={Productrating >= 4 ? "fas fa-star" : Productrating === 3.5 ? "fas fa-star-half-alt": null }></i>
                <i className="fas fa-star" className={Productrating >= 5 ? "fas fa-star" : Productrating === 4.5 ? "fas fa-star-half-alt": null }></i>
            </div>
        </>
    )
}

export default Rating;