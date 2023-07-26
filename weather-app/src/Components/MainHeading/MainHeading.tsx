import "./MainHeading.css";

const MainHeading = () => {
  return (
    <div className="MainHeadingWrapper">
      <div className="MainHeadingIcons">
        <img src="https://img.icons8.com/ios/50/rain--v1.png" alt="rain--v1" />
        <img src="https://img.icons8.com/ios/50/snow.png" alt="snow" />
        <img
          src="https://img.icons8.com/ios/50/partly-cloudy-day--v1.png"
          alt="partly-cloudy-day--v1"
        />
        <img src="https://img.icons8.com/ios/50/sun--v1.png" alt="sun--v1" />
        <img
          src="https://img.icons8.com/ios/50/cloud--v1.png"
          alt="cloud--v1"
        />
      </div>
      <h1 className="MainHeadingTitle">WEATHER APP</h1>
      <p className="MainHeadingDescription">
        Here you can easily find the average temperature of the months in the
        largest cities in Europe
      </p>
    </div>
  );
};

export default MainHeading;
