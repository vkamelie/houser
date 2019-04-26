import React, { Component } from 'react';
// import Header from "../Header/Header"
import Forum from "../Forum/Forum"
import Reasourses from "../Resources/Resources";
import ChatRoom from "../ChatRoom/ChatRoom";
// import Login from "../Header/Login"
// import SignUp from "../Header/SignUp"
import Navbar from "../NavBar/Navbar"
import SideBar from "../SideBar/SideBar";
import Backdrop from "../Backdrop/Backdrop"
import "./Dashboard.css";

export default class Dashboard extends Component{
    constructor(){
        super()
    
       this.state = {
        navSideOpen: false
    }
}

    navBarButton = () => {
        this.setState((prevState) => {
            return {navSideOpen: !prevState.navSideOpen}
        })
    }

    backDropHandler = () => {
        this.setState({navSideOpen: false})
    }


    render(){
        
        let backdrop;

        if(this.state.navSideOpen){
            backdrop = <Backdrop close={this.backDropHandler}/>;
        }
        return(
            <div style={{height: '100%'}}>
            
                <Navbar navClick={this.navBarButton}/> 
                <SideBar show={this.state.navSideOpen}/>
                {backdrop}
                
                
                <div style={{marginTop: '125px'}}>
                <p>This stuff on the page!</p>
                 <Reasourses/> 
                <Forum />
                <ChatRoom />
                 
                 </div>
                




             
            </div>
        )
    }
}