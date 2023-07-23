import "./Search.css";
import Cities from "../../DataBase/data.js";
import { useState } from "react";
import "../../Components/Search/Search.css";
import CitiesList from "../CitiesList/CitiesList";

const Search = () => {
  // SEARCH----------------
  const [cities, setCities] = useState(Cities);
  const [filterSearch, setFilterSearch] = useState("");
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
          <div className="cityItemWrapper">{/* <CityItem/> */}</div>
        )}
      </div>
    </div>
  );
};

export default Search;
