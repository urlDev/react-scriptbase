import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Image,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown
} from "react-bootstrap";

import "./MidMenu.scss";

class MidMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="MidMenu">
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">POPULAR</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">NOW PLAYING</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">COMING SOON</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">TOP RATED</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    );
  }
}

export default MidMenu;
