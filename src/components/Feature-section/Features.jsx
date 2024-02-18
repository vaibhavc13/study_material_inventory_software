import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Acess to Materials",
    desc: "Get free Engineering materails of sagar central university in few clicks ! ",
    icon: "ri-draft-line",
  },

  {
    title: "Project and Querry Support",
    desc: "Get Projects and Querry support within seconds you can post your errors in our querry portal ! ",
    icon: "ri-discuss-line",
  },

  {
    title: "Internship & Certification",
    desc: "Get intership based on real world projects and acess to our courses !",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
