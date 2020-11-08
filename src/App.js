import React from "react";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import NavBarHam from "./components/NavBarHam";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ExperienceResp from "./components/ExperienceResp";
import Education from "./components/Education";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import MediaQuery from "react-responsive";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  componentDidMount() {
    Aos.init({});
  }
  render() {
    return (
      <div>
        <MediaQuery minWidth={1150}>
          {(matches) => {
            return matches ? <NavBar /> : <NavBarHam />;
          }}
        </MediaQuery>
        <Banner />
        <About />
        <Skills />
        <MediaQuery minWidth={1150}>
          {(matches) => {
            return matches ? <Experience /> : <ExperienceResp />;
          }}
        </MediaQuery>
        <Education />
        <Projects />
        <GetInTouch />
        <Footer />
      </div>
    );
  }
}

export default App;
