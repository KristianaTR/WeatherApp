import "./Search.css";
import { useState } from "react";
import Cities from "../../DataBase/data.js";
import CityItem, {CityData, MonthlyTemperature} from "../CityItem/CityItem";

import CitiesList from "../CitiesList/CitiesList";
import RealWeatherAPI from "../RealWeatherAPI/RealWeatherAPI";

const Search = () => {
  const [cities, setCities] = useState(Cities);

  const [filterSearch, setFilterSearch] = useState("");

  const [showDropdown, setShowDropdown] = useState(true);

  // Define the CityData array to store the filtered cities
  const [filteredCities, setFilteredCities] = useState<CityData[]>(() => {
    // Transform the initial Cities data to match the CityData format
    return Cities.map((city) => ({
      cityName: city.cityName,
      averageTemperatureCelsius: Object.values(city.averageTemperatureCelsius) as MonthlyTemperature[],
    }));
  });

  const filterBySearch = (event) => {
    setFilterSearch(event.target.value);
  }

  const handleEnter = () => {
    const filtered = cities.filter(city => city.cityName.toLowerCase().includes(filterSearch.toLowerCase()));
    
    // Convert the filtered data to the correct format using map
    const formattedData: CityData[] = filtered.map((city) => ({
      cityName: city.cityName,
      averageTemperatureCelsius: Object.values(city.averageTemperatureCelsius) as MonthlyTemperature[],
    }));
    setFilteredCities(formattedData);

    setCities(filtered);
    setShowDropdown(false);
  }

    const clearInput = () => {
      setCities(Cities);
      setFilterSearch("");
      setShowDropdown(true);
    }
    
    const handleCityClick = (cityName) => {
      setFilterSearch(cityName);
      setShowDropdown(false);
    };
    


  return (
    <div className="SearchWrapper">
      <div className="search">
      <div>
          <input type="text" className="search-inner" value={filterSearch} onChange={filterBySearch}  placeholder="Search..." />
            <button className="enter-btn" onClick ={handleEnter}>Search</button>
            {filterSearch !== "" && <button className="reset-btn" onClick={clearInput} >Reset</button>}
        </div>
        {showDropdown && (<div className="dropdown">
              {Cities.filter(city => {
                const searchTerm = filterSearch.toLowerCase();
                const cityName = city.cityName.toLowerCase();

                return searchTerm && cityName.startsWith(searchTerm) 
              })
              .map((city) => <div key={city.cityName} className="dropdown-row" onClick={() => handleCityClick(city.cityName)}>{city.cityName}</div>)}
            </div> )}

      </div>

      {/* Cities list div visible when search bar is empty and hidden when search button is clicked */}
      <div className="toggleComponentVisibility">
        {filterSearch === "" ? (
          <CitiesList />
        ) : (
          <div>
            <RealWeatherAPI />
            <CityItem cities={filteredCities}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
