import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple"> Perawit Anansukatham. </span> You can call me "P".
            <br /> 
            I'm currently studying in my 4th year of a bachelor's degree. 
            <br />
            In <span className="purple">Department of Electronics Engineering-Computers</span>
            <br />
            at King Mongkut's University of Technology North Bangkok. 
            <br />
            <br />
          </p>

          <p style={{ textAlign: "justify", marginBottom: "1px"}}>And I'm interested in :</p>
          <ul>
            <li className="about-activity" style={{marginBottom: "3px"}}>
              -<span className="purple"> Software Tester</span>
            </li>
            <li className="about-activity" style={{marginBottom: "3px"}}>
              -<span className="purple"> Java Developer</span>
            </li>
            <li className="about-activity"style={{marginBottom: "3px"}}>
              -<span className="purple"> Font-End Developer</span>
            </li>
          </ul>

          <br />
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Set tough goals and do not stop until you get there."{" "}
          </p>
          <footer className="blockquote-footer">prwt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
