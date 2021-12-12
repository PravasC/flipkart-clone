import React, { useState } from 'react';
import './Navbar.css';
import MainLogo from '../../images/flipkart-logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [mousehover, setmousehover] = useState(false);

    return (
       <>
            <nav>
                <div className="Navbar__wrapper">
                    <div className="Navbar container-f">
                        <div className="Navbar__Branding">
                            <NavLink activeClassName="ActiveNavClass" exact to="/">
                                <img src={MainLogo} alt="Flipcart Logo" />
                            </NavLink>
                        </div>
                        <div className="Navbar__Search__Bar">
                            <div className="Navbar__SearchBar__Input">
                                <input type="text" placeholder="Search For Product , Brand or Mores"/>
                            </div>
                            <div className="Navbar__SearchBar__Icon">
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                        <div className="Navbar__RightSideItems">
                            <div className="Navbar__Login__Button__Hover">
                            
                                {/* <NavLink activeClassName="ActiveNavClass" exact to="/login"> */}
                                <button className="FirstItem RightSideItems" onClick={()=>setmousehover(!mousehover)}> Login</button>
                                {/* </NavLink> */}
                                <ul className={mousehover?"Hover__section  Hover__section__Active":"Hover__section"}>
                                <div className="triangle-up"></div>
                                    <li><NavLink exact to="/login" className="Links" onClick={()=>setmousehover(!mousehover)}>Log In Now</NavLink></li>
                                    <li><NavLink exact to="/signup" className="Links" onClick={()=>setmousehover(!mousehover)}> New Cutomer ? Sign Up</NavLink></li>
                                    <li>My Profile</li>
                                </ul>
                            </div>
                            <button className="MiddleItem RightSideItems">More <i className="fas fa-chevron-down"></i></button>
                            <NavLink activeClassName="ActiveNavClass" exact to="/viewcart">
                                <button className="LastItem RightSideItems">Cart <i className="fas fa-shopping-cart"></i></button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
       </>
    )
}

export default Navbar
