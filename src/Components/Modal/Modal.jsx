import React, { Component } from "react";
import { MovieConsumer } from "../../Context";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";

import { Link } from "react-router-dom";
import "./Modal.scss";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MovieConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          //if modal open is false, dont return anything
          if (!modalOpen) {
            return null;
          } else {
            //if there is a modal, then return this
            return (
              <div className="Modal" onClick={closeModal}>
                <Container>
                  {/* <Swiper {...params}> */}
                  {value.moviesResult.map(movie => {
                    const {
                      id,
                      poster_path,
                      title,
                      vote_average
                    } = movie;
                    return (
                      <Link
                        to={`${id}`}
                        key={id}
                        // getting handleClick function from context api and passing id 
                        onClick={() => {
                          value.handleClick(id);
                          value.clearSearch();
                        }}
                       
                      >
                        <Row>
                          <Col className="col-md-2">
                            <img
                              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                              alt=""
                              className="float-left card-img-top ml-3"
                            />
                          </Col>
                          <Col className="p-0 col-md-8">
                            <h1 className="text-left card-text modalTitle">
                              {title}
                            </h1>{" "}
                            <br />
                            {/* <h1 className="release text-left">{release_date
                              ? `${release_date
                                  .split("-")
                                  .reverse()
                                  .join("-")}`
                              : "Release Date Unknown"}</h1> */}
                          </Col>
                          <Col className="col-md-2">
                            <h1 className="average card-text">
                              {vote_average}
                            </h1>{" "}
                          </Col>
                        </Row>
                      </Link>
                    );
                  })}
                  {/* </Swiper> */}
                </Container>
              </div>
            );
          }
        }}
      </MovieConsumer>
    );
  }
}

export default Modal;
