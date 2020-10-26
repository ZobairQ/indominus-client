import React, { Component } from "react";
import Header from "./components/header/Header";
import HomePage from "./containers/homepage/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import AttackPage from "./containers/attackpage/AttackPage";
import CityPage from "./containers/buildingpage/CityPage";
import { connect } from "react-redux";
import { getCurrentUser } from "./store/user/users";
import LoginPage from "./containers/loginpage/LoginPage";
import { createStructuredSelector } from "reselect";
import "./sass/main.scss";
interface AppProps {
  currentUser: Function;
}
export class App extends Component<AppProps> {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/attack" component={AttackPage} />
          <Route exact path="/city" component={CityPage} />
          <Route
            exact
            path="/login"
            render={(props) =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <LoginPage {...props} />
              )
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
