import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          
          <Col lg="6" md="6">
            <div className="hero__content">
            <div className="search">
              <input type="text" placeholder="     Type...." />
              <button className="btn">Search</button>
            </div>
              <h2 className="mb-4 hero__title"><br />
  Access Study Material ,<br /> Guidance for All Your<br /> Queries and Projects
              </h2>
              <p className="para">Stuck With Engineering? Launch your engineering project with FREE materials, pro tips, & internship opportunities! LearnLoon : Your guide to building something amazing. </p>
            </div>
            
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
