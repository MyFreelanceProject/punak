import React from "react";
import { Col, Container, Row } from "reactstrap";
import logo from "../../assets/icons/punak_logo.png";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer_sec">
      <Container>
        <hr style={{ color: "#475467" }} />
        <Row>
          <Col xs={12} className="footer_cnt">
            <img src={logo} alt="punak_logo" />
            <p className="footer_txt">
              © 2022 PUNAK Galaxy of Gadgets. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
