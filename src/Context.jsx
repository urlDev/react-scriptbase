import React, { Component } from "react";
import { TMDB_KEY } from "./config.js";
import axios from "axios";

const MovieContext = React.createContext();

class MovieProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: []
    };
  }

    componentDidMount() {
        this.getTrending();
    }

  getTrending = () => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${TMDB_KEY}`)
      .then(response => {
        const apiResponse = response.data;
        this.setState({
          trending: apiResponse.results
        });
        console.log(apiResponse.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <MovieContext.Provider
        //these methods will be able to used by consumer after putting them here
        value={{
          ...this.state,
          getTrending: this.getTrending
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

//Variable for state consumers
const MovieConsumer = MovieContext.Consumer;

export { MovieProvider, MovieConsumer };
