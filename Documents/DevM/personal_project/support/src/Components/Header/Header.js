import React, {Component} from "react";
import "./Header.css"
import {NavLink} from "react-router-dom"
import Login from "./Login";


export default class Header extends Component {
    render(){
        return(
            <div className='header'>
                    
                    <div>Transplant Support</div>
                    <NavLink to="/Forum">Forum</NavLink>
                    <NavLink to='/Resources'>Resourses</NavLink>
                    <NavLink to='/ChatRoom'>Chat Room</NavLink>
                    <NavLink to='/signup'>Sign up!</NavLink><NavLink/>
                    <Login />
                  
            </div>
        )
    }
}