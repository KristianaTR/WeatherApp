import './MainWrapper.css';
import MainHeading from "../../Components/MainHeading/MainHeading";
import Search from '../Search/Search';

// import CityItem from "../../Components/CityItem/CityItem";


const MainWrapper = () => {
  return (
    <div>
        <MainHeading/>
        <Search/>
        {/* <CityItem/> */}
    </div>
  )
}

export default MainWrapper