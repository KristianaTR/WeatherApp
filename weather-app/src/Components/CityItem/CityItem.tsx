import './CityItem.css';
import React from 'react';
import CityItemCard from "../CityItemCard/CityItemCard";

export interface MonthlyTemperature {
  monthName: string;
  tempCelsius: number;
}

export interface CityData {
  cityName: string;
  averageTemperatureCelsius: MonthlyTemperature[];
}

interface CityItemProps {
  cities: CityData[];
}

const CityItem: React.FC<CityItemProps> = ({cities}) => {
  console.log(cities);
  return (
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
  )
}

export default CityItem