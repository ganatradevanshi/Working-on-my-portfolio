import React from "react";
import "./styles.css";
import { Spring } from "react-spring/renderprops";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";

class NavBarHam extends React.Component {
  constructor() {
    super();
    this.state = {
      changeNavColor: false,
      open: false,
      showDropDown: false,
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
    window.addEventListener("scroll", this.handlecroll);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
    window.removeEventListener("scroll", this.handlecroll);
  }
  updateWidth = () => {
    this.setState({
      width: window.innerWidth,
    });
  };
  handlecroll = () => {
    this.setState({
      changeNavColor: document.body.getBoundingClientRect().top < -590,
    });
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open,
      showDropDown: !this.state.showDropDown,
    });
  };

  render() {
    // console.log(this.state.open);
    // console.log(document.body.getBoundingClientRect().top);
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1400, duration: 3000 }}
      >
        {(props) => (
          <div>
            <div
              className="MyNav"
              style={{
                backgroundColor: this.state.changeNavColor
                  ? "#193964"
                  : "#A3CEEE",
                webkitTransition: "all 0.6s ease-out",
                mozTransition: "all 0.6s ease-out",
                oTransition: "all 0.6s ease-out",
                msTransition: "all 0.6s ease-out",
                transition: "all 0.6s ease-out",
              }}
            >
              <div
              >
                {/* TODO: find a better way to refresh the page  */}
                <a href="JavaScript: location.reload(true);">
                  <img
                    alt="logo"
                    className="DbgLogo"
                    src={require("../Icons/logo white.png")}
                  />
                </a>
              </div>
              <div>
                <HamburgerMenu
                  isOpen={this.state.open}
                  menuClicked={this.handleClick.bind(this)}
                  width={18}
                  height={15}
                  strokeWidth={1}
                  rotate={0}
                  color="white"
                  borderRadius={0}
                  animationDuration={0.5}
                />
              </div>
            </div>

            <div
              className="NavHamDropdown shadow"
              style={{
                // marginLeft: this.state.width - 300,
                marginTop: "105px",
                // padding: "15px",
                position: "fixed",
                // visibility: this.state.showDropDown ? "visible" : "hidden",
                width: this.state.showDropDown ? "300px" : "0px",
                backgroundColor: this.state.changeNavColor
                  ? "#193964"
                  : "#A3CEEE",
              }}
            >

              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1200}
              >
                <div
                  style={{
                    fontFamily: "papyrus",
                    fontWeight: "bold",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="shadow rounded mb-4 Tabs">About</div>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1200}
              >
                <div
                  style={{
                    fontFamily: "papyrus",
                    fontWeight: "bold",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="shadow rounded mb-4 Tabs">Skills</div>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1200}
              >
                <div
                  style={{
                    fontFamily: "papyrus",
                    fontWeight: "bold",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="shadow rounded mb-4 Tabs">Experience</div>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1200}
              >
                <div
                  style={{
                    fontFamily: "papyrus",
                    fontWeight: "bold",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="shadow rounded mb-4 Tabs">Education</div>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1200}
              >
                <div
                  style={{
                    fontFamily: "papyrus",
                    fontWeight: "bold",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="shadow rounded mb-4 Tabs">Projects</div>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1200}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
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
              </Link>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default NavBarHam;
