import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Image,
  Container,
  Form,
  FormControl,
  Button,
  Carousel
} from "react-bootstrap";
import { MovieConsumer } from "../../Context";

import "./Hero.scss";

class Hero extends Component {
  render() {
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel slide Hero"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <MovieConsumer>
            {value => {
              return value.trending.slice(0, 3).map(i => {
              return (
                <Carousel.Item key={i.id}>
                  <img
                    className="d-block w-100"
                    src={`https://image.tmdb.org/t/p/original/${i.backdrop_path}`}
                    alt={i.title}
                  />
                  <Carousel.Caption>
                    <h3>{i.title}</h3>
                    
                  </Carousel.Caption>
                </Carousel.Item>
              );
            });
            }}
          </MovieConsumer>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Hero;
{
  /* <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */
}

{
  /* <Carousel className="Hero">
        <MovieConsumer>
          {value => {
            return value.trending.slice(0, 3).map(i => {
              return (
                <Carousel.Item key={i.id}>
                  <img
                    className="d-block w-100"
                    src={`https://image.tmdb.org/t/p/original/${i.backdrop_path}`}
                    alt={i.title}
                  />
                  <Carousel.Caption>
                    <h3>{i.title}</h3>
                    
                  </Carousel.Caption>
                </Carousel.Item>
              );
            });
          }}
        </MovieConsumer>
      </Carousel> */
}

{
  /* 

const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

<Slider {...settings}>
        <MovieConsumer>
          {value => {
            return value.trending.slice(0, 3).map(item => (
              <div>
                <div item={item} >
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt=""
                  />
                </div>
              </div>
            ));
          }}
        </MovieConsumer>
      </Slider> */
}
