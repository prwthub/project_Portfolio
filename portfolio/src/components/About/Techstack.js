import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiPython, DiJava, DiHtml5, DiCss3, DiPhp, DiCode, DiDart } from "react-icons/di";

function Techstack() {
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="tech-label">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="tech-label">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p className="tech-label">HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p className="tech-label">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-label">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <p className="tech-label">PHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode />
        <p className="tech-label">SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDart />
        <p className="tech-label">Dart</p>
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
