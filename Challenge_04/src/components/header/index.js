import React, { Component } from "react";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <p>facebook</p>
        </div>
        <div className="header-link-profile">
          <a href="">
            <p>Meu perfil</p>
            <i className="fas fa-user-circle" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
