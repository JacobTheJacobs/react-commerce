import React, { Component } from "react";
import "./home.scss";
import Directory from "./directory/directory";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default Home;
