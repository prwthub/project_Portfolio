import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/mypic.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "75px",
            }}
          >
            <h1 style={{ fontSize: "24", paddingBottom: "20px" }}>
              Who <strong className="purple">am I.</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "5px", paddingBottom: "0px"  }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{width:"90%", borderRadius:"15px"}}/>
          </Col>
        </Row>

        <div style={{paddingTop: "50px"}}></div>
        <h1 className="project-heading">
          My <strong className="purple">Skills</strong>
        </h1>
        <Techstack />

        <div style={{paddingTop: "125px"}}></div>
        <h1 className="project-heading" style={{paddingTop: "0px"}}>
          My <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />

        
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
