import React, { Component } from "react";
import { Nav, Container } from "react-bootstrap";
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
                  <Link
                    to="/"
                    className={
                      value.popular.length > 0
                        ? "mr-5 nav-link clicked"
                        : "mr-5 nav-link"
                    }
                    onClick={() => {
                      value.getPopular();
                      value.clearVisible();
                      // value.popularSelected();
                    }}
                  >
                    POPULAR
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    to="/"
                    className={
                      value.now.length > 0
                        ? "ml-5 mr-5 nav-link clicked"
                        : "ml-5 mr-5 nav-link"
                    }
                    onClick={() => {
                      value.getNow();
                      value.clearVisible();
                      // value.nowSelected();
                    }}
                  >
                    NOW PLAYING
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    to="/"
                    className={
                      value.coming.length > 0
                        ? "ml-5 mr-5 nav-link clicked"
                        : "ml-5 mr-5 nav-link"
                    }
                    onClick={() => {
                      value.getComing();
                      value.clearVisible();
                      // value.comingSelected();
                    }}
                  >
                    COMING SOON
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    to="/"
                    className={
                      value.top.length > 0
                        ? "ml-5 nav-link clicked"
                        : "ml-5  nav-link"
                    }
                    onClick={() => {
                      value.getTop();
                      value.clearVisible();
                      // value.topSelected();
                    }}
                  >
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
