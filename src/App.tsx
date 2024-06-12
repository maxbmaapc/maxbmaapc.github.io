import Header from "./components/Header/Header";
import Background from "./components/Backgroung/Background";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Project from "./components/Project/Project";

import "./App.scss";
import ProjectList from "./components/ProjectsList/ProjectsList";

function App() {
  return (
    <>
      <Header />
      <Background />
      <Skills />
      <Resume />
      <Project />
      <ProjectList />
    </>
  );
}

export default App;
