import React from "react";
import Search from "./component/search/Search";
import Navbar from "./component/1navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Home";
import Booking from "./component/booking/Booking";
import ContactUs from "./component/contactUs/ContactUs";
import Searchreault from "./component/search/Searchreault";
import Airroute from "./component/route/Airroute";


function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/search" element={<Search />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/airroute" element={<Airroute airportCode="KJFK"/>} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
