import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div style={{ marginTop: "20%" }} className="row Footer">
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
          src={require("../Icons/logo white.png")}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "30px" }} className="DevanshiBipinGanatra">
            Devanshi Bipin Ganatra
          </span>
          <span style={{ fontSize: "20px" }} className="FullStackEngineer">
            FULL STACK ENGINEER
          </span>
        </div>
        {/* <div > */}
          <div style={{ marginTop: "10%" }}>Find me on:</div>
          <div
            className="row mr-0 pr-0"
          >
            <div className="ic" style={{ width: "70px", height: "70px" }}>
              <a href="https://www.linkedin.com/in/devanshi-bipin-ganatra/">
                <img
                  alt="LinkedInIcon"
                  src={require("../Icons/Icons-16.png")}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </a>
            </div>
            <div className="ic" style={{ width: "70px", height: "70px", marginLeft: "10px" }}>
              <a href="https://github.com/devanshiganatra93">
                <img
                  alt="GitIcon"
                  src={require("../Icons/Icons-17.png")}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </a>
            </div>
            <div className="ic" style={{ width: "70px", height: "70px", marginLeft: "10px" }}>
              <a href="https://www.facebook.com/devanshibipin.ganatra">
                <img
                  alt="FacebookIcon"
                  src={require("../Icons/Icons-18.png")}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </a>
            </div>
            <div className="ic" style={{ width: "70px", height: "70px", marginLeft: "10px" }}>
              <a href="https://instagram.com/art_dbg">
                <img
                  alt="InstagramIcon"
                  src={require("../Icons/Icons-19.png")}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </a>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Footer;
