import React, { Component } from "react";

import { MovieConsumer } from "../../Context";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";

import "./Hero.scss";
import "swiper/swiper.scss";

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  rebuildOnUpdate: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev"
  // }
};

class Hero extends Component {
  render() {
    return (
      <div className=" Hero">
        <MovieConsumer>
          {value => {
            return (
              <Swiper {...params}>
                {value.trending.map(movie => {
                  return (  
                    <Link
                      to={`${movie.id}`}
                      key={movie.id}
                      onClick={() => {value.handleClick(movie.id); value.refreshPage();}}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={movie.title}
                        // style={{ height: "80vh", width:"100%" }}
                      />
                      <h1 className="carousel-caption">{movie.title}</h1>
                    </Link>
                  );
                })}
              </Swiper>
            );
          }}
        </MovieConsumer>
      </div>
    );
  }
}

export default Hero;

