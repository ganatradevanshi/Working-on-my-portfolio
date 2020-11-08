import React from "react";

class GetInTouch extends React.Component {
  render() {
    return (
      <div
        id="getintouch"
        style={MainDiv}
        data-aos="fade-down"
        data-aos-duration="9000"
      >
        <div style={Heading}>
          <div>Get in touch</div>
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="card"
            data-aos="zoom-in"
            style={{
              padding: "3%",
              width: "70%",
              //   height: "250px",
              border: "none",
              //   marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              borderStyle: "solid",
              borderColor: "#193964",
              borderWidth: "5px",
            }}
          >
            <div style={Content}>Want to know more about me ?</div>
            <div
            className="row  col-lg-12 d-flex justify-content-center"
              style={{
                display: "flex",
                // justifyContent: "space-around",
              }}
            >
              <div
                className="Connect"
                style={{ margin: "2%", padding: "8px"}}
              >
                Grab my resume
              </div>
              <div
            //   className="row  col-lg-5 d-flex justify-content-center"
                className="Connect"
                style={{
                //   width: "100%",
                  margin: "2%",
                  color: "#EA5D5A",
                  backgroundColor: "white",
                  border: "solid",
                  
                }}
              >
                Send an email
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

export default GetInTouch;
