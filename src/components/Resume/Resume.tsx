import { TfiDownload } from "react-icons/tfi";

import Motion from "../Motion/Motion";

const Resume = () => {
  return (
    <Motion className="resume" viewport={0.1}>
      <a href="https://storage.googleapis.com/maksim_lukianneko_cv/Maksim%20Lukianenko_CV.pdf">
        View My Resume
        <TfiDownload className="resume__arrow_icon" />
      </a>
    </Motion>
  );
};

export default Resume;
