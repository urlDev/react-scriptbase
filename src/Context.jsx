import React, { Component } from "react";
import { TMDB_KEY } from "./config.js";
import axios from "axios";

const MovieContext = React.createContext();

class MovieProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //empty array because we are fetching an array from tmdb database
      trending: [],
      popular: [],
      now: [],
      coming: [],
      top: [],
      details: "",
      genres: [],
      cast: [],
      id: "",
      companies: [],
      countries: [],
      similar: [],
      reviews: []
    };
  }

  componentDidMount() {
    this.getTrending();
    this.getPopular();
    // this.cleanState();
    // this.getNow();
    // this.getComing();
    // this.getTop();
    // this.getDetails();
    // this.getCast();
    this.handleClick();
  }

  //cleans the states for movie lists so they wouldnt stack up
  cleanState = () => {
    this.setState({
      popular: [],
      now: [],
      coming: [],
      top: []
    });
  };

  getTrending = () => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${TMDB_KEY}`)
      .then(response => {
        const apiResponse = response.data;
        this.setState({
          trending: apiResponse.results
        });
        // console.log(apiResponse.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getPopular = () => {
    this.cleanState();
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`
      )
      .then(response => {
        const apiResponse = response.data;
        this.setState({
          popular: apiResponse.results
        });
        // console.log(apiResponse.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getNow = () => {
    this.cleanState();
    axios
      .get(
        `
https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_KEY}&language=en-US&page=1`
      )
      .then(response => {
        const apiResponse = response.data;
        this.setState({
          now: apiResponse.results
        });
        // console.log(apiResponse.results);
      })
      .catch(error => {
        console.log(error);
      });
    console.log("worked");
  };

  getComing = () => {
    this.cleanState();
    axios
      .get(
        `
https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_KEY}&language=en-US&page=1`
      )
      .then(response => {
        const apiResponse = response.data;
        this.setState({
          coming: apiResponse.results
        });
        // console.log(apiResponse.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getTop = () => {
    this.cleanState();
    axios
      .get(
        `
https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&language=en-US&page=1`
      )
      .then(response => {
        const apiResponse = response.data;
        this.setState({
          top: apiResponse.results
        });
        // console.log(apiResponse.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${TMDB_KEY}&language=en-US`
      )
      .then(response => {
        const apiResponse = response.data;
        console.log(this.state.id);
        this.setState({
          details: apiResponse,
          genres: apiResponse.genres,
          companies: apiResponse.production_companies,
          countries: apiResponse.production_countries
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  getCast = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.state.id}/credits?api_key=${TMDB_KEY}&language=en-US`
      )
      .then(response => {
        const apiResponse = response.data;
        this.setState({
          cast: apiResponse.cast
        });
        // console.log(apiResponse.cast);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getSimilar = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.state.id}/similar?api_key=${TMDB_KEY}&language=en-US&page=1`
      )
      .then(response => {
        const apiResponse = response.data;
        this.setState({
          similar: apiResponse.results
        });
        // console.log(apiResponse.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getReviews = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.state.id}/reviews?api_key=${TMDB_KEY}&language=en-US&page=1`
      )
      .then(response => {
        const apiResponse = response.data;
        this.setState({
          reviews: apiResponse.results
        });
        // console.log(apiResponse.results);
      })
      .catch(error => {
        console.log(error);
      });
  }


  //this will get the id of clicked element and set the id state with id it got from the element
  //https://stackoverflow.com/questions/44325272/getting-the-id-of-a-clicked-element-from-rendered-list
  handleClick = id => {
    // console.log(id);
    this.setState(
      {
        id: id
      },
  // how to put two callback functions within setState
  // https://stackoverflow.com/questions/53788156/passing-multiple-functions-as-callback-in-setstate
      () => {
        this.getDetails();
        this.getCast();
        this.getSimilar();
        this.getReviews();
      }
    );

    
  };

  //for checking if a link is active

  //   checkActive = (match, location) => {
  //     //some additional logic to verify you are in the home URI
  //     if(!location) return false;
  //     const {pathname} = location;
  //     console.log(pathname);
  //     return pathname === "/";
  // }

  render() {
    return (
      <MovieContext.Provider
        //these methods will be able to used by consumer after putting them here
        value={{
          ...this.state,
          getTrending: this.getTrending,
          getPopular: this.getPopular,
          getNow: this.getNow,
          getComing: this.getComing,
          getTop: this.getTop,
          checkActive: this.checkActive,
          // getDetails: this.getDetails,
          // getCast: this.getCast,
          handleClick: this.handleClick
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
