import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import TermosContext from "./contexts/termosContext";

function App() {

  const [listTermos, handleListTermos] = useState([]);

  return (
    <>
      <div className="App">
        <TermosContext.Provider value={{ listTermos, handleListTermos }}>
          <Router>
            <NavBar />
            <AnimatedRoutes />
          </Router>
        </TermosContext.Provider>
      </div>
    </>
  );
}

export default App;
