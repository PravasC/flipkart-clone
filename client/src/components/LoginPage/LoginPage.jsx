import React from 'react'
import { NavLink } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
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
                                    <input type="text" name="email" className="email" autoComplete="off" placeholder="Enter Your Email" />
                                </div>
                                <div className="Login__Enter__Password__Section Login__Enter__ALL">
                                    {/* <span>Enter Your Password</span> */}
                                    <input type="text" name="password" className="password" autoComplete="off" placeholder="Enter Your Password" />
                                </div>
                                <button className="btn btn-success">LOGIN</button>
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
