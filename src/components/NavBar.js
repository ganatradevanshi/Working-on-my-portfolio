import React from "react";
import "./styles.css";
import { Spring } from "react-spring/renderprops";
import NavBarCapsules from "./NavBarCapsules";
import { Link } from "react-scroll";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisibile: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handlecroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handlecroll);
  }

  handlecroll = () => {
    this.setState({
      isVisibile: document.body.getBoundingClientRect().top < -590,
    });
  };

  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1400, duration: 3000 }}
      >
        {(props) => (
          <div
            className="MyNav"
            style={{
              paddingLeft: this.state.isVisibile ? "1%" : "10%",
              paddingRight: this.state.isVisibile ? "1%" : "10%",
              backgroundColor: this.state.isVisibile ? "#193964" : "#A3CEEE",
              webkitTransition: "all 0.6s ease-out",
              mozTransition: "all 0.6s ease-out",
              oTransition: "all 0.6s ease-out",
              msTransition: "all 0.6s ease-out",
              transition: "all 0.6s ease-out",
            }}
          >
            <div>
              {/* TODO: find a better way to refresh the page  */}
              <a href="JavaScript: location.reload(true);">
                <img
                  alt="logo"
                  className="DbgLogo"
                  src={require("../Icons/logo white.png")}
                />
              </a>
            </div>

            <div
              className="SocialWrapper"
              style={{
                visibility: this.state.isVisibile ? "visible" : "hidden",
              }}
            >
              <div
                className="SocialWrapper"
                style={{
                  position: "absolute",
                }}
              >
                <div className="NavBarCapsulesSticky">
                  <NavBarCapsules />
                </div>
                <Link
                  activeClass="active"
                  to="getintouch"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  <div>
                    <div className="Connect">Get in touch</div>
                  </div>
                </Link>
              </div>

              <div
                className="SocialWrapper"
                style={{
                  visibility: this.state.isVisibile ? "hidden" : "visible",
                }}
              >
                <Link
                  activeClass="active"
                  to="getintouch"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  <div>
                    <div className="Connect">Get in touch</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default NavBar;
