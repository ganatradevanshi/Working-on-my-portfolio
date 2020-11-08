import React from "react";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  openSlider = (id) => {
    document.getElementById(id).classList.add("ProjectCardOverlayVisible");
  };

  closeSlider = (id) => {
    document.getElementById(id).classList.remove("ProjectCardOverlayVisible");
  };

  render() {
    return (
      <div
        className="card border-0 ProjectCard ml-2 mr-2 mt-2 mb-2"
        data-aos="zoom-in"
        data-aos-duration="10000"
      >
        <div className="ProjectNameLighter">
          <div>{this.props.projectName}</div>
        </div>
        <div id={this.props.id} className="ProjectCardOverlay">
          <div className="ProjectCardText">
            <div
              style={{
                height: "70%",
                paddingLeft : "4%",
                paddingRight: "4%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {this.props.projectContent}
            </div>
            <div
              style={{
                height: "30%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                alt="close"
                src={require("../Icons/Icons-10.png")}
                style={{ maxWidth: "65%", maxHeight: "65%" }}
                onClick={() => this.closeSlider(this.props.id)}
              />
            </div>
          </div>
        </div>
        <div className="ProjectContentLighter p-4">
          <div style={{ fontSize: "18px", alignSelf: "start" }}>
            <div>
              <ul
                style={{
                  listStyleType: "none",
                  textAlign: "start",
                  padding: "0.5rem",
                }}
              >
                {this.props.skills.map((skills) => (
                  <li
                  // style={{
                  //   padding: "0.5rem",
                  // }}
                  >
                    {skills.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              paddingBottom: "15px",
            }}
          >
            <div className="ArrowButton">
              <img
                alt="open"
                src={require("../Icons/Icons-15.png")}
                style={{ maxWidth: "30%", maxHeight: "30%" }}
                onClick={() => this.openSlider(this.props.id)}
              />
            </div>

            <img
              alt="projecticon"
              src={this.props.icon}
              style={{ maxWidth: "50%", maxHeight: "50%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
