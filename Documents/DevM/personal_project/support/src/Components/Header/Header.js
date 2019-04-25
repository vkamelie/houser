import React, {Component} from "react";
import "./Header.css"
import {NavLink} from "react-router-dom"
import Login from "./Login";

export default class Header extends Component {
    render(){
        return(
            <div className='header'>
                    Header/Nav
                    <ul>
                    <li><NavLink to="/Forum">Forum</NavLink></li>
                 
                    <li><NavLink to='/Resources'>Resourses</NavLink></li>
                    <li><NavLink to='/ChatRoom'>Chat Room</NavLink></li>
                    </ul>
                    <Login />
            </div>
        )
    }
}