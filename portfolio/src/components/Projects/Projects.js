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
              imgPath={project}
              isBlog={false}
              title="Bachelor Degree Project"
              description="childcare software โดยทำทั้ง website และ mobile
              สามารถอ่านรายละเอียดได้ใน github"
              ghLink="https://github.com/prwthub"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webboard}
              isBlog={false}
              title="Webboard Project"
              description="Webboard โดยใช้ HTML,CSS,Java Script,PHP และ Bootstrap
              และใช้ database เป็น MySQL"
              ghLink="https://github.com/prwthub"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodwebboard}
              isBlog={false}
              title="Food Webboard Project"
              description="นำ Webboard Project เก่ามา reuse โดยใช้โครงสร้างเดิม แต่พัฒนาให้มีฟีเจอร์ให้ดียิ่งขึ้น"
              ghLink="https://github.com/prwthub"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="University Grading Project"
              description="ออกแบบ university grading API โดยใช้ Apiary และพัฒนาโดยใช้ภาษา Rust"
              ghLink="https://github.com/prwthub"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postman}
              isBlog={false}
              title="Postman"
              description="ออกแบบการสอน Testing API โดยใช้ Postman"
              ghLink="https://github.com/prwthub"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="React"
              description="เรียนรู้ React เบื้องต้น"
              ghLink="https://github.com/prwthub"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appium}
              isBlog={false}
              title="Appium"
              description="เรียนรู้ Appium เบื้องต้น ด้วยตนเอง"
              ghLink="https://github.com/prwthub"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robot}
              isBlog={false}
              title="Robot"
              description="เรียน Robot เบื้องต้น ด้วยตนเอง"
              ghLink="https://github.com/prwthub"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
