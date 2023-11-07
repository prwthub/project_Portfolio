import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>prwthub</h3>
          {/* <h3 style={{fontSize:"10px"}}>reference : soumyajit4419</h3> */}
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>on {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/p.perawit"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/p_prwt/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/prwthub"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:perawit37@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li>
              <h3>My contact</h3>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;