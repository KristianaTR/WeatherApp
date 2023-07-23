import './MainWrapper.css';
import MainHeading from "../../Components/MainHeading/MainHeading";
import Search from "../../Components/Search/Search";
// import CityItem from "../../Components/CityItem/CityItem";


const MainWrapper = () => {
  return (
    <div className='MainWrapper'>
        <MainHeading/>
        <Search/>
        {/* <CityItem/> */}
    </div>
  )
}

export default MainWrapper