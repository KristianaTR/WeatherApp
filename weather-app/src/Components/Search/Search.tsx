import "./Search.css";
import Cities from "../../DataBase/data.js";
import { useState } from "react";
import "../../Components/Search/Search.css";
import CitiesList from "../CitiesList/CitiesList";
import RealWeatherAPI from "../RealWeatherAPI/RealWeatherAPI";
import CityItemCard from "../CityItem/CityItemCard"

const Search = () => {
  // SEARCH----------------
  const [cities, setCities] = useState(Cities);
  const [filterSearch, setFilterSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const filterBySearch = (e) => {
    setFilterSearch(e.target.value);
    console.log(filterSearch);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      const filtered = cities.filter((c) =>
        c.cityName.toLowerCase().includes(filterSearch)
      );
      setCities(filtered);
      // added this
      setSearchQuery(filterSearch);
      // added this
      setFilterSearch("");
      console.log(searchQuery);
    }

    if (e.key === "Delete") {
      setCities(Cities);
      setFilterSearch("");
      console.log("delete");
    }
  };
  // SEARCH------------------

  return (
    <div>
      {/* < SearchBar placeholder="Search.." data={Cities}/> */}

      <div className="search">
        <input
          type="text"
          className="form-control"
          value={filterSearch}
          onChange={filterBySearch}
          onKeyUp={handleEnter}
          placeholder="Search..."
        />
      </div>

      {/* <div>
        {cities.map(i =>
                <div key={i.cityName}>
                    {i.cityName}
                </div>
            )};

        </div> */}

      {/* Cities list div visible when search bar is empty and hidden when search button is clicked */}
      <div className="toggleComponentVisibility">
        {filterSearch === "" ? (
          <CitiesList />
        ) : (
          <div>
            <RealWeatherAPI />
            <div className="cityItemWrapper">
              {/* <CityItem/> or CityItem return statement goes here*/}

              {/* CityItem component --> */}

              {cities.map((i) => {
                const FilteredData = Object.values(i.averageTemperatureCelsius);
                console.log(i.averageTemperatureCelsius);

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
