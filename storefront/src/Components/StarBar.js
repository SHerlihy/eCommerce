import React from "react";

const StarBar = (props) => {
  const countStars = () => {
    const count = props.rating * 2;

    const stars = [];

    for (let i = 0; i < count; i++) {
      stars.push(<p>*</p>);
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
