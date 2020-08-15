import React, { Component } from "react";
import Category from "./Category";
import Home from "./Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Expenses from './Expenses'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/categories" exact={true} component={Category} />
          <Route path="/expenses" exact={true} component={Expenses} />
        </Switch>
      </Router>
    );
  }
}