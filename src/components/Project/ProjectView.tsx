interface ProjectViewProps {
  title: string;
  img: string;
  description: string;
  link: string;
}

const ProjectView: React.FC<ProjectViewProps> = ({
  title,
  img,
  description,
  link,
}) => {
  return (
    <>
      <div className="project__container">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="project__description">
          <a className="project__title" href={link}>
            {title}
          </a>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
