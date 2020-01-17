import React, { Component } from "react";
import { Navbar, Nav, Image, Container, Form, FormControl, Button } from 'react-bootstrap';
import "./Nav.scss";

class NavTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="NavTop">
        <Navbar bg="white" expand="lg" className="mt-3">
          <Navbar.Brand href="#home"><Image src={require("../../logo_transparent.png")}></Image></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavTop;
