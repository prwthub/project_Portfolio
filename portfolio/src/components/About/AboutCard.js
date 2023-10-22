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

            I'm a person who likes to learn new things. 
            <br />
            And I'm interested in :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Software Tester
            </li>
            <li className="about-activity">
              <ImPointRight /> Java Developer
            </li>
            <li className="about-activity">
              <ImPointRight /> Font-End Developer
            </li>
          </ul>

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
