import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const API_KEY = "e7b5687807mshac8e2df2f57973bp1c2f96jsnd6979b82ef04";

const Airroute = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flights, setFlights] = useState([]);
  const airportCode = 'VHHH'
// KJFK (John F. Kennedy International Airport)
// EGLL (London Heathrow Airport)
// WSSS (Singapore Changi Airport)
// OMDB (Dubai International Airport)
// LFPG (Paris Charles de Gaulle Airport)
// RKSI (Incheon International Airport)
// KORD (Chicago O'Hare International Airport)
// ZBAA (Beijing Capital International Airport)
// VHHH (Hong Kong International Airport)
// LEMD (Adolfo Suárez Madrid–Barajas Airport)

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://aerodatabox.p.rapidapi.com/airports/icao/${airportCode}/stats/routes/daily`,
          {
            headers: {
              "X-RapidAPI-Key": API_KEY,
              "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
            },
          }
        );

        setFlights(response.data);
      } catch (error) {
        setError(error.message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [airportCode]);
  const navi = () => {
    navigate("/");
  };

  return (
    <>
    <header className="App-header">
        <button onClick={navi}>Go back</button>
        <h1>Airport search by </h1>
      </header>
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {flights.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Route</th>
              <th>Daily Flights</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index}>
                <td>{flight.route}</td>
                <td>{flight.dailyFlights}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No flights found.</div>
      )}
    </div>
    </>
  );
};

export default Airroute;
