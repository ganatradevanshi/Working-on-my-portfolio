import React from "react";
import "./styles.css";
import { Spring } from "react-spring/renderprops";
import NavBarCapsules from "./NavBarCapsules";
import MediaQuery from "react-responsive";

function Banner() {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={BannerStyle}>
          <div className="container" style={Group}>
            <div
              style={props}
              style={DevanshiBipinGanatra}
              className="row ml-0 mr-0"
            >
              <div className="col-lg-5 col-sm-12" style={Name}>Devanshi</div>
              <div className="col-lg-3 col-sm-12" style={Name}>Bipin</div>
              <div className="col-lg-4 col-sm-12" style={Name}>Ganatra</div>
            </div>
            <div
              style={props}
              style={FullStackEngineer}
              className="col-md-12 col-sm-12 col-12 text-align-center ml-0 mr-0"
            >
              <div className="text-lg-right text-md-center text-sm-center text-xs-center">
                FULL STACK ENGINEER
              </div>
            </div>
          </div>
          <MediaQuery minWidth={1150}>
            {(matches) => {
              return matches ? (
                <div className="container">
                  <NavBarCapsules />
                </div>
              ) : (
                <></>
              );
            }}
          </MediaQuery>
        </div>
      )}
    </Spring>
  );
}

const BannerStyle = {
  backgroundColor: "#a3ceee",
  color: "rgb(68, 68, 68)",
  height: "700px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  paddingLeft: "5%",
  paddingRight: "5%",
  paddingTop: "85px",
};

const DevanshiBipinGanatra = {
  color: "#ea5d5a",
  fontFamily: "playfair display",
  fontSize: "65px",
  display: "flex",
  alignItems: "flex-end",
  fontWeight: "bold",
  justifyContent: "center",
};

const FullStackEngineer = {
  color: "white",
  fontWeight: "bold",
  fontSize: "30px",
};

const Group = {
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-end",
}

const Name = {
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "65px",
  justifyContent: "center",
}

export default Banner;
