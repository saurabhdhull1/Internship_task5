import React, { useState } from "react";
import SliderComponent from "./slider/SliderComponent";
import "./1navbar/Navbar.css";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="headline">
        <h1>Yatari dhyan de</h1>
        <p>
          You can {/* */}
          <span>
            <Typewriter
              words={[
                "Search Your Flight",
                "Book your Tickets",
                "Find a Better route",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}

              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </p>
      </section>
      <section className="features">
        <div
          className="feature-container"
          onClick={() => {
            navigate("/search");
          }}
        >
          <h2>Search Your Flight</h2>
        </div>
        <div
          className="feature-container"
          onClick={() => {
            navigate("/booking");
          }}
        >
          <h2>Book your Tickets</h2>
        </div>
        <div
          className="feature-container"
          onClick={() => {
            navigate("/airroute");
          }}
        >
          <h2>Find a Better route</h2>
        </div>
      </section>

      <SliderComponent />

      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-12 banner">
            <img src="banner.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
