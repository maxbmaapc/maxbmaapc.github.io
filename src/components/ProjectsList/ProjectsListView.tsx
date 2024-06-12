import ProjectCard from "../ProjectCard/ProjectCard";

export interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  github: string;
  tools: string[];
}

interface ProjectListViewProps {
  projects: Project[];
}

const ProjectListView: React.FC<ProjectListViewProps> = ({ projects }) => {
  return (
    <>
      <h1 className="section__title">Other Projects</h1>
      <div className="projectCard">
        {projects &&
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </>
  );
};

export default ProjectListView;
