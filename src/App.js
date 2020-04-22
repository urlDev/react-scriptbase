import React from "react";

import NavTop from "./components/nav/NavTop";
import Home from "./components/home/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import SignIn from "./components/signIn/SignIn";
import User from "./components/user/User";

import MovieContextProvider from "./Context";

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
