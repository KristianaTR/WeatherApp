import "./CitiesList.css";
import '../CityItem/CityItem.css';
import  Cities from "../../DataBase/data.js";
import { useState } from "react";
import CityItemCard from "../CityItemCard/CityItemCard";
// import Paginator from "../Paginator/Paginator";
// import SearchBar from "../Search/Search1";



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
        console.log(filtered);
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
          <input 
            type="text" 
            className="form-control" 
            value={filterSearch} 
            onChange={filterBySearch} 
            onKeyUp ={handleEnter} 
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

        {/* CityItem component --> */}

        {cities.map((i) => {
          const FilteredData = Object.values(i.averageTemperatureCelsius);
          // const monthNamesData = FilteredData.map(
          //   (month) => i.averageTemperatureCelsius[month].monthName
          // );
          // const tempCelsiusData = FilteredData.map(
          //   (month) => i.averageTemperatureCelsius[month].tempCelsius
          // );
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
              {/* <CityItemCard
                monthNamesData={monthNamesData}
                tempCelsiusData={tempCelsiusData}
              /> */}
            </div>
          );
        })}

        
        {/* <-- CityItem component */}
      </div>

    </div>
  );
  
};

export default CitiesList;
