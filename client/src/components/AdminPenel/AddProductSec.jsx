import React, { useState } from 'react'

function AddProductSec() {

    const [productALlData, setproductALlData] = useState({
        productName:"",
        imageLink:"",
        brandName:"",
        category:"",
        subCategory:"",
        rating:"",
        price:"",
        countOfStock:"",
        productOffers:"",
        productColors:"",
        productServices:"",
        productExtraOne:""
    });

    let name , value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setproductALlData({...productALlData , [name]:value});
    }

    const PostAllData = async(e) => {
        e.preventDefault();

        const {productName,imageLink,brandName,category,subCategory,rating,price,countOfStock,productOffers,productColors,productServices,productExtraOne} = productALlData;

        const res = await fetch("/productadd" , {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                productName,imageLink,brandName,category,subCategory,rating,price,countOfStock,productOffers,productColors,productServices,productExtraOne
            })
        });
        const data = await res.json();

        if(res.status === 400){
            window.alert(data.messege);
        }else if(res.status === 402){
            window.alert(data.messege);
        }else if(res.status === 401){
            window.alert(data.messege);
        }else if(res.status === 200){
            window.alert(data.messege);
            setproductALlData({
                productName:"",
                imageLink:"",
                brandName:"",
                category:"",
                subCategory:"",
                rating:"",
                price:"",
                countOfStock:"",
                productOffers:"",
                productColors:"",
                productServices:"",
                productExtraOne:""
            });
        }else{
            window.alert("Can't Find The Error")
        }
    }

    return (
        <>
           <div className="AddProductSectionWrapper pt-5">
                <div className="AddProductSection container">
                    <form method="POST">
                        <input name="productName" value={productALlData.productName} onChange={handleInput} placeholder="Enter The Product Name" />
                        <input name="imageLink" value={productALlData.imageLink} onChange={handleInput} placeholder="Enter The Image Link" />
                        <input name="brandName" value={productALlData.brandName} onChange={handleInput} placeholder="Enter The Brand Name" />
                        <input name="category" value={productALlData.category} onChange={handleInput} placeholder="Enter The Category Name" />
                        <input name="subCategory" value={productALlData.subCategory} onChange={handleInput} placeholder="Enter The Sub Category" />
                        <input name="rating" value={productALlData.rating} onChange={handleInput} placeholder="Enter The Rating" />
                        <input name="price" value={productALlData.price} onChange={handleInput} placeholder="Enter The Price" />
                        <input name="countOfStock" value={productALlData.countOfStock} onChange={handleInput} placeholder="Enter The Count Of Stock" />
                        <input name="productOffers" value={productALlData.productOffers} onChange={handleInput} placeholder="Enter The Product offers" />
                        <input name="productColors" value={productALlData.productColors} onChange={handleInput} placeholder="Availabile Color" />
                        <input name="productServices" value={productALlData.productServices} onChange={handleInput} placeholder="Enter The Services" />
                        <input name="productExtraOne" value={productALlData.productExtraOne} onChange={handleInput} placeholder="Enter Some Extra Fitures" />
                        <button className="btn btn-info w-100 mt-5" onClick={PostAllData}>Submit</button>
                    </form>
                </div>
                {/* <div className="alert alert-success" role="alert">
                    Data Added SuccessFull
                </div> */}
           </div>
        </>
    )
}

export default AddProductSec
