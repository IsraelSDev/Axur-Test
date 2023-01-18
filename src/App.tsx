import React from 'react';
import "./styles/App.scss"
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (<>
    <div className="App">
      <Router>
        <NavBar />
        <AnimatedRoutes />
      </Router >
    </div>
  </>);
}

export default App;
