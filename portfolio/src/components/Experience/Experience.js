import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import student from "../../Assets/Experience/student.JPG";
import festo from "../../Assets/Experience/festo.jpg";
import study from "../../Assets/Experience/study.JPG";
import car from "../../Assets/Experience/car.jpeg";
import benz from "../../Assets/Experience/benz.jpeg";
import farewell from "../../Assets/Experience/farewell.jpeg";

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
              description="สอบชิงทุนไปฝึกงานที่เยอรมัน เป็นระยะเวลา 3 เดือน 
              โดยได้ไปฝึกที่มหาลัย Esslingen University of Applied Sciences"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={festo}
              isBlog={false}
              title="Festo trip"
              description="ไปดูและศึกษางานที่บริษัท Festo ประเทศไทย กับทางมหาลัย 
              เนื่องจากบริษัทให้การสนับการเรียนรู้และให้ทุนสนับสนุนค่าที่พักในเยอรมัน"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={study}
              isBlog={false}
              title="Exchange student"
              description="เข้าเรียนหลักสูตรพื้นฐานที่มหาลัย
              Esslingen University of Applied Sciences ในเยอรมัน"
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
              description="มีส่วนร่วมในการไปดูงานและเข้าชมพิพิธภัณฑ์ Mercedes Benz ที่เมือง stuttgart 
              ร่วมกับศาสตราจารย์กับทางมหาลัยที่เยอรมัน"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={farewell}
              isBlog={false}
              title="Farewell Meeting"
              description="เข้าร่วมกิจกรรมกับทางมหาลัยที่เยอรมันและร่วมทานมื้ออาหารครั้งสุดท้ายก่อนกลับไทย"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
