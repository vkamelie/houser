import React from 'react';
import {NavLink} from "react-router-dom"
import "./NavBar.css"
import SideBarButton from "../SideBar/SideBarButton"
import Login from "../Header/Login"
 



const NavBar = props => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div className="navbar-button">
                <SideBarButton click={props.navClick}/>
            </div>
            <div className='toolbar-logo'><a href="/">Transplant Support</a></div>
            <div className="space-box"/>
            <div className="toolbar-nav-items">
                <ul>
                    <li><NavLink to="/Forum">Forum</NavLink></li>
                    <li><NavLink to='/Resources'>Resourses</NavLink></li>
                    <li><NavLink to='/ChatRoom'>Chat Room</NavLink></li>
                    <li><NavLink to='/signup'>Sign up!</NavLink></li>
                    {/* <li><NavLink to='/login'>Login!</NavLink></li> */}
                    <Login />
                </ul>
                 
            </div>

        </nav>
    </header>
);

export default NavBar;