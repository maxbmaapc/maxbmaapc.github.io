import Motion from "../Motion/Motion";
import ProjectView from "./ProjectView";
import prjImg from "../../assets/nc_news.png";

const Project = () => {
  return (
    <Motion className="project" type="section">
      <h1 className="section__title">Featured Projects</h1>
      <ProjectView
        title="NC News"
        img={prjImg}
        description="Northcoders News is a web application built using React.ts. It provides users with a platform to browse articles, view profiles, and interact with a community. Users can log in to access personalised features such as commenting on articles and voting."
        link="https://nc-news-ts-008k.onrender.com/"
      />
    </Motion>
  );
};

export default Project;
