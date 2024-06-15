import { useMediaQuery } from "react-responsive";

const SkillsView = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <>
      <h1 className="section__title">Skills</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: "10px",
        }}
        className="skills__container"
      >
        <div>
          <h2>Front-end</h2>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript </li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass </li>
            <li>React</li>
            <li>JQuery</li>
          </ul>
        </div>
        <div>
          <h2>Back-end</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Swagger </li>
            <li>Seeding</li>
          </ul>
        </div>
        <div>
          <h2>Design</h2>
          <ul>
            <li>Bootstrap</li>
            <li>AntDesign</li>
            <li>Chakra UI</li>
          </ul>
        </div>
        <div>
          <h2>Tools</h2>
          <ul>
            <li>Jest</li>
            <li>Supertest</li>
            <li>AWS</li>
            <li>Terraform</li>
            <li>Docker</li>
            <li>Firebase</li>
            <li>GCP</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsView;
