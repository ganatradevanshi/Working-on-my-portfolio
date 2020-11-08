import React from "react";
import { Spring } from "react-spring/renderprops";
import "./styles.css";

class Capsule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addPadding: false,
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
      addPadding: document.body.getBoundingClientRect().top < -460,
    });
  };


  render() {
    return (
      <Spring
        from={this.props.from}
        to={this.props.to}
        config={this.props.config}
        background={this.props.background}
      >
        {(props) => (
          <div style={props}>
            <div style={{marginLeft: this.state.addPadding ? "18px" : "0px"}} className="Tabs">{this.props.name}</div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Capsule;
