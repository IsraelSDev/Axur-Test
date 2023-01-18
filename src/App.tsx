import React from 'react';
import './styles/App.scss';


function App() {

  console.log("Process: " + process.env.REACT_APP_API_URL)

  return (
    <div className="App">
      <h1>API URL: {process.env.REACT_APP_API_URL}</h1>
    </div>
  );
}

export default App;
