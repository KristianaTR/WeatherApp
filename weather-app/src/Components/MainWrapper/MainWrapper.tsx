import "./MainWrapper.css";
import MainHeading from "../../Components/MainHeading/MainHeading";
import Search from "../../Components/Search/Search";

const MainWrapper = () => {
  return (
    <div className="MainWrapper">
      <MainHeading />
      <Search />
    </div>
  );
};

export default MainWrapper;
