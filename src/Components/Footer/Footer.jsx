import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieConsumer } from "../../Context";

import "./Footer.scss";

const Footer = () => {
  return (
    <MovieConsumer>
      {value => {
        return (
          <div
            className="Footer"
          >
            <Container>
              <Row>
                <Col className="mt-5 p-0 col-xs-12 col-md-6">
                  <Link to="/">
                    <img
                      src={require("../../logo_transparent.png")}
                      className="float-left mr-3 footerBrand"
                      alt=""
                      onClick={() => {
                        value.clearVisible();
                        value.getPopular();
                        value.refreshPage();
                      }}
                    />
                  </Link>
                </Col>
                <Col className="pr-0 d-none d-lg-block">
                  <img
                    src={
                      value.pageRefreshed
                        ? require("../../Assets/morganFreeman.png")
                        : require("../../Assets/guyPearce.png")
                    }
                    alt=""
                    className={
                      value.pageRefreshed ? "morganFreeman" : "guyPearce"
                    }
                  />
                  {value.pageRefreshed ? (
                    <h1 className="footerText">
                      <em>
                        "Hope is a good thing, maybe the best of the good things
                        and no good thing ever dies"
                      </em>
                    </h1>
                  ) : (
                    <h1 className="footerText">
                      <em>
                        "We all need memories to remind ourselves who we are"
                      </em>
                    </h1>
                  )}
                </Col>
                <Col className=" pl-5 d-block d-lg-none">
                  <a href="https://www.themoviedb.org/">
                    <img
                      src={require("../../Assets/tmdb.svg")}
                      style={{ width: "8em", marginTop: "4.5em" }}
                      className="float-right"
                      alt=""
                    />
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        );
      }}
    </MovieConsumer>
  );
};

export default React.memo(Footer);
