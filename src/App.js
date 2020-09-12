import React from "react";
import Header from "./header/";
import Feature from "./features/";
import AboutUs from "./aboutus/";
import Faq from "./faq/";
import Footer from "./footer/";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <AboutUs />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
