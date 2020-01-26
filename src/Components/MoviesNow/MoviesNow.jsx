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
                return (
                  <div>
                    <div>
                      {value.now.slice(0, value.visible).map(i => {
                        return (
                          <Link
                            to={`${i.id}`}
                            className="card text-white fade-in"
                            key={i.id}
                            onClick={() => {
                              value.handleClick(i.id);
                              value.refreshPage();
                            }}
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
                      })}
                    </div>
                    <div>
                      {/* if value visible is smaller than popular.length then add button */}
                      {value.visible < value.now.length && (
                        <button
                          onClick={value.loadMore}
                          type="button"
                          className="load-more"
                        >
                          Load more
                        </button>
                      )}
                    </div>
                  </div>
                );
              }}
            </MovieConsumer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MoviesNow;
