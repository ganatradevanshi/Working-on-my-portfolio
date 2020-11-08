import React from "react";
import "./styles.css";
import ProjectCard from "./ProjectCard";

class Projects extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        id="work"
        style={MainDiv}
        data-aos="fade-down"
        data-aos-duration="9000"
      >
        <div style={Heading}>
          <div>Projects</div>
        </div>
        <div
          style={{
            backgroundColor: "#F1F2F2",
            padding: "1%",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="row d-flex justify-content-center Project"
              style={Content}
            >
              <ProjectCard
                projectName={"Slick Chat"}
                projectContent={
                  "A new age chat application, facilitating secure exchange of text, documents and images between sender, receiver and groups. "
                }
                icon={require("../Icons/Icons-09.png")}
                id={"one"}
                skills={[
                  { name: "Angular" },
                  { name: "Java" },
                  { name: "MongoDB" },
                ]}
              />
              <ProjectCard
                projectName={"Pro-Manager"}
                projectContent={
                  "Mobile first website that allows "
                }
                icon={require("../Icons/Icons-11 3.png")}
                id={"two"}
                skills={[
                  { name: "React | Redux" },
                  { name: "Spring" },
                  { name: "MySQL" },
                  { name: "Heroku" },
                ]}
              />
              <ProjectCard
                projectName={"Record Space"}
                projectContent={
                  "Hello World mbvm bnv mn mvm mvbvm mcbcncn jsnfbs"
                }
                icon={require("../Icons/Icons-12.png")}
                id={"three"}
                skills={[
                  { name: "MEAN" },
                  { name: "Github pages" },
                  { name: "TravisCI" },
                ]}
              />
              <ProjectCard
                projectName={"Offensive-Tweet-Filter"}
                projectContent={
                  "Implements sentiment analysis & logistic regression to replace offensive keywords with humorous phrases, to combat cyberbullying on social media."
                }
                icon={require("../Icons/Icons-13.png")}
                id={"four"}
                skills={[{ name: "Python" }, { name: "Flask" }]}
              />
              <ProjectCard
                projectName={"Free Cell"}
                projectContent={
                  "Hello World mbvm bnv mn mvm mvbvm mcbcncn jsnfbs"
                }
                icon={require("../Icons/Icons-14.png")}
                id={"five"}
                skills={[
                  { name: "MVC" },
                  { name: "Java Swing" },
                  { name: "JUnit" },
                ]}
              />
              <ProjectCard
                projectName={"Aplhabetic Hand Gesture Recognition"}
                projectContent={
                  "Hello World mbvm bnv mn mvm mvbvm mcbcncn jsnfbs"
                }
                icon={require("../Icons/Icons-21 2.png")}
                id={"six"}
                skills={[{ name: "MATLAB" }, { name: "XLMiner" }]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MainDiv = {
  marginTop: "70px",
};

const Heading = {
  justifyContent: "center",
  display: "flex",
  fontWeight: "bold",
  fontSize: "40px",
  fontFamily: "playfair display",
  color: "#193964",
  padding: "3%",
  backgroundColor: "#F1F2F2",
};

const Content = {
  fontWeight: "bold",
  fontSize: "22px",
  // fontFamily: "papyrus",
  color: "rgb(68, 68, 68)",
  margin: "1%",
  // textAlign: "left",
  display: "flex",
};

const Button = {
  borderRadius: "50px",
  border: "none",
  width: "fit-content",
};

export default Projects;
