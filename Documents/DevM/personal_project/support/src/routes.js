import React from "react"
import {Switch, Route} from 'react-router-dom';
import Forum from "./Components/Forum/Forum"
import Dash from "./Components/Dashboard/Dashboard"
import Res from "./Components/Resources/Resources"
import Chat from "./Components/ChatRoom/ChatRoom"
import SignUp from "./Components/Header/SignUp";
import Login from "./Components/Header/Login"


export default(
    <Switch>
        <div>
        <Route exact path="/"  component={Dash}/>

        <Route path="/Forum" component={Forum}/>

        <Route path='/Resources' component={Res}/>

        <Route path='/ChatRoom' component={Chat}/>
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        </div>
    
    </Switch>
)