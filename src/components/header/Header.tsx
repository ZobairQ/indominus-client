import React, { Component } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import './header.styles.scss';
export class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h5">
            <Link to="/home"><div className="headerName">Home</div></Link>
          </Typography>
          <Typography variant="h5">
            <Link to="/city"><div className="headerName">City</div></Link>
          </Typography>
          <Typography variant="h5">
            <Link to="/attack"><div className="headerName">Attack</div></Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
