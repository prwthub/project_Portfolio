import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSelenium,
  SiRobotframework,
  SiMysql,
  SiGit,
  SiFirebase,
  SiApachenetbeanside,
  SiPycharm,
  SiGithub
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
          <SiGithub />
          <p className="tech-label">Github</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
          <p className="tech-label" style={{fontSize:"32px"}}>Visual</p>
          <p className="tech-label" style={{fontSize:"32px"}}>studio</p>
          {/* <p className="tech-label" style={{fontSize : "32px"}}>Visual studio</p> */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiApachenetbeanside />
          <p className="tech-label">NetBeans</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPycharm />
          <p className="tech-label">Pycharm</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
          <p className="tech-label">Firebase</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
          <p className="tech-label">MySQL</p>
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
          <SiRobotframework />
          <p className="tech-label" style={{fontSize:"32px"}}>Robot</p>
          <p className="tech-label" style={{fontSize:"32px"}}>framework</p>
          {/* <p className="tech-label" style={{fontSize : "32px"}}>Robot framework</p> */}
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;