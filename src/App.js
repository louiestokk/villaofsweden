import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CarouselComponent from "./components/Carousel";
import Location from "./components/Location";
import BookingCalender from "./components/BookingCalender";

const App = () => {
  return (
    <div className="App">
      <Header />
      <CarouselComponent />
      <Location />
      <Header />
    </div>
  );
};

export default App;
