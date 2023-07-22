import './MainWrapper.css';
import CitiesList from "../../Components/CitiesList/CitiesList_Simona";
import MainHeading from "../../Components/MainHeading/MainHeading";
// import CityItem from "../../Components/CityItem/CityItem";


const MainWrapper = () => {
  return (
    <div className='MainWrapper'>
        <MainHeading/>
        {/* <Search/> */}
        <CitiesList/>
        {/* <CityItem/> */}
    </div>
  )
}

export default MainWrapper