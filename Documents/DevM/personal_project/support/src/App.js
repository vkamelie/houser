import React, { Component } from 'react';
import routes from "./routes"
import NavBar from "module"
import './App.css';


class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}} >
      <NavBar />
       {routes}
      
      </div>
    );
  }
}

export default App;
