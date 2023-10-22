import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import webboard from "../../Assets/Projects/webboard.png";
import foodwebboard from "../../Assets/Projects/foodwebboard.png";
import cloud from "../../Assets/Projects/cloud.png";
import postman from "../../Assets/Projects/postman.png";
import react from "../../Assets/Projects/react.png";
import project from "../../Assets/Projects/project.png";
import appium from "../../Assets/Projects/appium.png";
import robot from "../../Assets/Projects/robot.png";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience.</strong>
        </h1>
        <p style={{ color: "white" }}>
            Collection of pictures of my experiences. 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={webboard}
              isBlog={false}
              title="webboard"
              description="..."
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
