import { TypeAnimation } from "react-type-animation";

import waveImg from "../../assets/wave.png";
import pointRight from "../../assets/pointright.png";

const HeaderView = () => {
  return (
    <>
      <h1 className="header__hello">
        Hello!
        <div className="header__emoji wave animated">
          <img src={waveImg} alt="wave-hand" />
        </div>
      </h1>
      <div className="header__tagline">
        <h2>
          I'm <span className="name">Maksim Lukianenko</span>
        </h2>
        <TypeAnimation
          sequence={[
            "JavaScript Developer",
            1000,
            "TypeScript Developer",
            1000,
            "React Developer",
            1000,
            "Software Engineer",
            1000,
            "Full Stack Developer",
            1000,
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="animation"
        />
        <h2>focused on creating innovative and user-friendly applications.</h2>
      </div>
      <div className="header__contact">
        <span className="touch">
          Get in touch
          <span className="header__emoji pointer">
            <img src={pointRight} alt="" />
          </span>
        </span>
        <span>
          <a href="mailto:m.lukianenko@icloud.com" className="highlight-link">
            m.lukianenko@icloud.com
          </a>
        </span>
      </div>
    </>
  );
};

export default HeaderView;
