import React from "react";
import NavTop from "./Components/Nav/NavTop.jsx";
import Home from "./Components/Home/Home.jsx";
import MovieDetails from "./Components/MovieDetails/MovieDetails.jsx";
import Footer from "./Components/Footer/Footer.jsx"
import Modal from "./Components/Modal/Modal.jsx"

import { Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={MovieDetails} />
      </Switch>
      <Modal/>
      <Footer/>
    </div>
  );
}

export default App;


