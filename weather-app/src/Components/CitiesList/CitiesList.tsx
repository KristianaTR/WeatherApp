import "./CitiesList.css";
import cities from "../../DataBase/data.js";
import {useState} from 'react'

const CitiesList = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(cities.length / itemsPerPage);

    const showCities = () => {
        const startIndex = (currentPage -1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const displayedCities = cities.slice(startIndex, endIndex);

        return displayedCities.map((city) => (
            <tr key={city.cityName}>
              <td className="CitiesListTableCityColumn">{city.cityName}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.January}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.February}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.March}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.April}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.May}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.June}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.July}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.August}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.September}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.October}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.November}</td>
              <td className="CitiesListTableMonthColumns">{city.averageTemperatureCelsius.December}</td>
            </tr>
        ))
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handlePreviousPage = () => {
        setCurrentPage((page) => page - 1);
      };

      const handleNextPage = () => {
        setCurrentPage((page) => page + 1);
      };

    const showPagination = () => {
        const pageNumbers = [];

        for (let i=1; i<totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={i === currentPage ? "active" : ""} onClick={() => handlePageChange(i)}>{i}</li>
            )
        }

        return (
            <ul className="CitiesListPagination">
                <li>
                {pageNumbers}
                </li>
                </ul>
        )
    }

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
        <tbody>
          {showCities()}
        </tbody>
      </table>
      <div className="CitiesListPaginationWrapper">{showPagination()}</div>
    </div>
  );
};

//TODO place component within page and page within App.tsx

export default CitiesList;
