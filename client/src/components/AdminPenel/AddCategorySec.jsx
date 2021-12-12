import React, { useState } from 'react';

function AddCategorySec() {

    // const res = await fetch("/productadd" , {
    //     method:"GET",
    //     headers:{
    //         "Content-Type" : "application/json"
    //     }
    // });
    // const data = await res.json();
    // console.log(res.status)
    // console.log(data)
    const [allCatAndSub,setallCatAndSub] = useState({
        categoryName:"",
        subCategory:"",
        brand:""
    })

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setallCatAndSub({...allCatAndSub , [name]:value});
    }
    let name,value;

    const sentTheData = async(e) => {
        e.preventDefault();
        const {categoryName,subCategory,brand} = allCatAndSub;

        const res = await fetch("/addcategoryorsub" , {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                categoryName,subCategory,brand
            })
        });

        const data = await res.json();
        console.log(res.status);
        if(res.status === 400){
            window.alert(data.messege);
        }else if(res.status === 402){
            window.alert(data.messege);
        }else if(res.status === 401){
            window.alert(data.messege);
        }else if(res.status === 200){
            window.alert(data.messege);
            setallCatAndSub({
                categoryName:"",
                subCategory:"",
                brand:""
            });
        }else if(res.status === 201){
            window.alert(data.messege);
            setallCatAndSub({
                categoryName:"",
                subCategory:"",
                brand:""
            });
        }else{
            window.alert(data.messege)
        }

    }


    return (
        <>
           <div className="AddProductSectionWrapper pt-5">
                <div className="AddProductSection container">
                    <form method="POST">
                        <input name="categoryName" value={allCatAndSub.categoryName} onChange={handleInput} placeholder="Enter Category Name" autoComplete="off" />
                        <input name="subCategory" value={allCatAndSub.subCategory} onChange={handleInput} placeholder="Enter SubCategory" autoComplete="off" />
                        <input name="brand" value={allCatAndSub.brand} onChange={handleInput} placeholder="Enter The Brand Name" autoComplete="off" />
                        <button className="btn btn-info w-100 mt-5" onClick={sentTheData}>Submit</button>
                    </form>
                </div>
                {/* <div className="alert alert-success" role="alert">
                    Data Added SuccessFull
                </div> */}
           </div> 
        </>
    )
}

export default AddCategorySec
