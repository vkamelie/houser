import React, {Component} from "react";
import axios from "axios";

import { connect } from "react-redux";
import { setUser } from "../../redux/reducer";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            username: "",
            password: "",
         
        }
        this.login = this.login.bind(this);
    }


login(){
    const loginPayload = {
        username: this.state.username,
        password: this.state.password
    };
    axios
    .post("/api/login", loginPayload)
    .then(res => {
        this.props.setUser(res.data);
        console.log('user signed in' )
    })
    .catch(error => console.log(error))
}   





logout = () => {
    axios.get("/api/logout").then(() => {
        this.props.setUser(null);
    })
}






render(){
    
    
    return(
        <div className='main-form'>
        <body>
            
            <div className="formz">
            
            
            <form>
                <input type='text' placeholder='username'
                onChange = {(e) => this.setState({username: e.target.value})}
                />

                <input type="text" placeholder='password'
                onChange = {e => this.setState({password: e.target.value})}
                />
                <button type='button' onClick= {() => this.login()
                }> 
                Login!
                </button>
            </form>
            </div>
            </body>
        </div> 

    )
}



}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.user
    };
};

const mapDispatchToProps = {
    setUser: setUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);