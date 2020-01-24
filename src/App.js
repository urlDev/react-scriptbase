import React from "react";
import NavTop from "./Components/Nav/NavTop.jsx";
import Home from "./Components/Home/Home.jsx";
import Hero from "./Components/Hero/Hero.jsx"
import MidMenu from "./Components/MidMenu/MidMenu";
import MovieDetails from "./Components/MovieDetails/MovieDetails.jsx";
import Footer from "./Components/Footer/Footer.jsx"
import Modal from "./Components/Modal/Modal.jsx"

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
      <Modal/>
      <Footer/>
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