import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import student from "../../Assets/Exp/student.JPG";
import festo from "../../Assets/Exp/festo.jpg";
import study from "../../Assets/Exp/study.JPG";
import car from "../../Assets/Exp/car.jpeg";
import benz from "../../Assets/Exp/benz.jpeg";
import farewell from "../../Assets/Exp/farewell.jpeg";

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
              imgPath={student}
              isBlog={false}
              title="Germany Internship"
              description="สอบชิงทุนไปฝึกงานที่เยอรมัน เป็นระยะเวลาทั้งสิ้น 3 เดือน 
              โดยไปฝึกที่มหาลัย Esslingen University of Applied Sciences"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={festo}
              isBlog={false}
              title="Festo trip"
              description="ไปดูและศึกษางานที่บริษัท Festo ประเทศไทย กับทางมหาลัย เนื่องจากบริษัทให้ทุนสนับสนุนค่าที่พักในเยอรมัน"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={study}
              isBlog={false}
              title="Exchange student"
              description="เป็นนักเรียนแลกเปลี่ยนไปเรียนหลักสูตรพื้นฐานที่มหาลัยเยอรมัน"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={car}
              isBlog={false}
              title="Participate in projects"
              description="มีส่วนร่วมกับโปรเจคของมหาลัยที่เยอรมันในการพัฒนาระบบที่ไปประยุกต์ใช้กับรถยนต์
              โดยเริ่มจากระบบพื้นฐานโดยใช้ robot car"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={benz}
              isBlog={false}
              title="Mercedes Benz trip"
              description="มีส่วนร่วมในการไปดูงานที่พิพิธภัณฑ์ Mercedes Benz ที่เมือง stuttgart กับทางมหาลัยที่เยอรมัน"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={farewell}
              isBlog={false}
              title="Farewell Meeting"
              description="เข้าร่วมกิจกรรมกับทางมหาลัยที่เยอรมันครั้งสุดท้ายก่อนกลับไทย"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
