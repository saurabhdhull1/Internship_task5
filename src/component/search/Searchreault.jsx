
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "e7b5687807mshac8e2df2f57973bp1c2f96jsnd6979b82ef04";

const Searchreault = () => {
  const [selectedCode, setSelectedCode] = useState("");
  const [airportData, setAirportData] = useState(null);

  const handleSelect = async (event) => {
    const selected = event.target.value;
    setSelectedCode(selected);
    try {
      const response = await axios.get(
        `https://aerodatabox.p.rapidapi.com/airports/iata/${selected}`,
        {
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
          },
        }
      );
      setAirportData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter airport code"
        value={selectedCode}
        onChange={(event) => setSelectedCode(event.target.value)}
      />
      <button onClick={handleSelect}>Search</button>
      {airportData && (
        <div>
          <h2>Airport Data for {selectedCode}</h2>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>{airportData.fullName}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{airportData.municipality.name}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{airportData.country.name}</td>
              </tr>
              <tr>
                <td>Continent</td>
                <td>{airportData.continent.name}</td>
              </tr>
              <tr>
                <td>Latitude</td>
                <td>{airportData.location.lat}</td>
              </tr>
              <tr>
                <td>Longitude</td>
                <td>{airportData.location.lon}</td>
              </tr>
              <tr>
                <td>Timezone</td>
                <td>{airportData.timezone.name}</td>
              </tr>
              <tr>
                <td>GMT offset</td>
                <td>{airportData.timezone.gmtOffset}</td>
              </tr>
              <tr>
                <td>Timezone DST</td>
                <td>{airportData.timezone.dst}</td>
              </tr>
              <tr>
                <td>Code IATA</td>
                <td>{airportData.iata}</td>
              </tr>
              <tr>
                <td>Code ICAO</td>
                <td>{airportData.icao}</td>
              </tr>
              <tr>
                <td>Altitude</td>
                <td>{airportData.location.elevationFt} ft</td>
              </tr>
              <tr>
                <td>Timezone</td>
                <td>{airportData.timezone.name}</td>
              </tr>
              <tr>
                <td>GMT offset</td>
                <td>{airportData.timezone.gmtOffset}</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Searchreault;
