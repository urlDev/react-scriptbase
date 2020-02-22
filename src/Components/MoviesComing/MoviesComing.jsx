import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MovieConsumer } from "../../Context";
import LoadMore from "../LoadMore/LoadMore"

import { Link } from "react-router-dom";

class MoviesComing extends Component {
  render() {
    return (
      <Container className="homePageMovies mt-3">
        <Row>
          <Col>
            <MovieConsumer>
              {value => {
                return (
                  <div>
                    <div>
                      {value.coming.slice(0, value.visible).map(i => {
                        return (
                          <div className="card text-white fade-in" key={i.id}>
                            <Link
                              to={`${i.id}`}
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
                            </Link>

                            <div className="">
                              <h6 className="card-title voteAverage">
                                {i.vote_average}
                              </h6>
                            </div>
                            <div className="">
                              <h6
                                className="card-title hearts"
                                onClick={() => value.addFavorite(i.poster_path)}
                              >
                                {value.currentUser ? (
                                  value.favorite.includes(i.poster_path) ? (
                                    <i
                                      className="fa fa-heart"
                                      aria-hidden="true"
                                      style={{ color: "red" }}
                                    ></i>
                                  ) : (
                                    <i
                                      className="fa fa-heart"
                                      aria-hidden="true"
                                    ></i>
                                  )
                                ) : (
                                  <Link
                                    to="/signin"
                                    style={{ color: "#FDFFFC" }}
                                  >
                                    <i
                                      className="fa fa-heart"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                )}
                              </h6>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <LoadMore/>
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

export default MoviesComing;
