import React,{ useState , useEffect } from 'react';
import ShowAllCart from './ShowAllCart';
import './ViewCart.css';

function ViewCart() {

    const [ProductData, setproductData] = useState([]);

    const showingCarts = async(e) =>{

        const userId="618ffa00b1bb51ffbb62b981";

        try{
            const res = await fetch("/showcartitems", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId
                })
            });
            const data = await res.json();
            console.log(data.finduserProducts.products);
            const productsAllData = data.finduserProducts.products;
            setproductData(productsAllData);
            
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        showingCarts();
    }, [ProductData]);

    let i=0;

    return (
        <>
            <div className="ViewCart__Wrapper container">
                <div className="ViewCart">
                    <h3>All Carts</h3>
                    <div className="CartFlexSections">
                        <div className="MainCartProductSection">
                            {ProductData.map((data,idx) => {
                                    return(
                                        <ShowAllCart fill={i++} key={idx} id={data._id} name={data.productName} image={data.imageLink} price={data.price} />
                                    )
                                })
                            }
                        </div>
                        <div className="AllSummerySection">
                            <h4>Order Summery</h4>
                            <h5>Totol Items : {i}</h5>
                            <p>Subtotal Items : </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewCart
