import { Tag } from "@chakra-ui/react";
import { Project } from "../ProjectsList/ProjectsListView";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="projectCard__container">
      <div>
        <a href={project.link}>{project.name}</a>
      </div>
      <p>{project.description}</p>
      <div className="projectCard__tools">
        {project.tools.map((tool) => (
          <Tag key={tool} colorScheme="red">
            {tool}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
