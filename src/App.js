import React from "react";
import NavTop from "./Components/Nav/NavTop.jsx";
import Home from "./Components/Home/Home.jsx";
import Hero from "./Components/Hero/Hero.jsx"
import MidMenu from "./Components/MidMenu/MidMenu";
import MoviesPopular from "./Components/MoviesPopular/MoviesPopular.jsx";
import MoviesNow from "./Components/MoviesNow/MoviesNow.jsx";
import MoviesComing from "./Components/MoviesComing/MoviesComing.jsx";
import MoviesTop from "./Components//MoviesTop/MoviesTop";
import MovieDetails from "./Components/MovieDetails/MovieDetails.jsx";

import { Switch, Route, Router } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavTop />
      {/* <Hero />
      <MidMenu /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/popular" component={MoviesPopular} />
        <Route path="/now" component={MoviesNow} />
        <Route path="/coming" component={MoviesComing} />
        <Route path="/top" component={MoviesTop} /> */}
        <Route path="/:id" component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default App;


{/* <NavTop />
      <Hero />
      <MidMenu />
      <Switch>
        
        <Route path="/popular" component={MoviesPopular} />
        <Route path="/now" component={MoviesNow} />
        <Route path="/coming" component={MoviesComing} />
        <Route path="/top" component={MoviesTop} />
        <Route path="/:id" component={MovieDetails} />
      </Switch> */}