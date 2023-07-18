import "./CitiesList.css";
import Cities from "../../DataBase/data.js";
import { useState } from "react";
import Paginator from "../Paginator/Paginator";
import SearchBar from "../Search/Search1";

const CitiesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(Cities.length / itemsPerPage);

  const showCities = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedCities = Cities.slice(startIndex, endIndex);

  

    const CitiesListClassNames = (temperature) => {
      let temperatureClass  = ""
      
      if (temperature <= -20) {
        temperatureClass = "color000080"
      } else if (temperature > -20 && temperature <= -15) {
        temperatureClass = "color191970"
      } else if (temperature > -15 && temperature <= -10) {
        temperatureClass = "color4169E1"
      } else if (temperature > -10 && temperature <= -5) {
        temperatureClass = "color87CEEB"
      } else if (temperature > -5 && temperature <= 0) {
        temperatureClass = "colorF0F8FF"
      } else if (temperature > 0 && temperature <= 5) {
        temperatureClass = "colorwhite"
      } else if (temperature > 5 && temperature <= 10) {
        temperatureClass = "colorFFC0CB"
      } else if (temperature > 10 && temperature <= 15) {
        temperatureClass = "colorFF2400"
      } else if (temperature > 15 && temperature <= 20) {
        temperatureClass = "colorDC143C"
      } else if (temperature > 20 && temperature <= 25) {
        temperatureClass = "color800020"
      } else if (temperature > 25 && temperature <= 30) {
        temperatureClass = "color800000"
      } else if (temperature > 30) {
        temperatureClass = "color8B0000"
      } 

      return temperatureClass
    }

    return displayedCities.map((city) => (
      <tr key={city.cityName}>
        <td className="CitiesListTableCityColumn">{city.cityName}</td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.January)}`}>
          {city.averageTemperatureCelsius.January}
        </td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.February)}`}>
          {city.averageTemperatureCelsius.February}
        </td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.March)}`}>
          {city.averageTemperatureCelsius.March}
        </td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.April)}`}>
          {city.averageTemperatureCelsius.April}
        </td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.May)}`}>
          {city.averageTemperatureCelsius.May}
        </td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.June)}`}>
          {city.averageTemperatureCelsius.June}
        </td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.July)}`}>
          {city.averageTemperatureCelsius.July}
        </td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.August)}`}>
          {city.averageTemperatureCelsius.August}
        </td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.September)}`}>
          {city.averageTemperatureCelsius.September}
        </td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.October)}`}>
          {city.averageTemperatureCelsius.October}
        </td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.November)}`}>
          {city.averageTemperatureCelsius.November}
        </td>
        <td className={`CitiesListTableMonthColumns & ${CitiesListClassNames(city.averageTemperatureCelsius.December)}`}>
          {city.averageTemperatureCelsius.December}
        </td>
      </tr>
    ));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    
    <div className="citiesListTableWrapper">
      <table className="CitiesListTable">
        <thead>
          <tr>
            <th className="CitiesListTableCityColumn"></th>
            <th className="CitiesListTableMonthColumnsTableHead">JAN</th>
            <th className="CitiesListTableMonthColumnsTableHead">FEB</th>
            <th className="CitiesListTableMonthColumnsTableHead">MAR</th>
            <th className="CitiesListTableMonthColumnsTableHead">APR</th>
            <th className="CitiesListTableMonthColumnsTableHead">MAY</th>
            <th className="CitiesListTableMonthColumnsTableHead">JUN</th>
            <th className="CitiesListTableMonthColumnsTableHead">JUL</th>
            <th className="CitiesListTableMonthColumnsTableHead">AUG</th>
            <th className="CitiesListTableMonthColumnsTableHead">SEP</th>
            <th className="CitiesListTableMonthColumnsTableHead">OCT</th>
            <th className="CitiesListTableMonthColumnsTableHead">NOV</th>
            <th className="CitiesListTableMonthColumnsTableHead">DEC</th>
          </tr>
        </thead>
        <tbody>{showCities()}</tbody>
      </table>
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

//TODO place component within page and page within App.tsx

export default CitiesList;
