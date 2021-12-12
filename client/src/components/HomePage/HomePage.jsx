import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../actions/productActions';
import Product from '../Product/Product';
import './Homepage.css';
import CategoryMain from '../../Productinfo';
import CategoryHome from './CategoryHome';
import HompageSlider from './HompageSlider';
import Spiner from './Spiner';


function HomePage() {

    const ProuctList = useSelector(state => state.productList);
    const { loading, product, error } = ProuctList;

    // const AllProductRes = async() =>{
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
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(listProduct());

        // AllProductRes();

    }, [dispatch]);
    // const [AllProduct, setAllProduct] = useState([]);

    // console.log(AllProduct);
    // console.log(Productinfo);
    const AllProduct = product;

    // return (
    // <div className="pt-5 container-fluid">
    //     <div className="Product__Wrapper pt-5">
    //         {AllProduct.map((data , index) => {
    //             return(
    //                 <Product key={index} id={data._id} name={data.productName} discription={data.discription} rating={data.rating} mainRating={data.mainRating} price={data.price} imageLink={data.imageLink} />
    //             )
    //         })}
    //     </div>
    // </div>
    // )

    return (
        <>
            {loading?<Spiner />:null}
            <div className="HomePageWrapper">
                <div className="HomePage">
                    <div className="CategoryHomePage">
                        <div className="CategoryPage container">
                            {CategoryMain.map((data, index) => {
                                return (
                                    <CategoryHome id={index} name={data.name} image={data.image} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="HomePageSliderWrapper">
                        <div className="HomePageSlider container-f">
                            <HompageSlider />
                        </div>
                    </div>
                    <div className="container-f HomePageProducts">
                        <div className="Product__Wrapper">
                            {AllProduct.map((data, index) => {
                                return (
                                    <Product key={index} id={data._id} name={data.productName} discription={data.discription} rating={data.rating} mainRating={data.mainRating} price={data.price} imageLink={data.imageLink} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
