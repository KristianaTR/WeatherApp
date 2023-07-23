import React from "react";
import { useState } from "react";
const api = {
  key: "292dba7d56b01b1aee08ec9152100b8b",
  base: "https://api.openweathermap.org/data/2.5/",
};

const RealWeatherAPI = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    name: "",
    main: {
      temp: null
    }
  });

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${input}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setInput("");
          console.log(result)
        });
        
    }
  };

  return (
    <div className="RealWeatherAPIWrapper">
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
        value={input}
        onKeyUp={search}
      ></input>
      <p>{weather.name}</p>
      {weather.main.temp !== null ? (
        <p>{Math.round(weather.main.temp)}</p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default RealWeatherAPI;

