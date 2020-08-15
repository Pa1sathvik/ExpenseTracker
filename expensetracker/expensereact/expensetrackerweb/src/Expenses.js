import React, { Component } from "react";
import AppNav from "./AppNav";

export default class Expenses extends Component {
  render() {
    return (
      <div>
        <AppNav />
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Welcome to Easy expenses app
        </h2>
        Expenses...
      </div>
    );
  }
}
