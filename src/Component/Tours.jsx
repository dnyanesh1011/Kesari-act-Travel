import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Tours = ({ tours, removeTours }) => {
  const handleRemoveTour = (id) => {
    console.log(id);
    removeTours(id);
  };

  return (
    <div className="container">
      <header>
        <img className="large-image" src="kesari-tours.png" alt="Kesari Tours" />
        <img className="large-image" src="Kesari-tx-logo.png" alt="Kesari TX Logo" />
      </header>
      <div className="cards">
        {tours.map((tour) => (
          <Card key={tour.id} {...tour} removeTour={handleRemoveTour} />
        ))}
      </div>
    </div>
  );
};

Tours.propTypes = {
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      // other tour properties can be defined here
    })
  ).isRequired,
  removeTours: PropTypes.func.isRequired,
};

export default Tours;
