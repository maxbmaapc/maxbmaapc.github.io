import { SimpleGrid, Badge, Tag } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

const SkillsView = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const tagSize = "lg";
  const badgeFontSize = "10px";
  const badgeMarginLeft = 1;
  const colorScheme = "gray";
  const tagVariant = undefined;
  return (
    <>
      <h1 className="section__title">Skills</h1>
      <SimpleGrid
        columns={isMobile ? 2 : 4}
        spacing={10}
        className="skills__container"
      >
        <div>
          <h2>Front-end</h2>
          <ul>
            <li>JavaScript</li>
            <li>
              TypeScript{" "}
              <Badge colorScheme="orange" fontSize="0.7rem">
                Fav
              </Badge>
            </li>
            <li>HTML</li>
            <li>CSS</li>
            <li>
              Sass{" "}
              <Badge colorScheme="green" fontSize="0.7rem">
                New
              </Badge>
            </li>
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
            <li>
              Swagger{" "}
              <Badge colorScheme="green" fontSize={badgeFontSize}>
                New
              </Badge>
            </li>
            <li>Seeding</li>
          </ul>
        </div>
        <div>
          <h2>Design</h2>
          <ul>
            <li>Bootstrap</li>
            <li>
              AntDesign{" "}
              <Badge colorScheme="green" fontSize={badgeFontSize}>
                New
              </Badge>
            </li>
            <li>
              Chakra UI{" "}
              <Badge colorScheme="green" fontSize={badgeFontSize}>
                New
              </Badge>
            </li>
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
            <li>
              GCP{" "}
              <Badge
                colorScheme="green"
                fontSize={badgeFontSize}
                ml={badgeMarginLeft}
              >
                New
              </Badge>
            </li>
          </ul>
        </div>
      </SimpleGrid>
    </>
  );
};

export default SkillsView;
