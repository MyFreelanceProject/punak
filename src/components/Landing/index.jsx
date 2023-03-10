import React from "react";
import "./style.scss";
import landing from "../../assets/images/landing.png";
import { Col, Container, Row } from "reactstrap";
const Landing = () => {
  return (
    <div id="home" className="landing_sec">
      <Container>
        <Row>
          <Col xs={12} className="landing_container">
            <h1 className="hero_line">
              The Ultimate Destination for Smart Gadgets and Accessories
            </h1>
            <h6 className="caption">
            Welcome to our website, where we offer a curated selection of the watch straps, cases & covers, and smart gadgets. Explore our collection and discover the perfect timepiece for you.
            </h6>
            {/* <img className="landing_image" src={landing} alt="landing" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
