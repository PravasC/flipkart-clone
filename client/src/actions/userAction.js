import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILD,USER_LOGOUT,USER_VERIFY_REQUEST,USER_VERIFY_SUCCESS,USER_VERIFY_FAILD } from "../constants/userConst";

export const login = (email,password) => async dispatch => {
    try{
        dispatch({type:USER_LOGIN_REQUEST});
        
            const res = await fetch("/signin" , {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email,password
                })
            });
            const data = await res.json();

            // localStorage.setItem("userInfo",data);
            dispatch({type:USER_LOGIN_SUCCESS,payload:data})
        
    }catch(err){
        dispatch({type:USER_LOGIN_FAILD,payload:err})
    }
}

export const signinverify = () => async dispatch => {
    try{
        dispatch({type:USER_VERIFY_REQUEST});
        
            const res = await fetch("/signin" , {
                method:"GET",
                headers:{
                    "Content-Type" : "application/json"
                }
            });
            const data = await res.json();
            console.log(data);

            // localStorage.setItem("userInfo",data);
            dispatch({type:USER_VERIFY_SUCCESS,payload:data})
        
    }catch(err){
        dispatch({type:USER_VERIFY_FAILD,payload:err})
    }
}