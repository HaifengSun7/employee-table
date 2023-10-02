import './App.css';
import React, { Component } from "react";
import Welcome from './components/welcome';
import Employees from './components/employees';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    // event handlers
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({isLoggedIn: true});
  }

  handleLogout() {
    this.setState({isLoggedIn: false});
  }

  render() {
    return (
      <div>
        {
          this.state.isLoggedIn ? (
            <Employees handleLogout={this.handleLogout}/>
          ) : (
            <Welcome handleLogin={this.handleLogin}/>
          )
        }
      </div>
    );
  }
}

export default App;
