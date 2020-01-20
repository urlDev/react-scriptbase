import React, { Component } from "react";
import Hero from "../Hero/Hero";
import MidMenu from "../MidMenu/MidMenu";
import MoviesPopular from "../MoviesPopular/MoviesPopular.jsx";
import MoviesNow from "../MoviesNow/MoviesNow.jsx";
import MoviesComing from "../MoviesComing/MoviesComing.jsx";
import MoviesTop from "../MoviesTop/MoviesTop";

import { Switch, Route } from "react-router-dom";

import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <MidMenu />

        <MoviesPopular />
        <MoviesNow />
        <MoviesComing />
        <MoviesTop />
      </div>
    );
  }
}

export default Home;
