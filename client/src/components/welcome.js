import logo from '../logo.png';
import './welcome.css';
import React, { Component } from "react";
import { Button } from 'antd'; 
import { LoginOutlined } from '@ant-design/icons';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonSize: "large"
    }
  }

  render() {
    return (
      <div className="welcome">
        <header className="welcome-header">
          <img src={logo} className="welcome-logo" alt="logo" />
          <div className="padding"></div>
          <div>
            <span className="emphasis"> Employee Management System </span>
          </div>
          <div className="padding"></div>
          <Button type="primary" size="large" icon={<LoginOutlined />}
            onClick={this.props.handleLogin}>
            Log in
          </Button>
        </header>
      </div>
    );
  }
}

export default Welcome;