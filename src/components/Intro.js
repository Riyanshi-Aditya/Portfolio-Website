import React from "react";
import { Link } from "react-scroll";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
// import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hii!, "}
            <span className="intro-name">{"Riyanshi"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle" style={{ fontStyle: "italic" }}>
            Turning coffee into clean code.
          </div>
          <div className="intro-desc">
            A Web Developer from NIT Srinagar, passionate about crafting clean,
            efficient, and visually appealing web solutions while constantly
            improving my logic and programming through DSA practice.
          </div>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="intro-contact"
          >
            <EmailRoundedIcon />
            {`  Ping Me!`}
          </Link>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
