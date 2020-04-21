import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MovieContext } from "../../Context";
import LoadMore from "../loadMore/LoadMore";

import DefaultMovieComponent from "../defaultMovieComponent/DefaultMovieComponent";

const MoviesComing = () => {
  const { coming } = useContext(MovieContext);

  return (
    <Container className="homePageMovies mt-3">
      <Row>
        <Col>
          <>
            <>
              <DefaultMovieComponent movieType={coming} />
            </>
            <LoadMore />
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(MoviesComing);
