import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webboard from "../../Assets/Projects/webboard.png";
import foodwebboard from "../../Assets/Projects/foodwebboard.png";
import cloud from "../../Assets/Projects/cloud.png";
import postman from "../../Assets/Projects/postman.png";
import react from "../../Assets/Projects/react.png";
import project from "../../Assets/Projects/project.png";
import appium from "../../Assets/Projects/appium.png";
import robot from "../../Assets/Projects/robot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects.</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webboard}
              isBlog={false}
              title="webboard"
              description="..."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodwebboard}
              isBlog={false}
              title="food webboard"
              description="..."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="cloud"
              description="..."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postman}
              isBlog={false}
              title="postman"
              description="..."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="react"
              description="..."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="project"
              description="..."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appium}
              isBlog={false}
              title="appium"
              description="..."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robot}
              isBlog={false}
              title="robot"
              description="..."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
