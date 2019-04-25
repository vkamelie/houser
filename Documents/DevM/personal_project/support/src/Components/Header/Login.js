import React, {Component} from "react";
import axios from "axios";
import { NavLink} from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../../redux/reducer";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            username: "",
            password: "",
            name: "",
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
    })
    .catch(error => console.log(error))
}   

register = () => {
    const loginPayload = {
        username: this.state.username,
        password: this.state.password,
        name: this.state.name
    };
    axios
    .post('/api/user_register', loginPayload)
    .then(res => {
        this.props.setUser(res.data);
    
    })
}

changeHandler = (name, value) => {
    this.setState({
        [name]:value
    })
}

logout = () => {
    axios.get("/api/logout").then(() => {
        this.props.setUser(null);
    })
}




render(){
    const {username, password, name} = this.state;
    const {user} = this.props;
    console.log(username, password, name)
    return(
        <div>
             <div>
          <div>logo</div>
          <nav>
            <ul>
              {/* <li>
                <NavLink exact to="/" activeStyle={{ color: "red" }}>
                  Home
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink to="/admin" activeStyle={{ color: "red" }}>
                  Admin
                </NavLink>
              </li> */}
              {!user ? (
                <li>
                  <input
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  <input
                    placeholder="name"
                    type="full_name"
                    name="full_name"
                    value={name}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  <button onClick={this.register}>Register</button>
                  <button onClick={this.login}>Login</button>
                </li>
              ) : (
                <button onClick={this.logout}>Logout</button>
              )}
              {JSON.stringify(this.state.user)}
            </ul>
          </nav>
        </div>
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