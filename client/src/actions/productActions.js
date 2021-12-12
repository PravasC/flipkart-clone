import { PRODUCT_LIST_REQUEST , PRODUCT_LIST_SUCCESS , PRODUCT_LIST_FAILS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILS } from "../constants/productConst";

export const listProduct = () => async(dispatch) => {
    try{

        dispatch({type:PRODUCT_LIST_REQUEST})

        const res = await fetch("/products",{
            method:"GET",
            headers:{
                Accept : "application/json",
                "Content-type":"application/json"
            }
        });

        const data = await res.json();

        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:data
        })

    }catch(err){
        dispatch({
            type:PRODUCT_LIST_FAILS,
            payload:err
        })
    }
}

export const detailsProduct = (id) => async(dispatch) => {
    try{

        const paramId = id;

        dispatch({type:PRODUCT_DETAILS_REQUEST})
        const res = await fetch("/productid",{
            method:"POST",
            headers:{
                Accept : "application/json",
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                paramId
            })
        });
        const data = await res.json();
        
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data
        })

    }catch(err)
    {
        dispatch({
            type:PRODUCT_LIST_FAILS,
            payload:err
        })
    }
}