import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Image,
  Container,
  Form,
  FormControl,
  Button,
  Carousel,
  Col,
  Row
} from "react-bootstrap";
import { MovieConsumer } from "../../Context";

import "./MovieDetails.scss";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MovieConsumer>
        {value => {
          const {
            poster_path,
            overview,
            title,
            vote_average,
            vote_count,
            release_date,
            revenue,
            runtime
          } = value.details;
          // let newStr = release_date;
          return (
            <Container className="mt-5 Details p-0">
              <Row>
                <Col className="firstCol ml-2">
                  <img
                    width="300px"
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    alt=""
                    className="float-left"
                  />
                </Col>
                <Col>
                  <Row>
                    {/* <span>({release_date})</span> */}
                    <h1>{title} </h1>
                  </Row>
                  <Row>
                    <p className="mt-5 mb-5">{overview}</p>
                    <Col className="mb-2">
                      <h2>Average Note: </h2>
                    </Col>
                    <Col className="mb-2">
                      <h2>Vote Count: </h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h1>{vote_average}</h1>
                    </Col>
                    <Col>
                      <h3>{vote_count}</h3>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
              <Row className="mt-5">
                <Col className="p-0 text-left ml-3">
                  <p>
                    <span className="leftTitle">Genre:</span>{" "}
                    {value.genres.map(genre => genre.name).join(",    ")}{" "}
                  </p>
                  <p>
                    <span className="leftTitle">Release Date: </span>{" "}
                    {release_date}{" "}
                  </p>
                  <p>
                    <span className="leftTitle">Revenue: </span> {revenue}${" "}
                  </p>
                  <p>
                    <span className="leftTitle">Revenue: </span> {runtime}{" "}
                    minutes{" "}
                  </p>
                </Col>
                <Col></Col>
              </Row>
              <Row className="mt-5">
                <h1 className="ml-3 castTitle">Cast</h1>

                {value.cast.slice(0, 10).map(i => {
                  return (
                    <img
                      src={`https://image.tmdb.org/t/p/original/${i.profile_path}`}
                      className="castImg"
                      alt=""
                    />
                  );
                })}
              </Row>
            </Container>
          );
        }}
      </MovieConsumer>
    );
  }
}

export default MovieDetails;
