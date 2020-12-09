import React, { useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const location = axios.get("http://api.weatherapi.com/v1/current.json?key=96323f3867ef457f861184227200912&q=London")
    .then(data => {
      setWeather(data.data);
    })
    .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      {weather && (
        <h1>{weather.location.name}</h1>
      )}      
    </div>
  );
}

export default App;
