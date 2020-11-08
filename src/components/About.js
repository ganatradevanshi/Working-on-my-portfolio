import React from "react";
import MyImg from "../Icons/img-devanshiProfile.png";

function About() {
  return (
    <div id="about" style={MainDiv} data-aos="fade-in" data-aos-duration="9000">
      <div style={Heading}>
        <div>About</div>
      </div>
      <div className="container" style={Body}>
        <div className="row" style={ImageAndBody}>
          <div className="col-lg-4 col-md-5 col-sm-7">
            <img alt="profile image" style={Img} src={MyImg} />
          </div>
          <div className="col-lg-4 ol-md-5 col-sm-12" style={Content}>
            <span>
              Hey there! <br />
              This is Devanshi here. <br />
            </span>
            <span>
              <br />I am a <b>Computer Science</b> graduate student at
              <a
                href="https://www.khoury.northeastern.edu/"
                style={{ color: "inherit" }}
              >
                <b>Northeastern Univeristy</b>.
              </a>
              I enjoy anything that involves inventiveness, novelty or
              transforming imagination to reality; hence I closely associate
              myself with web development and love creating new things on the
              web.
            </span>
            <span>
              <br />
              <br />
              <br />
              <div>
                <div className="Connect" style={{ width: "230px" }}>
                  Grab my resume
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const MainDiv = {
  marginTop: "20px",
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

const Body = {
  backgroundColor: "#F1F2F2",
  padding: "1%",
  borderRadius: "10px",
};

const Img = {
  borderRadius: "10px",
  maxWidth: "100%",
  maxHeight: "100%",
  margin: "1%",
  display: "inline-block",
};

const Content = {
  fontSize: "22px",
  color: "#515050",
  margin: "1%",
  textAlign: "left",
};

const ImageAndBody = {
  display: "flex",
  justifyContent: "space-evenly",
  textAlign: "center",
  alignItems: "center",
  padding: "3%",
};

export default About;
