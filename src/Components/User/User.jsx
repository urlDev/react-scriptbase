import React, { Component } from "react";
import { MovieConsumer } from "../../Context";
import { Navbar, Nav, Image, Container, Row, Col } from "react-bootstrap";

import "./User.scss";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MovieConsumer>
        {value => {
          return (
            <Container className="User">
              {value.currentUser ? (
                <div>
                  <Row className="firstRow">
                    <h1 className="userTitle">Welcome, {value.currentUser.displayName}!</h1>
                    <p className="userText" >your favorite movies: </p>
                    <hr className="mr-5" style={{ width:"calc(100% - 3rem)"}}/>
                  </Row>
                  <Row>
                  {/* <h1 className="userText" >your favorite movies: </h1> */}
                  
                    {value.favorite.length > 0 ? (
                      value.favorite.map(movie => {
                        return (
                          <Col
                            key={movie}
                            className="col-xs-6 col-lg-4 col-xl-3 mb-5 pl-0 pr-5 mt-3"
                          >
                          
                            <img
                              src={`https://image.tmdb.org/t/p/original/${movie}`}
                              className="card-img"
                              alt={movie}
                              // style={{ width:"20em"}}
                            />
                            <div className="">
                              <h6
                                className="card-title hearts"
                                onClick={() => value.addFavorite(movie)}
                              >
                                {value.favorite.includes(movie) ? (
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
                                )}
                              </h6>
                            </div>
                            {/* <h1>{movie}</h1> */}
                          </Col>
                        );
                      })
                    ) : (
                      <h1 className="userText">no movies added to favorites</h1>
                    )}
                  </Row>
                </div>
              ) : (
                <h1>You need to sign in to view data</h1>
              )}
            </Container>
          );
        }}
      </MovieConsumer>
    );
  }
}

export default User;

// {value.favorite.map(movie =>  {
//                     return (
//                         <Col key={movie}>
{
  /* <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                className="card-img"
                                alt={movie.title}
                                style={{ width:"20em"}}
                              /> */
}
//                         <h1 key={movie} onClick={() => value.handleClick(movie)}>
//                         {value.details ? value.details.title : "movie has not been searched"}
//                         </h1>
//                         </Col>
//                     )
//                 })}
