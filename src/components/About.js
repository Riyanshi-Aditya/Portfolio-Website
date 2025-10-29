import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      showPopup: false,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  handleResumeClick = () => {
    this.setState({ showPopup: true });
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  openResume = () => {
    window.open("/assets/Riyanshi_Resume_Portfolio.pdf", "_blank");
    this.setState({ showPopup: false });
  };

  render() {
    const one = (
      <p>
        I am currently a third year B.tech student in{" "}
        <b>Information Technology</b> at
        <a href="https://www.nitsri.ac.in/">
          {" "}
          National Intitute of Technology, Srinagar
        </a>
        . I enjoy building responsive and user-friendly applications that
        prioritize both creativity and functionality. Alongside development, I
        am actively improving my Data Structures and Algorithms skills to
        strengthen my problem-solving abilities.
      </p>
    );
    const two = (
      <p className="about-resume" onClick={this.handleResumeClick}>
        Resume
      </p>
    );

    /*const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:gazi.jarin@mail.utoronto.ca">
          gazi.jarin@mail.utoronto.ca
        </a>{" "}
        and let's talk.
      </p>
    );
     const desc_items = [one, two];
*/
    const tech_stack = [
      "Javascript ES6+",
      "C++",
      "React.js",
      "C",
      "Node.js",
      "HTML & CSS",
    ];

    // const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ About me</span>
          </div>

          <div className="about-content">
            <div className="about-description">
              {one}
              {"Here are some technologies I have been working with:"}

              <ul className="tech-stack">
                {tech_stack.map((tech_item, i) => (
                  <FadeInSection key={i} delay={`${(i + 1) * 100}ms`}>
                    <li>{tech_item}</li>
                  </FadeInSection>
                ))}
              </ul>

              {two}

              {/* ✅ Popup moved outside map & works properly now */}
              {this.state.showPopup && (
                <div className="popup-overlay">
                  <div className="popup-box">
                    <h3>Do you want to open Riyanshi’s Resume?</h3>
                    <div className="popup-buttons">
                      <button
                        className="popup-btn yes"
                        onClick={this.openResume}
                      >
                        Yes
                      </button>
                      <button
                        className="popup-btn no"
                        onClick={this.closePopup}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="about-image">
              <img src={"/assets/riyanshi_image.png"} alt="Riyanshi" />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
