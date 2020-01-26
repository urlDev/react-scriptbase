import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Image,
  Container,
  NavDropdown
} from "react-bootstrap";
import "./Nav.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { MovieConsumer } from "../../Context";

class NavTop extends Component {
  render() {
    return (
      <MovieConsumer>
      { value => {
        return (
          <div className="NavTop">
        <Navbar  >
          <Link to="/" className="navbar-brand" onClick={() => {
            value.clearVisible()
            value.getPopular()
            value.refreshPage()
          }}>
            <Image src={require("../../logo.png")}></Image>
          </Link>
          <Container>
          <Search/>
          </Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav"><span>MENU</span><i className="fas fa-film"></i> </Navbar.Toggle> 
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="flex-row d-flex">
              <Link to="/" className="pl-4 pr-5 nav-link">Home</Link>
              <Link to="/signin" className="pl-4 pr-5 nav-link">Sign In</Link>
              {/* <NavDropdown title="Movies" id="basic-nav-dropdown" className="pl-5 pr-5">
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
              </NavDropdown> */}
              {/* <NavDropdown title="TV Shows" id="basic-nav-dropdown" className="pl-5 pr-5">
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
              </NavDropdown> */}
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
        )
      }}
      </MovieConsumer>
      
    );
  }
}

export default NavTop;
