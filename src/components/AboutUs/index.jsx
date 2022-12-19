import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./style.scss";
import smile from "../../assets/icons/smile.png";
import shield from "../../assets/icons/shield.png";
import services from "../../assets/icons/setting.png";

const features = [
  { img: smile, title: "Quality" },
  { img: shield, title: "Trust" },
  { img: services, title: "Service" },
];

const Aboutus = () => {
  return (
    <div id="about" className="aboutus section">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="sec_heading">About Us</h2>
            <p className="content">
              At PUNAK Galaxy of Gadgets, we are passionate about watch straps,
              cases & covers. Our team of experts has carefully selected a range
              of timepieces and accessories that offer the perfect blend of
              style, quality, and functionality. We believe that a watch should
              not only keep time, but also serve as a statement piece that
              reflects your personal style and tastes.
            </p>
          </Col>
        </Row>
        <Row style={{ padding: "100px 0 0 0"}}>
          {features.map((feature) => (
            <Col xs={12} lg={4}>
              <div className="feature_container">
                <div className="feature_img">
                  <img src={feature.img} alt={feature.title} />
                </div>
                <p className="feature_title">{feature.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Aboutus;
