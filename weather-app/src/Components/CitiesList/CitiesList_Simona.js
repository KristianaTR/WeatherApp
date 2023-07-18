import "./CitiesList.css";
import  Cities from "../../DataBase/data.js";
import { useState } from "react";
import Paginator from "../Paginator/Paginator";
import SearchBar from "../Search/Search1";



const CitiesList = () => {

  const [cities, setCities] = useState(Cities);
    
    // SEARCH----------------
    
    const [filterSearch, setFilterSearch] = useState("");
    const filterBySearch = (e) => {
        setFilterSearch(e.target.value);
console.log(filterSearch);

      
    };

    const handleEnter = (e) => {
      if (e.key === "Enter") {
        const filtered = cities.filter(c => c.cityName.toLowerCase().includes(filterSearch));
        setCities(filtered);
      }

      if (e.key === "Delete") {
        setCities(Cities);
        setFilterSearch("")
        console.log("delete")
      }
  }
    // SEARCH------------------
    

  return (
      <div>
            <div className="citiesListTableWrapper">
        <div className="SearchInput">
            <input type="text" className="form-control" value={filterSearch} onChange={filterBySearch} onKeyUp ={handleEnter} placeholder="Search..." />
        </div>
        <div>
            {cities.map(i =>
                <div key={i.cityName}>
                    {i.cityName}
                </div>
            )};
      </div>
          
      </div>

      </div>
        );
  
};

//TODO place component within page and page within App.tsx

export default CitiesList;
