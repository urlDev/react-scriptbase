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
                  <Link to="/popular" className="mr-5 nav-link " >
                    POPULAR
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/now" className="ml-5 mr-5 nav-link">
                    NOW PLAYING
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/coming" className="ml-5 mr-5 nav-link">
                    COMING SOON
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/top" className="ml-5 nav-link">
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
