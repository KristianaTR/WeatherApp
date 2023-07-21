import './MainWrapper.css';
import CitiesList from "../../Components/CitiesList/CitiesList";
import MainHeading from "../../Components/MainHeading/MainHeading";
// import CityItem from "../../Components/CityItem/CityItem";


const MainWrapper = () => {
  return (
    <div>
        <MainHeading/>
        <CitiesList/>
        {/* <CityItem/> */}
    </div>
  )
}

export default MainWrapper