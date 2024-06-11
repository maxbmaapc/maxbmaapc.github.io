import Motion from "../Motion/Motion";
import BackgroundView from "./BackgroundView";

const Background = () => {
  return (
    <Motion className="section background" type="section">
      <BackgroundView />
    </Motion>
  );
};

export default Background;
