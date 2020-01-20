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
  Row,
  Col
} from "react-bootstrap";
import { MovieConsumer } from "../../Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                    <div className="card text-white" key={i.id}>
                      <img src={`https://image.tmdb.org/t/p/original/${i.poster_path}`} className="card-img" alt={i.title} />
                      <div className="card-img-overlay">
                        <h6 className="card-title">{i.vote_average}</h6>
                      </div>
                    </div>
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