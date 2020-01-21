import React, { Component } from "react";

import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Footer">
        <h1>ScriptBase</h1>
        <img src={require("../../stormtrooper.png")} alt="" />
      </div>
    );
  }
}

export default Footer;
