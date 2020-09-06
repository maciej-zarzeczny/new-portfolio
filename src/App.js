import React from "react";
import "./App.scss";

import { Cursor } from "./components/Cursor/Cursor";
// import { SideScrollBar } from "./components/SideScrollBar/SideScrollBar";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./components/HomePage/HomePage";
import { SkillsPage } from "./components/SkillsPage/SkillsPage";
import { ProjectsPage } from "./components/ProjectsPage/ProjectsPage";
import { ContactPage } from "./components/ContactPage/ContactPage";

const App = () => {
  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <HomePage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};

export default App;
