import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function ToursApp() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    console.log("removeTour clicked");
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const loadingToTrue = () => {
    setLoading(true);
    console.log(loading);
  };

  const removeAll = () => {
    setTours([]);
  };

  // functions inside useEffect need to execute immediately when loaded.
  // ! so, need to use { fetchTours() }
  // ! not { fecthTours }
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No tour left</h2>
        <button className="btn" onClick={fetchTours}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <button className="btn" onClick={removeAll}>
        Remove all tours
      </button>
      <Tours tours={tours} removeTour={removeTour} />
      <button onClick={loadingToTrue}>Loading to True</button>
    </main>
  );
}

export default ToursApp;
