import "./CitiesList.css"
import cities from "../../DataBase/data.js"

// const citiesList: any = cities

const CitiesList = () => {
  return (
    <div>

       {cities.map((city) => <div>{city.cityName}</div>)}
    
    </div>
  )
}

export default CitiesList