import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILD,USER_LOGOUT, USER_VERIFY_REQUEST, USER_VERIFY_SUCCESS, USER_VERIFY_FAILD } from "../constants/userConst";

export const UserLoginReducer = (state = {userInfo:[]},action) => {
    switch(action.type){
                case USER_LOGIN_REQUEST:
                    return {loading:true,userInfo:[]};
                case USER_LOGIN_SUCCESS:
                    return {loading:false,userInfo:action.payload};
                case USER_LOGIN_FAILD:
                    return {loading:false,error:action.payload};
                case USER_LOGOUT:
                    return {};
                default:
                    return state;
            }
}

export const UserVerifyReducer = (state = {userVerify:[]},action) => {
    switch(action.type){
        case USER_VERIFY_REQUEST:
            return {loading:true,userVerify:[]};
        case USER_VERIFY_SUCCESS:
            return {loading:false,userVerify:action.payload};
        case USER_VERIFY_FAILD:
            return {};
        default:
            return state;
    }
}