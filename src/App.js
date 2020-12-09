import React, { useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
  //State
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  //UseEffect
  useEffect(() => {
    axios.get("http://api.weatherapi.com/v1/current.json?key=96323f3867ef457f861184227200912&q=London")
    .then(data => {
      setWeather(data.data);
      console.log(data.data);
    })
    .catch((err) => console.log(err));
  }, []);

  //Event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };
  const searchWeather = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=96323f3867ef457f861184227200912&q=${input}`)
    .then((data) => {
      setWeather(data.data);
      console.log(data.data);
    });
  };

  return (
    <div className="App">
      {weather && (
        <div>
          <div className="search">
            <input onChange={weatherInput} type="text"/>
            <button onClick={searchWeather}>Search</button>
          </div>
          <div className="weather-info">
            <h1>{weather.location.name}</h1>
            <h2>{weather.location.region}</h2>
            <h2>{weather.location.country}</h2>
            <div className="condition">
              <h3>{weather.current.condition.text}</h3>
              <img src={weather.current.condition.icon} alt="weather condition"/>
              <h3 className="degrees">{weather.current.temp_c}º Celsius</h3>
            </div> 
          </div>         
        </div>
      )}      
    </div>
  );
}

export default App;
