import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <div
        id="experience"
        style={MainDiv}
        data-aos="fade-down"
        data-aos-duration="9000"
      >
        <div style={Heading}>
          <div>Experience</div>
        </div>
        <div
          className="container"
          style={{
            // backgroundColor: "#F1F2F2",
            backgroundColor: "white",
            padding: "1%",
            borderRadius: "10px",
          }}
        >
          <div className="row d-flex justify-content-center" style={Content}>
            <div className="Ex" data-aos="zoom-in" style={WorkExdivs}>
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  justifyContent: "space-around",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  alt="companylogo"
                  style={{ maxWidth: "70%", maxHeight: "70%" }}
                  src={require("../Icons/Icons-05.png")}
                />
                <div
                  style={{
                    fontSize: "15px",
                    color: "#193964",
                    fontWeight: "bold",
                  }}
                >
                  2020
                </div>
              </div>
              <div className="ExpSub">
                <ul>
                  <li>
                    Khoury College of Computer Sciences – Designed course
                    material and exams for Introduction to Web Development.
                  </li>
                  <li>
                    Facilitated doubt solving sessions and assisted with
                    grading.
                  </li>
                </ul>
              </div>
            </div>
            <div className="Ex" data-aos="zoom-in" style={WorkExdivs}>
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  alt="companylogo"
                  style={{ maxWidth: "70%", maxHeight: "70%" }}
                  src={require("../Icons/Icons-06.png")}
                />
                <div
                  style={{
                    fontSize: "15px",
                    color: "#193964",
                    fontWeight: "bold",
                  }}
                >
                  2019
                </div>
              </div>
              <div className="ExpSub">
                <ul>
                  <li>
                    Implemented new feature in the production desktop app using
                    React, Redux, NodeJs, C++ and testing in Jest, Shallow,
                    Enzyme, ensuring 100% test coverage.
                  </li>
                  <li>
                    Improved performance and security in legacy code; solved 10+
                    critical bugs making the app more efficient and user
                    friendly.
                  </li>
                  <li>
                    Redesigned and developed new UI for production mobile app in
                    React Native, boosting app downloads by 41%.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="Ex"
              data-aos="zoom-in"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "650px",
              }}
            >
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  alt="companylogo"
                  style={{
                    maxWidth: "70%",
                    maxHeight: "70%",
                    paddingTop: "20%",
                  }}
                  src={require("../Icons/Icons-07.png")}
                />

                <div
                  style={{
                    fontSize: "15px",
                    color: "#193964",
                    fontWeight: "bold",
                  }}
                >
                  2015-2017
                </div>
              </div>
              <div className="ExpSub">
                <ul>
                  <li>
                    Practiced process-oriented approach to identify solutions
                    -which involved requirement gathering, analyzing business
                    process, developing alternative solutions and evaluating for
                    cost-benefit and feasibility and managing solutions.
                  </li>
                  <li>
                    Upgraded and optimized LAN for ATT and IBM to propose a
                    high-level network design which optimized cost by 30%.
                  </li>
                  <li>
                    Implemented steering complex high-level LAN, Data Center,
                    Network Wireless and Shared Network Infrastructure designing
                    environments using customer specific process tools to
                    propose a design that optimized cost by 20%.
                  </li>
                </ul>
              </div>
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
};

const Content = {
  fontSize: "25px",
  color: "black",
};

const WorkExdivs = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRight: "2px solid #ffd56f",
  height: "650px",
};
export default Experience;
