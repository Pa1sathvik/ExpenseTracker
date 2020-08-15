import React, { Component } from "react";
import AppNav from "./AppNav";

export default class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppNav />
        <h2 style={{display:"flex",alignContent:'center',textAlign:"center"}}>Welcome to Easy expenses App!!</h2>
      </div>
    );
  }
}
