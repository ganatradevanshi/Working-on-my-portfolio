import React from "react";
import "./styles.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

function SkillsCard({ icon, cardName, skills }) {
  return (
    <div
      className="card border-0 ProjectCard ml-2 mr-2  mt-2 mb-2"
      data-aos="zoom-in"
      style={{
        padding: "5%",
        width: "250px",
        position: "relative",
        justifyContent: "center",
        opacity: "0.9",
        backgroundColor: "#EA5D5A",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          alt="skillicon"
          style={{ maxWidth: "80%", maxHeight: "80%" }}
          src={icon}
        />
      </div>
      <div className="mt-3" style={{ color: "white" }}>
        {cardName}
      </div>
      <div
        className="SkillsCardLayover rounded"
        style={{
          padding: "8%",
          backgroundColor: "#193964",
          fontSize: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            borderBottom: "1px",
            textAlign: "center",
            padding: "0.5rem",
          }}
        >
          {skills.map((skills) => (
            <li
              style={{
                borderBottom: "1px solid #eee",
                padding: "0.5rem",
              }}
            >
              {skills.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsCard;
