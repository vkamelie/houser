import React from 'react';
import "./SideBar.css";
import {NavLink} from "react-router-dom";

const SideBar = props => {
    let sideClasses ='side-bar'
    if(props.show){
        sideClasses = 'side-bar open'
    }

    return(
    <nav className={sideClasses}>
        <ul>

        <li><NavLink to='/login'>Login!</NavLink></li>
        <li><NavLink to='/signup'>Sign up!</NavLink></li>
        <li><NavLink to='/Resources'>Resourses</NavLink></li>
        <li><NavLink to="/Forum">Forum</NavLink></li>
        <li><NavLink to='/ChatRoom'>Chat Room</NavLink></li>
                    
        </ul>
    </nav>
    )
};

export default SideBar;