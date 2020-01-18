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
import "./Nav.scss";

class NavTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="NavTop">
        <Navbar bg="white" expand="false" >
          <Navbar.Brand href="#home">
            <Image src={require("../../logo_transparent.png")}></Image>
          </Navbar.Brand>
          <Form inline className="">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="danger"><i className="fa fa-search" aria-hidden="true"></i></Button>
            </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav"><span>MENU</span><i className="fas fa-bars"/> </Navbar.Toggle> 
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="flex-row d-flex">
              <Nav.Link href="#home" className="pl-4 pr-5">Home</Nav.Link>
              <NavDropdown title="Movies" id="basic-nav-dropdown" className="pl-5 pr-5">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="TV Shows" id="basic-nav-dropdown" className="pl-5 pr-5">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Celebrities" id="basic-nav-dropdown" className="pl-5 pr-5">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavTop;
