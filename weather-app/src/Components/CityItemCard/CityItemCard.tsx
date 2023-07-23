import React from 'react';
import { useState } from "react";
import './CityItemCard.css';

interface CityItemCardProps {
    month: string;
    tempCelsius: number;
  }

const CityItemCard: React.FC<CityItemCardProps> = ({month, tempCelsius}) => {
    // const [cityData, setCityData] = useState(filteredCityData);
    console.log(month);
    console.log(tempCelsius);

    // const cityData = filteredCityData[0];
    // console.log(cityData);

    if (!month || ! tempCelsius) {
        // Handle the case where the data is not available or is invalid
        return <div>No data available for this city.</div>;
    }    
  
    return (
    <div className='CityItemCard'>
            <div className="CityItemCardMonth" >
                {month}
            </div>
       
        <div className="CityItemCardIcon">
            <img 
                width="25" 
                height="25" 
                src="https://img.icons8.com/ios/50/temperature-sensitive.png" 
                alt="temperature-sensitive"
            />
        </div>
        <div className="CityItemCardTemp">
            {tempCelsius}°C
        </div>
    </div>
  );
};

export default CityItemCard