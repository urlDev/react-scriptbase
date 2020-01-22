import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Image,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Row,
  Col
} from "react-bootstrap";

import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Footer">
        <Container>
          <Row>
            <Col className="mt-5 p-0">
            <img src={require("../../logo_transparent.png")} className="float-left mr-3" alt=""/>
            {/* <h1>ScriptBase</h1> */}
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
