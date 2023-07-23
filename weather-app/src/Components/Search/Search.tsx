import "./Search.css";
import { useState } from "react";
import Cities from "../../DataBase/data.js";
import CityItemCard from "../CityItemCard/CityItemCard";
import CitiesList from "../CitiesList/CitiesList";
import RealWeatherAPI from "../RealWeatherAPI/RealWeatherAPI";

const Search = () => {
  const [cities, setCities] = useState(Cities);

  const [filterSearch, setFilterSearch] = useState("");

  const [showDropdown, setShowDropdown] = useState(true);

  //--for toggling component visibility
  const [visibleComponent, setVisibleComponent] = useState(Cities);
  //-------

  //--for real weather API
  const [searchQuery, setSearchQuery] = useState("")
  //-------------

  const filterBySearch = (event) => {
    setFilterSearch(event.target.value);
  };

  const handleEnter = () => {
    const filtered = cities.filter((city) =>
      city.cityName.toLowerCase().includes(filterSearch.toLowerCase())
    );
    setCities(filtered);
    setSearchQuery(filterSearch)
    setShowDropdown(false);
    setVisibleComponent(filtered)
  };

  const clearInput = () => {
    setCities(Cities);
    setFilterSearch("");
    setShowDropdown(true);
    setVisibleComponent(Cities)
  };

  const handleCityClick = (cityName) => {
    setFilterSearch(cityName);
    setShowDropdown(false);
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
        {showDropdown && (
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
        )}
      </div>

      {/* Cities list div visible when search bar is empty and hidden when search button is clicked */}
      <div className="toggleComponentVisibility">
        {visibleComponent === Cities ? (
          <CitiesList />
        ) : (
          <div>
            <RealWeatherAPI searchedCity={searchQuery}/>
            <div className="cityItemWrapper">
              {/* <CityItem/> or CityItem return statement goes here*/}

              {/* CityItem component --> */}

              {cities.map((i) => {
                const FilteredData = Object.values(i.averageTemperatureCelsius);

                return (
                  <div key={i.cityName} className="CityItem">
                    <div className="CityItemCityName">{i.cityName}</div>
                    <div className="CityItemCardWrapper">
                      {FilteredData.map((data) => (
                        <CityItemCard
                          month={data.monthName}
                          tempCelsius={data.tempCelsius}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* <-- CityItem component */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
