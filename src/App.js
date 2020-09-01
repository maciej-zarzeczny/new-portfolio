import React from "react";
import "./App.scss";

import { Cursor } from "./components/Cursor/Cursor";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./components/HomePage/HomePage";

const App = () => {
  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
