import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieConsumer } from "../../Context";
import firstFooter from "../../Assets/Footer1.png";
import secondFooter from "../../Assets/Footer2.png";

import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MovieConsumer>
        {value => {
          return (
            <div
              className="Footer"
              style={
                value.pageRefreshed
                  ? { backgroundImage: `url(${firstFooter})` , backgroundRepeat: "no-repeat", backgroundSize:"cover"}
                  : { backgroundImage: `url(${secondFooter})`, backgroundRepeat: "no-repeat", backgroundSize:"cover" } 
              }
            >
              <Container>
                <Row>
                  <Col className="mt-5 p-0">
                    <Link to="/">
                      <img
                        src={require("../../logo_transparent.png")}
                        className="float-left mr-3"
                        alt=""
                        onClick={() => {
                          value.clearVisible();
                          value.getPopular();
                          value.refreshPage();
                        }}
                      />
                    </Link>

                    {/* <h1>ScriptBase</h1> */}
                  </Col>
                  <Col>
                    {value.pageRefreshed ? (
                      <h1 className="footerText">
                        <em>
                          "We all need memories to remind ourselves who we are"
                        </em>
                      </h1>
                    ) : (
                      <h1 className="footerText">
                        <em>
                          "Hope is a good thing, maybe the best of the good
                          things and no good thing ever dies"
                        </em>
                      </h1>
                    )}
                  </Col>
                </Row>
              </Container>
            </div>
          );
        }}
      </MovieConsumer>
    );
  }
}

export default Footer;
