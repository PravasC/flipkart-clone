import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../../actions/productActions';
import Spiner from '../HomePage/Spiner';
import Rating from './Rating';
import { ToastContainer, toast } from 'react-toastify';


function ProductDetailes() {

    const route = useParams();
    const paramId = route.productId;
    const dispatch = useDispatch();
    const productdetails = useSelector(state => state.productDetails);
    const { loding, error, product } = productdetails;

    useEffect(() => {
        dispatch(detailsProduct(paramId));
    }, [1]);


    // const GetTheProductID = async(e) =>{

    //     // e.preventDefault();

    //     const paramId = param;

    //     try{
    //         const res = await fetch("/productid",{
    //             method:"POST",
    //             headers:{
    //                 Accept : "application/json",
    //                 "Content-type":"application/json"
    //             },
    //             body: JSON.stringify({
    //                 paramId
    //             })
    //         });
    //         const data = await res.json();
    //         setproductData(data)
    //         // console.log(data);
    //     }catch(err)
    //     {
    //         console.log("Error is here");
    //     }
    // }

    // const [productData, setproductData] = useState([]);

    // const ShowTheProduct = async() =>{
    //     try{
    //         const res = await fetch("/products",{
    //             method:"GET",
    //             headers:{
    //                 Accept : "application/json",
    //                 "Content-type":"application/json"
    //             }
    //         });

    //         const data = await res.json();
    //         setAllProduct(data);
    //     }catch(err)
    //     {
    //         console.log("Error is here");
    //     }
    // }

    // const product = Productinfo.find((p) => p.id === ParaId);
    // const product = ParaId;
    // console.log(product);
    // console.log(ParaId);

    const productData = product;

    const sentToCart = async (e) => {
        e.preventDefault();
        const { productName, imageLink, price } = productData;
        const productId = product._id;

        try {
            const res = await fetch("/additemcart", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    productId, productName, imageLink, price
                })
            });
            const data = await res.json();

            if (res.status === 200 || res.status === 201)
            {
                toast.success('✔️ Cart Add Succesfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }else{
                toast.error('This Product is Already in cart!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }

        } catch (err) {
            console.log("Error is here");
        }
    }

    return (
        <>
            {loding ? <Spiner /> : null}
            <div className="ProductDetailsWrapper container">
                <div className="ProductDetials">
                    <div className="ProductDetialsLeftSide">
                        <img src={productData.imageLink} alt="Product By ID " />
                        <div className="ProductDetialsLeftSideButtons">
                            <button className="buttonOne" onClick={sentToCart}><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                            <button className="buttonTwo"><i class="fas fa-check-circle"></i> Buy Now</button>
                        </div>
                    </div>
                    <div className="ProductDetialsRightSide">
                        <p><span className="ProductDetialsRightSideParam">Home > {productData.category} > {productData.brandName} > {productData.subCategory} </span></p>
                        <h6>{productData.productName}</h6>
                        <Rating Productrating={productData.rating} />
                        <h4 className="pt-3 ProductDetailsPrice">Price : ${productData.price}</h4>
                        <p className=" pt-3 text-success ProductDetailsOffers"><i class="fas fa-arrow-alt-circle-right text-success"></i> Product Offers</p>
                        <p>{productData.productOffers}</p>
                        <p className=" pt-3 text-info ProductDetailsOffers"><i class="fas fa-arrow-alt-circle-right text-success"></i> Availabil Colors</p>
                        <p>{productData.productColors}</p>
                        {productData.category === "Mobiles" ? <p>RAM : {productData.productExtraOne}<br /><br />ROM : {productData.productServices}</p> : null}
                        {productData.category === "PC" ? <p>RAM : {productData.productExtraOne}<br /><br />ROM : {productData.productServices}</p> : null}
                        {productData.category === "Laptop" ? <p>RAM : {productData.productExtraOne}<br /><br />ROM : {productData.productServices}</p> : null}
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

export default ProductDetailes
