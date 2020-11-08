import React from "react";
import "./styles.css";
import SkillsCard from "./SkillsCard";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

function Skills() {
  return (
    <div
      id="skills"
      style={MainDiv}
      data-aos="fade-down"
      data-aos-duration="9000"
    >
      <div style={Heading}>
        <div>Skills</div>
      </div>
      <div
        style={{
          backgroundColor: "#F1F2F2",
          padding: "1%",
        }}
      >
        <div style={Content}>
          <div className="container">
            <div
              className="row d-flex"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SkillsCard
                icon={require("../Icons/Icons-01.png")}
                cardName={"Front End"}
                skills={[
                  { name: "React | Redux" },
                  { name: "Angular" },
                  { name: "Javascript" },
                  { name: "HTML5" },
                  { name: "CSS" },
                ]}
              />
              <SkillsCard
                icon={require("../Icons/Icons-02.png")}
                cardName={"Server"}
                skills={[
                  { name: "Java" },
                  { name: "C" },
                  { name: "C++" },
                  { name: "NodeJS" },
                  { name: "Express" },
                  { name: "Flask" },
                ]}
              />
              <SkillsCard
                icon={require("../Icons/Icons-03.png")}
                cardName={"Database"}
                skills={[{ name: "mySQL" }, { name: "MongoDB" }]}
              />
              <SkillsCard
                icon={require("../Icons/Icons-04.png")}
                cardName={"Deployment"}
                skills={[
                  { name: "AWS" },
                  { name: "Heroku" },
                  { name: "Travis CI" },
                  { name: "Git" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
  fontSize: "25px",
  color: "white",
  margin: "1%",
  padding: "5%",
};

export default Skills;
