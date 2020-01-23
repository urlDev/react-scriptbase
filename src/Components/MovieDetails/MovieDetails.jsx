import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Image,
  Container,
  Form,
  FormControl,
  Button,
  Carousel,
  Col,
  Row,
  Card
} from "react-bootstrap";
import { MovieConsumer } from "../../Context";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";

import "swiper/swiper.scss";
import "./MovieDetails.scss";

const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
};
class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MovieConsumer>
        {value => {
          const {
            poster_path,
            overview,
            title,
            vote_average,
            vote_count,
            release_date,
            revenue,
            runtime,
            backdrop_path,
            budget,
            tagline
          } = value.details;
          // let newStr = release_date;
          return (
            <div className="Details">
              <img
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                alt=""
                className="firstImg"
              />

              <Container className="mt-5 p-0">
                <Row>
                  <Col className="firstCol ml-2">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                      alt=""
                      className=""
                    />
                  </Col>
                  <Col>
                    <Row>
                      {/* <span>({release_date})</span> */}
                      <h1>{title} </h1>
                    </Row>
                    <Row>
                      <p className="mt-5 mb-5">{overview}</p>
                      <Col className="mb-2">
                        <h2>Average Note: </h2>
                      </Col>
                      <Col className="mb-2">
                        <h2>Vote Count: </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h1>{vote_average}</h1>
                      </Col>
                      <Col>
                        <h3>{vote_count}</h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr />
                <Row className="mt-5">
                  <Col className="p-0 text-left ml-3 ">
                    <p>
                      <span className="leftTitle">Genre:</span>
                      {value.genres.map(genre => genre.name).join(", ")}
                    </p>
                    <p>
                      {/* using array and string methods like this, inside a ternary operator and string interpolator */}
                      <span className="leftTitle">Release Date: </span>
                      {release_date
                        ? `${release_date
                            .split("-")
                            .reverse()
                            .join("-")}`
                        : "Release Date Unknown"}
                    </p>
                    <p>
                      <span className="leftTitle">Budget: </span>
                      {budget > 0
                        ? `${budget.toLocaleString()}$`
                        : "Budget Unknown"}
                    </p>
                    <p>
                      <span className="leftTitle">Revenue: </span>
                      {revenue > 0
                        ? `${revenue.toLocaleString()}$`
                        : "Not Estimated"}
                    </p>
                  </Col>
                  <Col className="text-left">
                    <p>
                      <span className="leftTitle">Production Companies: </span>
                      {/* couldnt use array methods here so i made them as states and then used array methods */}
                      {value.companies.map(company => company.name).join(", ")}
                    </p>
                    <p>
                      <span className="leftTitle">Production Countries: </span>
                      {value.countries.map(country => country.name).join(", ")}
                    </p>
                    <p>
                      <span className="leftTitle">Tagline: </span>
                      {tagline ? `${tagline}` : `No Tagline Found`}
                    </p>
                    <p>
                      <span className="leftTitle">Runtime: </span> {runtime}
                      minutes{" "}
                    </p>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <h1 className="ml-3 castTitle">Cast</h1>

                  {value.cast.slice(0, 12).map(i => {
                    return (
                      <Card
                        style={{ width: "18em" }}
                        className="ml-3 mb-5"
                        key={i.id}
                      >
                        <Card.Img
                          variant="top"
                          src={`https://image.tmdb.org/t/p/original/${i.profile_path}`}
                        />
                        <Card.Body>
                          <Card.Title>{i.name}</Card.Title>
                          <Card.Text>as {i.character}</Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </Row>
              </Container>

              <Container className=" p-0">
                <Row>
                  <h1 className="similarTitle ml-3">Similar Movies</h1>
                </Row>
              </Container>
              <div className="similar">
                <Swiper {...params}>
                  {value.similar.slice(0, 10).map(movie => {
                    return (
                      <Link
                        to={`${movie.id}`}
                        style={{ width: "15em" }}
                        className="card ml-3"
                        key={movie.id}
                        onClick={() => value.handleClick(movie.id)}
                      >
                        <Card.Img
                          variant="top"
                          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        />
                        <Card.Body>
                          {/* <Card.Title>{movie.title}</Card.Title> */}
                          {/* <Card.Text>as {i.character}</Card.Text> */}
                        </Card.Body>
                      </Link>
                    );
                  })}
                </Swiper>
              </div>
              <div className="videos">
                {value.videos.slice(0, 1).map(video => {
                  return (
                    <Container className="p-0">
                      <Row className="">
                        <h1 className="trailerTitle mb-3">Trailer</h1>
                      </Row>
                      <Row
                        className="video "
                        style={{
                          position: "relative",
                          paddingBottom: "56.25%" /* 16:9 */,
                          paddingTop: 25,
                          height: 0
                        }}
                      >
                        <iframe
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                          }}
                          src={`https://www.youtube.com/embed/${video.key}`}
                          frameBorder="0"
                        />
                      </Row>
                    </Container>
                  );
                })}
              </div>
            </div>
          );
        }}
      </MovieConsumer>
    );
  }
}

export default MovieDetails;

{
  /* <div className="card mb-3" style="max-width: 540px;" key={i.id}>
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img src={`https://image.tmdb.org/t/p/original/${i.profile_path}`} className="card-img" alt={i.name} />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{i.name}</h5>
                            <p className="card-text">
                              as {i.character}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */
}

{
  /* <div className="castAll">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${i.profile_path}`}
                        className="castImg"
                        alt=""
                      />
                      <div className="cast">
                      <h3>{i.name}</h3>
                      <p>as {i.character}</p>
                      </div>
                      
                    </div> */
}
