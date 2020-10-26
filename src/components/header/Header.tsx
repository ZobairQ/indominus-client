import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/home" className="navigation__link">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/city" className="navigation__link">City</Link>
          </li>
          <li className="navigation__item">
            <Link to="/attack" className="navigation__link">Attack</Link>
          </li>
          <li className="navigation__item">
            <Link to="/login" className="navigation__link">Login</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
