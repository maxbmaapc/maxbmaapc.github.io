import Header from "./components/Header/Header";
import Background from "./components/Backgroung/Background";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Project from "./components/Project/Project";
import ProjectList from "./components/ProjectsList/ProjectsList";
import Footer from "./components/Footer/Footer";

import "./App.scss";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Background />
      <Skills />
      <Resume />
      <Project />
      <ProjectList />
      <Footer />
    </>
  );
}

export default App;
