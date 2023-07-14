import "./MainPageStyling.css";
//@ts-ignore
import CloudImage from "../../assets/clouds.png";

const MainPageStyling = () => {
  return (
    <div className="MainPageStyling">
        <div></div>
      <div className="MainPageStylingImageWrapper">
        <img className="MainPageStylingImage" src={CloudImage} alt="" />
      </div>
    </div>
  );
};

export default MainPageStyling;
