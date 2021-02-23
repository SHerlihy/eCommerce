import React from "react";

const StarBar = (props) => {
  const countStars = () => {
    const count = props.rating * 2;

    const stars = [];

    for (let i = 0; i < count; i = i + 2) {
      stars.push(<i className="fas fa-star"></i>);
    }

    if (count % 2 !== 0) {
      stars.push(<i className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  return (
    <div className="starbar">
      {countStars()}
      <p>&nbsp;&nbsp;({props.numReviews})</p>
    </div>
  );
};

export default StarBar;
