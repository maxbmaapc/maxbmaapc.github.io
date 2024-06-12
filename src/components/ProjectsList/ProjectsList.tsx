import Motion from "../Motion/Motion";
import ProjectListView from "./ProjectsListView";

import projects from "../../assets/projects.json";

const ProjectList = () => {
  return (
    <Motion className="projectList" type="section">
      <ProjectListView projects={projects} />
    </Motion>
  );
};

export default ProjectList;
