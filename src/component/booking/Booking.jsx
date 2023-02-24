import React from "react";
import "../../App.css"
import { useNavigate } from "react-router-dom";


const Booking = () => {
    const navigate = useNavigate();
  const navi = () => {
    navigate('/');
  }
  return (
    <div>
      <header className="App-header">
        <button onClick={navi}>Go back</button>
        <h1>Book Your Ticket Now</h1>
      </header>
    </div>
  );
};

export default Booking;
