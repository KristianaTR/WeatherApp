import "./Search.css";
import { useState } from "react";
import Cities from "../../DataBase/data.js";
import CityItem, { CityData, MonthlyTemperature } from "../CityItem/CityItem";

import CitiesList from "../CitiesList/CitiesList";
import RealWeatherAPI from "../RealWeatherAPI/RealWeatherAPI";

const Search = () => {
  // Define the initial state using in search functionality
  const [cities, setCities] = useState(Cities);

  // Define the  state to control search value
  const [filterSearch, setFilterSearch] = useState("");

  // Define the state for list of cities visible when some value is text in inout
  const [showDropdown, setShowDropdown] = useState(true);

  // Define the CityData array to store the filtered cities
  const [filteredCities, setFilteredCities] = useState<CityData[]>(() => {
    // Transform the initial Cities data to match the CityData format
    return Cities.map((city) => ({
      cityName: city.cityName,
      averageTemperatureCelsius: Object.values(
        city.averageTemperatureCelsius
      ) as MonthlyTemperature[],
      cityPicture: city.cityPicture,
    }));
  });

  //--for toggling component visibility
  const [visibleComponent, setVisibleComponent] = useState(Cities);
  //-------

  //--for real weather API
  const [searchQuery, setSearchQuery] = useState("");
  //-------------

  const filterBySearch = (event) => {
    setFilterSearch(event.target.value);
  };

  const handleEnter = () => {
    const filtered = cities.filter((city) =>
      city.cityName.toLowerCase().includes(filterSearch.toLowerCase())
    );

    // Convert the filtered data to the correct format using map
    const formattedData: CityData[] = filtered.map((city) => ({
      cityName: city.cityName,
      averageTemperatureCelsius: Object.values(
        city.averageTemperatureCelsius
      ) as MonthlyTemperature[],
      cityPicture: city.cityPicture,
    }));
    setFilteredCities(formattedData);

    setCities(filtered);
    setSearchQuery(filterSearch);
    setShowDropdown(false);
    setVisibleComponent(filtered);
  };

  // Define the input clear function
  const clearInput = () => {
    setCities(Cities);
    setFilterSearch("");
    setShowDropdown(true);
    setVisibleComponent(Cities);
  };
  // Define the choose city form dropdown list
  const handleCityClick = (cityName) => {
    setFilterSearch(cityName);
    setShowDropdown(false);
  };

  const showDropdownList = () => {
    return (
      showDropdown && (
        <div className="dropdown">
          {Cities.filter((city) => {
            const searchTerm = filterSearch.toLowerCase();
            const cityName = city.cityName.toLowerCase();

            return searchTerm && cityName.startsWith(searchTerm);
          }).map((city) => (
            <div
              key={city.cityName}
              className="dropdown-row"
              onClick={() => handleCityClick(city.cityName)}
            >
              {city.cityName}
            </div>
          ))}
        </div>
      )
    );
  };

  return (
    <div className="SearchWrapper">
      <div className="search">
        <div>
          <input
            type="text"
            className="search-inner"
            value={filterSearch}
            onChange={filterBySearch}
            placeholder="Search..."
          />
          <button className="enter-btn" onClick={handleEnter}>
            Search
          </button>
          {filterSearch !== "" && (
            <button className="reset-btn" onClick={clearInput}>
              Reset
            </button>
          )}
        </div>

        {/* This can be a seperate component maybe?  */}
        {showDropdownList()}
      </div>

      {/* Cities list div visible when search bar is empty and hidden when search button is clicked */}
      <div className="toggleComponentVisibility">
        {visibleComponent === Cities ? (
          <CitiesList />
        ) : (
          <div>
            <RealWeatherAPI searchedCity={searchQuery} />
            <CityItem cities={filteredCities} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
