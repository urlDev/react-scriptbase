import React from "react";

import Hero from "../hero/Hero";
import MidMenu from "../midMenu/MidMenu";
import MoviesPopular from "../moviesPopular/MoviesPopular.jsx";
import MoviesNow from "../moviesNow/MoviesNow.jsx";
import MoviesComing from "../moviesComing/MoviesComing.jsx";
import MoviesTop from "../moviesTop/MoviesTop";

import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <MidMenu />
      <MoviesPopular />
      <MoviesNow />
      <MoviesComing />
      <MoviesTop />
    </div>
  );
};

export default Home;
