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
import { Link } from "react-router-dom";

class NavTop extends Component {
  render() {
    return (
      <div className="NavTop">
        <Navbar expand="false" >
          <Link to="/" className="navbar-brand">
            <Image src={require("../../logo.png")}></Image>
          </Link>
          <Container>
          <Form inline className="">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="danger"><i className="fa fa-search" aria-hidden="true"></i></Button>
            </Form>
          </Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav"><span>MENU</span><i className="fas fa-film"></i> </Navbar.Toggle> 
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="flex-row d-flex">
              <Link to="/" className="pl-4 pr-5 nav-link">Home</Link>
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
      </div>
    );
  }
}

export default NavTop;
