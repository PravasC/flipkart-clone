import React from 'react'
import { useState,useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { login } from '../../actions/userAction';
import './LoginPage.css';

function LoginPage() {
    const history = useHistory();
    const [userData, setuserData] = useState({
        email:"",
        password:""
    });
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const {loading,error,userInfo} = userLogin;

    const handleInput = (e) =>{
        let {name,value} = e.target;

        setuserData({...userData,[name]:value})
    }

    const loginFuction = async(e) =>{
        e.preventDefault();

        const {email,password} = userData;

        dispatch(login(email,password));

        if(userInfo)
        {
            history.push("/");
        }

        // const res = await fetch("/signin" , {
        //     method:"POST",
        //     headers:{
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify({
        //         email,password
        //     })
        // });

        // const data = res.json();
        // if(res.status === 200){
        //     history.push("/");
        // }else{
        //     console.log("Do Nothing");
        // }
    }

    // useEffect(() => {
    //     if(userInfo)
    //     {
    //         history.push("/");
    //     }
    // }, [1])

    return (
        <>
            <div className="Login__Page__Wrapper">
                <div className="Login__Page">
                    <div className="Login__Left__Side">
                        <h3>Login</h3>
                        <h6>Get access to your Orders, Wishlist and Recommendations</h6>
                    </div>
                    <div className="Login__Right__Side">
                        <div className="Login__Right__Side__ALL">
                            <form method="POST">
                                <div className="Login__Enter__Email__Section Login__Enter__ALL">
                                    {/* <span>Enter Your Email</span> */}
                                    <input type="text" name="email" className="email" autoComplete="off" placeholder="Enter Your Email" onChange={handleInput} name="email" value={userData.email}/>
                                </div>
                                <div className="Login__Enter__Password__Section Login__Enter__ALL">
                                    {/* <span>Enter Your Password</span> */}
                                    <input type="text" name="password" className="password" autoComplete="off" placeholder="Enter Your Password" onChange={handleInput} name="password" value={userData.password}/>
                                </div>
                                <button className="btn btn-success" onClick={loginFuction}>LOGIN</button>
                            </form>
                            <p>OR</p>
                            <button className="btn btn-info">OTP Request</button><br /><br />
                            <NavLink exact to="/signup">
                                <p>New To FlipKart? Create an Account</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
