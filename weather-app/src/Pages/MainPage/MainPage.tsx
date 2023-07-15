import CitiesList from "../../Components/CitiesList/CitiesList";
import MainPageStyling from "../../Components/MainPageStyling/MainPageStyling";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="MainPage">
      <MainPageStyling/>
      <div className="MainPageCitiesListComponent"><CitiesList/></div>
    </div>
  );
};

export default MainPage;
