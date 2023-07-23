import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";


const SearchBar = ({placeholder, data}) => {
  
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.cityName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    }else {
      setFilteredData(newFilter);
    }
    
    ;
  }
  const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    }

  return (
    <div className="search">
      <h1>Check the weather!</h1>
      <h3>Because the weather changes, but Your plans don't have to</h3>
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
        <div className="searchIcon">
          {filteredData.length === 0 ? (<SearchIcon />) : (<CloseIcon id="clearBtn" onClick= {clearInput}/>)}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
        {filteredData.map((value) => {
          return (
          <div className="dataItem" key={value.cityName}> {value.cityName} </div>
          );
        })}
      </div>
      )}
    </div>
  );
};
  
  export default SearchBar;
