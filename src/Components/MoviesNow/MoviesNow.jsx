import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MovieConsumer } from "../../Context";

import { Link } from "react-router-dom";

import "./MoviesNow.scss";

class MoviesNow extends Component {
  render() {
    return (
      <Container className="MoviesNow mt-3">
        <Row>
          <Col>
            <MovieConsumer>
              {value => {
                return value.now.slice(0, 10).map(i => {
                  return (
                    <Link
                      to={`${i.id}`}
                      className="card text-white"
                      key={i.id}
                      onClick={() => value.handleClick(i.id)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${i.poster_path}`}
                        className="card-img"
                        alt={i.title}
                      />
                      <div className="card-img-overlay">
                        <h6 className="card-title">{i.vote_average}</h6>
                      </div>
                    </Link>
                  );
                });
              }}
            </MovieConsumer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MoviesNow;
