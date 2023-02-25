import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../search/Search.css";
import "./Airroute.css"

const API_KEY = "e7b5687807mshac8e2df2f57973bp1c2f96jsnd6979b82ef04";

const Airroute = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flights, setFlights] = useState([]);
  const [airportCode, setairportCode] = useState("");

  const fetchFlights = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://aerodatabox.p.rapidapi.com/airports/icao/${airportCode}/stats/routes/daily/`,
        {
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
          },
        }
      );

      setFlights(response.data.routes);
      
    } catch (error) {
      setError(error.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchFlights();
  // }, []);
  const navi = () => {
    navigate("/");
  };

  return (
    <>
      <header className="App-header">
        <button onClick={navi}>Go back</button>
        <h1>Find routes</h1>
      </header>
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}

        <div className="Searchdata">
          <div>
            <input
              type="text"
              placeholder="Enter your Airport code"
              value={airportCode}
              onChange={(event) => setairportCode(event.target.value)}
            />
            <button onClick={fetchFlights} disabled={loading}>
              {loading ? "Loading..." : "Search"}
            </button>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>VHHH (Hong Kong International Airport)</td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>KJFK (John F. Kennedy International Airport)</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>LEMD (Adolfo Suárez Madrid Barajas Airport)</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>ZBAA (Beijing Capital International Airport)</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>EGLL (London Heathrow Airport)</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>WSSS (Singapore Changi Airport)</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>OMDB (Dubai International Airport)</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>LFPG (Paris Charles de Gaulle Airport)</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>RKSI (Incheon International Airport)</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>KORD (Chicago O'Hare International Airport)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            {error && <div>Error: {error}</div>}

            {flights && flights.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Property</th>
                    <th scope="col">Value</th>
                  </tr>
                </thead>

                {flights.map((flights, index) => (
                  <tbody key={flights.iataCode}>
                   
                    <tr>
                      <th scope="row">1</th>
                      <td>Name</td>
                      <td>{flights.destination.name}</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Municipality Name</td>
                      <td>{flights.destination.municipalityName}</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Short Name</td>
                      <td>{flights.destination.shortName}</td>
                    </tr>
                    <tr >
                      <th scope="row">4</th>
                      <td>location Latitude</td>
                      <td>{flights.destination.location.lat}</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>location Longitude</td>
                      <td>{flights.destination.location.lon}</td>
                    </tr>
                    <tr >
                      <th scope="row">6</th>
                      <td>Average Daily Flights</td>
                      <td>{flights.averageDailyFlights}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            ) : (
              <div>Your data will appear here</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Airroute;
