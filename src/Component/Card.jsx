import React, { useState } from "react";

const Card = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}....`;

  // Toggle the read more/less state
  const toggleReadMore = () => {
    setReadMore((prev) => !prev);
  };

  return (
    <div className="card">
      <img src={image} className="image" alt={name} />
      <div className="tourInfo">
        <div className="tourDetails">
          <h4 className="tourPrice">{price}</h4>
          <h4 className="tourName">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="readMore" onClick={toggleReadMore}>
            {readMore ? "show less" : "read more"}
          </span>
        </div>
      </div>
      <button className="btnRed" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;
