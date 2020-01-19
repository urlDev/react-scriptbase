import React from "react";
import NavTop from "./Components/Nav/NavTop.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import MidMenu from "./Components/MidMenu/MidMenu.jsx";
import MoviesPopular from "./Components/MoviesPopular/MoviesPopular.jsx";
import MoviesNow from "./Components/MoviesNow/MoviesNow.jsx"
import MoviesComing from "./Components/MoviesComing/MoviesComing.jsx";
import MoviesTop from "./Components/MoviesTop/MoviesTop.jsx"

import SimpleSlider from "./Components/slick.jsx";

import { Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavTop />
      <Hero />
      <MidMenu />
      <Switch>
        <Route path="/popular" component={MoviesPopular} />
        <Route path="/now" component={MoviesNow} />
        <Route path="/coming" component={MoviesComing} />
        <Route path="/top" component={MoviesTop} />
      </Switch>
    </div>
  );
}

export default App;
