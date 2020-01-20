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
import { Link } from "react-router-dom";
import "./MidMenu.scss";
import { MovieConsumer } from "../../Context";

class MidMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="MidMenu">
        <MovieConsumer>
          {value => {
            return (
              <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                  <Link to="/" className="mr-5 nav-link " onClick={value.getPopular}>
                    POPULAR
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/" className="ml-5 mr-5 nav-link" onClick={value.getNow}>
                    NOW PLAYING
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/" className="ml-5 mr-5 nav-link" onClick={value.getComing}>
                    COMING SOON
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/" className="ml-5 nav-link" onClick={value.getTop}>
                    TOP RATED
                  </Link>
                </Nav.Item>
              </Nav>
            );
          }}
        </MovieConsumer>
      </Container>
    );
  }
}

export default MidMenu;
