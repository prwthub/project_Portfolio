import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSelenium,
  SiRobotframework,
  SiMysql,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
          <p className="tech-label">Git</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
          <p className="tech-label">Postman</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSelenium />
          <p className="tech-label">Selenium</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
          <p className="tech-label">Mysql</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRobotframework />
          <p className="tech-label">Robot framework</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
          <p className="tech-label">Visual studio</p>
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
