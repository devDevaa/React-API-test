import React, { useCallback, useEffect, useState } from "react";
import "./index.css";
import useFetch from "../../hooks/useFetch";

export default function TripList() {
  //   let [trips, setTrips] = useState([]);
  let [url, setUrl] = useState("https://fakestoreapi.com/products");

  let { data: trips, loading, error } = useFetch(url, {type : "GET"});

  return (
    <div className="container">
      {error && <p>{error}</p>}
      {!error && (
        <div className="flex-container">
          <h1>Ready to go?</h1>
          {loading && <p>Loading Trips</p>}
          <div>
            <button onClick={() => setUrl("https://fakestoreapi.com/products")}>
              all
            </button>
            <button
              onClick={() =>
                setUrl("https://fakestoreapi.com/products?category=electronics")
              }
            >
              filter by category
            </button>
          </div>

          <ul className="trips-list">
            {trips &&
              trips.map((trip) => (
                <li key={trip.id} className="trip">
                  <h3>{trip.title}</h3>
                  <p>{trip.price}</p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
