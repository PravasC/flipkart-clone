import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

function ShowAllCart({fill,id,name,image,price,fillfunctions}) {

    const history = useHistory();

    const [quantityPart, setquantityPart] = useState(1);

    if(quantityPart < 1){
        window.alert("Minimum Quntity is Arrived");
        setquantityPart(1);
    }

    const deleteCartfun = async(e) =>{
        e.preventDefault();

        let productId = id;

        const res = await fetch("/deletecartitems", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                productId
            })
        });

        if(res.status === 200){
            toast.success('✔️ Cart Remove Succesfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history.push("/viewcart");
        }
    }

    return (
        <>
            <div className="AllCartProducts">
                <div className="AllProductSection">
                    <div className="imageSec">
                        <img src={image} alt="Products Cart" />
                    </div>
                    <div className="NameSec">
                        <p>{name}</p>
                    </div>
                    <div className="PriceSec">
                        <p>Price: ${price}</p>
                    </div>
                    <div className="QuantitySec">
                        <div className="dropBtn Allbtns" onClick={() => {setquantityPart(quantityPart-1)}}>
                            -
                        </div>
                        <div className="QuantityInput">
                            <input type="text" value={quantityPart}/>
                        </div>
                        <div className="AddBtn Allbtns"  onClick={() => {setquantityPart(quantityPart+1)}}>
                            +
                        </div>
                    </div>
                    <div className="IconsSec">
                        <button className="btn btn-danger" onClick={deleteCartfun}><i className="far fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
            <ToastContainer /> 
        </>
    )
}

export default ShowAllCart
