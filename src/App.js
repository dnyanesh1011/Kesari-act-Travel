import React, { useState } from "react";
import data from "./data.js";
import Tours from "./Component/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  // Handler to remove a tour based on its id
  const handleRemoveTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  // When no tours are left, display a refresh option
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btnWhite" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tours={tours} removeTours={handleRemoveTour} />
    </div>
  );
};

export default App;
