import React from "react";
import { useState, useEffect } from "react";
import "./RealWeatherAPI.css";
const api = {
  key: "292dba7d56b01b1aee08ec9152100b8b",
  base: "https://api.openweathermap.org/data/2.5/",
};

const RealWeatherAPI = ({ searchedCity }) => {
  const [input, setInput] = useState(searchedCity);
  const [weather, setWeather] = useState({
    name: "",
    main: {
      temp: null,
    },
  });

  useEffect(() => {
    setInput(searchedCity);
    getWeatherData(searchedCity);
  }, [searchedCity]);

  const getWeatherData = (city) => {
    fetch(`${api.base}weather?q=${input}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setInput("");
      });
  };

  return (
    <div className="RealWeatherAPIWrapper">
      {/* <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
        value={input}
        onKeyUp={search}
      ></input> */}
      <div className="RealWeatherAPIInnerWrapper">
        <h3 className="RealWeatherAPIHeading">Temperature at the moment: </h3>
        {weather.main.temp !== null ? (
          <p className="RealWeatherAPITemp">{Math.round(weather.main.temp)}°</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default RealWeatherAPI;
