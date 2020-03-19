import React from "react";

import NavTop from "./components/nav/NavTop.jsx";
import Home from "./components/home/Home.jsx";
import MovieDetails from "./components/movieDetails/MovieDetails.jsx";
import Footer from "./components/footer/Footer.jsx";
import Modal from "./components/modal/Modal.jsx";
import SignIn from "./components/signIn/SignIn.jsx";
import User from "./components/user/User.jsx";

import MovieContextProvider from "./Context.jsx";

import { Switch, Route } from "react-router-dom";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <MovieContextProvider>
        <NavTop />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/:id" component={MovieDetails} />
        </Switch>
        <Modal />
        <Footer />
      </MovieContextProvider>
    </div>
  );
};

export default App;
