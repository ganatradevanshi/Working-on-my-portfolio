import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div
        id="education"
        style={MainDiv}
        data-aos="fade-down"
        data-aos-duration="9000"
      >
        <div style={Heading}>
          <div>Education</div>
        </div>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="card"
              data-aos="zoom-in"
              style={{
                padding: "3%",
                backgroundColor: "#F8DD74",
                width: "60%",
                // height: "200px",
                border: "none",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
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
                  alt="school logo"
                  src={require("../Icons/Icons-05.png")}
                  style={{ maxWidth: "80%", maxHeight: "80%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div style={Content}>
                  Northeastern University <br /> <b>MS Computer Science</b>{" "}
                </div>
                <div
                  style={Content}
                  style={{
                    marginTop: "5%",
                    color: "#515050",
                    textAlign: "center",
                    display: "inline-block",
                  }}
                >
                  2018-2020, Boston, USA
                </div>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              style={{
                padding: "3%",
                backgroundColor: "#F8DD74",
                width: "60%",
                // height: "200px",
                border: "none",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
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
                  alt="school logo"
                  src={require("../Icons/Icons-20.png")}
                  style={{ maxWidth: "80%", maxHeight: "80%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div style={Content}>
                  Gujarat Technological University <br />{" "}
                  <b>BE Information Technology</b>{" "}
                </div>
                <div
                  style={Content}
                  style={{
                    marginTop: "5%",
                    color: "#515050",
                    textAlign: "center",
                    display: "inline-block",
                  }}
                >
                  2011-2015, Ahmedabad, India
                </div>
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
  fontSize: "22px",
  color: "#515050",
  textAlign: "center",
  display: "inline-block",
};

export default Education;
