import { PRODUCT_LIST_REQUEST , PRODUCT_LIST_SUCCESS , PRODUCT_LIST_FAILS , PRODUCT_DETAILS_REQUEST , PRODUCT_DETAILS_SUCCESS , PRODUCT_DETAILS_FAILS} from "../constants/productConst"

export const ProductListReducer = (state = {product:[]},action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loding:true , product:[]}
        case PRODUCT_LIST_SUCCESS:
            return {loding:false,product:action.payload}
        case PRODUCT_LIST_FAILS:
            return {loding:false,error:action.payload}
        default:
            return state;
    }
}

export const ProductDetailReducer = (state = {product:[]} , action ) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loding:true , product:[]}
        case PRODUCT_DETAILS_SUCCESS:
            return {loding:false,product:action.payload}
        case PRODUCT_LIST_FAILS:
            return {loding:false,error:action.payload}
        default:
            return state;
    }
}