import { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [city, setcity] = useState();
  const [weather, setweather] = useState();
  const handlechange = (event) => {
    setcity(event.target.value);
  };
  const fetchweather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"ddcb319e5ef46f8a6c79939233303290"}`
      );
      setweather(response);
      console.log(response);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };
  const getweather = () => {
    fetchweather();
  };
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handlechange}
      />
      <button onClick={getweather}>Get Weather</button>
      {weather && (
        <>
          {" "}
          <div className="weatherinfo">
            <h3>{weather.data.name}</h3>
            <p>Temp is {weather.data.main.temp}</p>
            <p>{weather.data.weather[0].description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
