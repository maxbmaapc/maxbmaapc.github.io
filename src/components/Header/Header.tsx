import HeaderView from "./HeaderView";
import Motion from "../Motion/Motion";

const Header = () => {
  return (
    <>
      <Motion className="header" type="header">
        <HeaderView />
      </Motion>
    </>
  );
};

export default Header;
