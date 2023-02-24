import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const API_KEY = "e7b5687807mshac8e2df2f57973bp1c2f96jsnd6979b82ef04";

const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [airports, setAirports] = useState([]);

  const handleSearch = async () => {
      try {
        setLoading(true);
        setError(null);
  
        const response = await axios.get(
          `https://aerodatabox.p.rapidapi.com/airports/iata/${searchValue}`,
          {
            headers: {
              "X-RapidAPI-Key": API_KEY,
              "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
            },
          }
        );
  
        setAirports([response.data]);
      } catch (error) {
        setError(error.message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
   
  };


  const navi = () => {
    navigate("/");
  };

  return (
    <div>
      <header className="App-header">
        <button onClick={navi}>Go back</button>
        <h1>Airport search by Code</h1>
      </header>
      <div className="Searchdata">
        <div>
          <input
            type="text"
            placeholder="Enter your Airport code"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? "Loading..." : "Search"}
          </button>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Code</th>
                  <th scope="col">Full name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>DME</td>
                  <td>Domodedovo International Airport</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>LHR</td>
                  <td>London Heathrow Airport</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>CDG</td>
                  <td>Paris Charles deGaulle Airport</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>JFK</td>
                  <td>John F. Kennedy International Airport</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>DXB</td>
                  <td>Dubai International Airport</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>HKG</td>
                  <td>Hong Kong International Airport</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>FRA</td>
                  <td>Frankfurt Airport</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>IST</td>
                  <td>Istanbul Airport</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>SYD</td>
                  <td>SydneyAirport</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>NRT</td>
                  <td>Narita International Airport</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          {error && <div>Error: {error}</div>}

          {airports && airports.length > 0 ? (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Property</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>

              {airports.map((airport, index) => (
                <tbody>
                  <tr key={index}>
                    <th scope="row">1</th>
                    <td>Full Name</td>
                    <td>{airport.fullName}</td>
                  </tr>
                  <tr key={index}>
                    <th scope="row">2</th>
                    <td>Country Name</td>
                    <td>{airport.country.name}</td>
                  </tr>
                  <tr key={index}>
                    <th scope="row">3</th>
                    <td>Continent Name</td>
                    <td>{airport.continent.name}</td>
                  </tr>
                  <tr key={index}>
                    <th scope="row">4</th>
                    <td>Location Latitude</td>
                    <td>{airport.location.lat}</td>
                  </tr>
                  <tr key={index}>
                    <th scope="row">5</th>
                    <td>Location Longitude</td>
                    <td>{airport.location.lon}</td>
                  </tr>
                  <tr key={index}>
                    <th scope="row">6</th>
                    <td>WebSite URL</td>
                    <td><a href={airport.urls.webSite} target='_blank'>Go to Website</a></td>
                  </tr>
                  <tr key={index}>
                    <th scope="row">7</th>
                    <td>Twitter URL</td>
                    <td><a href={airport.urls.twitter} target='_blank'>Go to Twitter</a></td>
                  </tr>
                  <tr key={index}>
                    <th scope="row">8</th>
                    <td>GoogleMaps URL</td>
                    <td><a href={airport.urls.googleMaps} target='_blank'>Go to Google Maps</a></td>
                  </tr>
                  <tr key={index}>
                    <th scope="row">9</th>
                    <td>FlightRadar URL</td>
                    <td><a href={airport.urls.flightRadar} target='_blank'>Go to Flight Radar</a></td>
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
  );
};

export default Search;
