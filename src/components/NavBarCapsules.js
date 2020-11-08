import React from "react";
import "./styles.css";
import Capsule from "./Capsule";
import { Link } from "react-scroll";

class NavBarCapsules extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldShrink: false,
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
      shouldShrink: document.body.getBoundingClientRect().top < -460,
    });
  };

  render() {
    return (
      <div
        className="Categories"
        style={{
          marginLeft: this.state.shouldShrink ? "0%" : "8%",
        }}
      >
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <Capsule
            name="About"
            from={{ opacity: this.state.shouldShrink ? 0: 1 }}
            to={{ opacity: 1 }}
            config={{ delay: 5000, duration: 500 }}
          />
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <Capsule
            name="Skills"
            from={{ opacity: this.state.shouldShrink ? 0: 1  }}
            to={{ opacity: 1 }}
            config={{ delay: 5300, duration: 500 }}
          />
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <Capsule
            name="Experience"
            from={{ opacity: this.state.shouldShrink ? 0: 1  }}
            to={{ opacity: 1 }}
            config={{ delay: 5600, duration: 500 }}
          />
        </Link>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <Capsule
            name="Education"
            from={{ opacity: this.state.shouldShrink ? 0: 1  }}
            to={{ opacity: 1 }}
            config={{ delay: 5900, duration: 500 }}
          />
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <Capsule
            name="Projects"
            from={{ opacity: this.state.shouldShrink ? 0: 1  }}
            to={{ opacity: 1 }}
            config={{ delay: 6200, duration: 500 }}
          />
        </Link>
      </div>
    );
  }
}

export default NavBarCapsules;
