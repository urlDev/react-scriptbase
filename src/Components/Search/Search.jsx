import React, { Component } from "react";
import { MovieConsumer } from "../../Context";
import { Form, Button, FormControl } from "react-bootstrap";

import "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MovieConsumer>
        {value => {
          return (
            
              <Form inline className="mt-3" onSubmit={value.handleSubmit}>
                <FormControl
                  onChange={value.handleChange}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                //   value={value.movies}
                //   name="movies"
                />
                <Button variant="danger" type="submit"><i className="fa fa-search" aria-hidden="true"></i></Button>
              </Form>
            
          );
        }}
      </MovieConsumer>
    );
  }
}

export default Search;