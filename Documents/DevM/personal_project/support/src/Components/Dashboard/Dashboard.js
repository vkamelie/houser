import React, { Component } from 'react';
import Header from "../Header/Header"
import Forum from "../Forum/Forum"
import Reasourses from "../Resources/Resources";
import ChatRoom from "../ChatRoom/ChatRoom";
import "./Dashboard.css";

export default class Dashboard extends Component{
    render(){
        return(
            <div className='Dash'>
                <Header />
                <Reasourses/>
                <Forum />
                <ChatRoom />

       
            
            </div>
        )
    }
}