import React, { useContext } from "react";
import { MovieContext } from "../../Context";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const DefaultMovieComponent = ({ movieType }) => {
  const {
    visible,
    handleClick,
    refreshPage,
    addFavorite,
    favorite,
    currentUser,
  } = useContext(MovieContext);
  return (
    <>
      {movieType &&
        movieType.slice(0, visible).map((movie) => {
          return (
            <div className="card text-white fade-in" key={movie.id}>
              <Link
                to={`${movie.id}`}
                key={movie.id}
                onClick={() => {
                  handleClick(movie.id);
                  refreshPage();
                }}
              >
                <LazyLoad>
                  <img
                    src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                    className="card-img"
                    alt={movie.title}
                  />
                </LazyLoad>
              </Link>

              <div className="">
                <h6 className="card-title voteAverage">{movie.vote_average}</h6>
              </div>
              <div className="">
                <h6
                  className="card-title hearts"
                  onClick={() => addFavorite(movie.poster_path)}
                >
                  {currentUser ? (
                    favorite.includes(movie.poster_path) ? (
                      <i
                        className="fa fa-heart"
                        aria-hidden="true"
                        style={{ color: "red" }}
                      ></i>
                    ) : (
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    )
                  ) : (
                    <Link to="/signin" style={{ color: "#FDFFFC" }}>
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </Link>
                  )}
                </h6>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DefaultMovieComponent;
