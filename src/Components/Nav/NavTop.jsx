import React, { Component } from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import "./Nav.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { MovieConsumer } from "../../Context";
import { auth } from "../Firebase/firebase.utils.js";

class NavTop extends Component {
  render() {
    return (
      <MovieConsumer>
        {value => {
          return (
            <div className="NavTop">
              <Navbar expand="lg">
                <Link
                  to="/"
                  className="navbar-brand"
                  onClick={() => {
                    value.clearVisible();
                    value.getPopular();
                    value.refreshPage();
                    value.clearSearch();
                  }}
                >
                  <Image src={require("../../logo.png")} alt="ScriptBase brand logo" ></Image>
                </Link>

                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="mb-2"
                >
                  {/* <span>MENU</span> */}
                  <i className="fas fa-film"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="">
                  <Container>
                    <Search />
                  </Container>
                  <Nav className="flex-row d-flex">
                    <Link
                      to="/"
                      className="pl-4 pr-5 nav-link"
                      onClick={() => {
                        value.clearVisible();
                        value.getPopular();
                        value.refreshPage();
                      }}
                    >
                      Home
                    </Link>
                    <Link to="/signin" className="pl-4 pr-5 nav-link">
                      {/* if currentUser has a user, it will return true. If its null(initial state) it will return false(null is falsy value) */}
                      {value.currentUser ? (
                        <div className="userSign">
                          <div
                            onClick={() => auth.signOut()}
                            className="signOut"
                          >
                            Sign Out
                          </div>
                          <div>
                            <Link to="/user">
                              <i className="fas fa-user-astronaut"></i>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="userSign">Sign in</div>
                      )}
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          );
        }}
      </MovieConsumer>
    );
  }
}

export default NavTop;
