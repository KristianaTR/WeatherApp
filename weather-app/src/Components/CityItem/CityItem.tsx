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
  cityPicture: string;
}

interface CityItemProps {
  cities: CityData[];
}

const CityItem: React.FC<CityItemProps> = ({cities}) => {
  console.log(cities);
  return (
    <div className="cityItemWrapper">
              {cities.map((i) => {
                const FilteredData = Object.values(i.averageTemperatureCelsius);
                console.log(i.averageTemperatureCelsius);

                return (
                  <div className="CityItem">
                    <div key={i.cityName} className='CityItemCityData'>
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
                    <div className='CityItemCityPicture'>
                      <img src={i.cityPicture} alt="cityPicture" height="300"/>
                      
                    </div>
                  </div>
                );
              })}
            </div>
  )
}

export default CityItem