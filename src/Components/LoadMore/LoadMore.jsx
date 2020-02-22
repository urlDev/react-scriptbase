import React from "react";
import { MovieConsumer } from "../../Context";

const LoadMore = () => {
  return (
    <MovieConsumer>
      {value => {
        return (
          <div>
            {/* if value visible is smaller than popular.length then add button */}
            {value.visible < value.coming.length && (
              <button
                onClick={value.loadMore}
                type="button"
                className="load-more"
              >
                Load more
              </button>
            )}
          </div>
        );
      }}
    </MovieConsumer>
  );
};

export default LoadMore;