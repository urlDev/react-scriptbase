import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MovieContext } from "../../Context";

import DefaultMovieComponent from "../defaultMovieComponent/DefaultMovieComponent"

const MoviesTop = () => {
  const { top, visible, loadMore } = useContext(MovieContext);

  return (
    <Container className="homePageMovies mt-3 ">
      <Row>
        <Col>
          <>
            <>
              <DefaultMovieComponent movieType={top} />
            </>
            <>
              {/* if value visible is smaller than popular.length then add button */}
              {visible < top.length && (
                <button onClick={loadMore} type="button" className="load-more">
                  Load more
                </button>
              )}
            </>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(MoviesTop);
