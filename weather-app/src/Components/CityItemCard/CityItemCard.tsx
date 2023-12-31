import React from "react";
import "./CityItemCard.css";

interface CityItemCardProps {
  month: string;
  tempCelsius: number;
}

const CityItemCard: React.FC<CityItemCardProps> = ({ month, tempCelsius }) => {
  if (!month || !tempCelsius) {
    // Handle the case where the data is not available or is invalid
    return <div>No data available for this city.</div>;
  }

  return (
    <div className="CityItemCard">
      <div className="CityItemCardMonth">{month}</div>

      <div className="CityItemCardIcon">
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/temperature-sensitive.png"
          alt="temperature-sensitive"
        />
      </div>
      <div className="CityItemCardTemp">{tempCelsius}°C</div>
    </div>
  );
};

export default CityItemCard;
