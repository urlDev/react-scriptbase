import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MovieConsumer } from "../../Context";
import { Link } from "react-router-dom";

import "./MoviesPopular.scss";

class MoviesPopular extends Component {
  render() {
    return (
      <Container className="MoviesPopular mt-3">
        <Row>
          <Col>
            <MovieConsumer>
              {value => {
                return value.popular.slice(0, 10).map(i => {
                  return (
                    <Link
                      to={`${i.id}`}
                      className="card text-white"
                      key={i.id}
                      onClick={() => value.handleClick(i.id)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${i.poster_path}`}
                        className="card-img"
                        alt={i.title}
                      />
                      <div className="card-img-overlay">
                        <h6 className="card-title">{i.vote_average}</h6>
                      </div>
                    </Link>
                  );
                });

                //i first need to put functions to context api. But because i have 4 different components and 4 different states for each, i should name them as one state
                //then i can use the same function in all those components
                //https://codepen.io/grantdotlocal/pen/zReNgE

          //       {value.visible < value.items.length &&
          //    <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
          // }
              }
            
              }
            </MovieConsumer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MoviesPopular;

