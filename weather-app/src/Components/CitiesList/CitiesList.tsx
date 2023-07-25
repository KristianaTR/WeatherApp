import "./CitiesList.css";
import Cities from "../../DataBase/data.js";
import { useState } from "react";
import Paginator from "../Paginator/Paginator";
import "../../Components/Search/Search.css";

const CitiesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(Cities.length / itemsPerPage);

  const showCities = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedCities = Cities.slice(startIndex, endIndex);

    //-----------Adding different styling according to level of temperature---------------
    const CitiesListClassNames = (temperature: number) => {
      let temperatureClass = "";

      const temperatureRanges: [number, string][] = [
        [-20, "color-20andMore"],
        [-15, "color-20to-15"],
        [-10, "color-15to-10"],
        [-5, "color-10to-5"],
        [0, "color-5to0"],
        [5, "color0to5"],
        [10, "color5to10"],
        [15, "color10to15"],
        [20, "color15to20"],
        [25, "color20to25"],
        [30, "color25to30"],
      ];

      for (const [rangeTemp, rangeClass] of temperatureRanges) {
        if (temperature <= rangeTemp) {
          temperatureClass = rangeClass;
          break;
        }
      }

      if (!temperatureClass) {
        temperatureClass = "color30plus";
      }

      return temperatureClass;
    };
    //-----------------------------

    //--------maps over cities array and returns a respective temperature for each city for each month---------
    return displayedCities.map((city) => (
      <tr key={city.cityName}>
        <td className="CitiesListTableCityColumn">{city.cityName}</td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.january.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.january.tempCelsius}
        </td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.february.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.february.tempCelsius}
        </td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.march.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.march.tempCelsius}
        </td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.april.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.april.tempCelsius}
        </td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.may.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.may.tempCelsius}
        </td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.june.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.june.tempCelsius}
        </td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.july.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.july.tempCelsius}
        </td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.august.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.august.tempCelsius}
        </td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.september.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.september.tempCelsius}
        </td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.october.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.october.tempCelsius}
        </td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.november.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.november.tempCelsius}
        </td>
        <td
          className={`CitiesListTableMonthColumns & ${CitiesListClassNames(
            city.averageTemperatureCelsius.december.tempCelsius
          )}`}
        >
          {city.averageTemperatureCelsius.december.tempCelsius}
        </td>
      </tr>
    ));
  };
  //-----------------------------

  // displays month name abbreviations according to data.js
  const displayedMonthNames = () => {
    const city = Cities[0];
    return (
      <tr>
        <th className="CitiesListTableCityColumn">CITY</th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.january.monthName}
        </th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.february.monthName}
        </th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.march.monthName}
        </th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.april.monthName}
        </th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.may.monthName}
        </th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.june.monthName}
        </th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.july.monthName}
        </th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.august.monthName}
        </th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.september.monthName}
        </th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.october.monthName}
        </th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.november.monthName}
        </th>
        <th className="CitiesListTableMonthColumnsTableHead">
          {city.averageTemperatureCelsius.december.monthName}
        </th>
      </tr>
    );
  };
  //-----------------------------

  //---sets current page according to functions in Paginator.tsx
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  //-----------------------------

  return (
    <div>
      <div className="citiesListTableWrapper">
        <table className="CitiesListTable">
          <thead>{displayedMonthNames()}</thead>
          <tbody>{showCities()}</tbody>
        </table>
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CitiesList;
