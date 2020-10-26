import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

export class Header extends Component {
  render() {
    return (
      <div>
        <ul className="navigation">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/city">City</Link>
          </li>
          <li>
            <Link to="/attack">Attack</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
