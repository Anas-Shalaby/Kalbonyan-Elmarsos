import React from "react";
import { About, Header, Skills, Work, Footer } from "./containers";
import { Navbar } from "./components";
import ScrollUp from "./components/ScrollUp/ScrollUp";

import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <ScrollUp />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
