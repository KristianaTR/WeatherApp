import './CityItem.css'

const CityItem = () => {
  return (
    <div className='CityItem'>
        <div className='CityItemCityName'>CityName</div>
        <div className='CityItemCard'>
            <div className="CityItemCardMonth">Jan</div>
            <div className="CityItemCardIcon">
                <img 
                    width="25" 
                    height="25" 
                    src="https://img.icons8.com/ios/50/temperature-sensitive.png" 
                    alt="temperature-sensitive"
                />
            </div>
            <div className="CityItemCardTemp">21.5 °C</div>
        </div>
    </div>
  )
}

export default CityItem