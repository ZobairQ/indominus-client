import React, { Component } from "react";
import Header from "./components/header/Header";
import HomePage from "./containers/homepage/HomePage";
import { Switch, Route } from "react-router-dom";
import AttackPage from "./containers/attackpage/AttackPage";
import CityPage from "./containers/buildingpage/CityPage";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
export class App extends Component {
  render() {
    const link = createHttpLink({
      uri: "http://localhost:4000/graphql",
      credentials: "same-origin",
    });
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: "5f59411e524f4f002cef38b7",
        },
      };
    });
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink.concat(link),
    });
    return (
      <div>
        <Header />
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/attack" component={AttackPage} />
            <Route exact path="/city" component={CityPage} />
          </Switch>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
