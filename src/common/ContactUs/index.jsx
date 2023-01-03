import React from "react";
import "./style.scss";
import { Col, Container, Row } from "reactstrap";
import phone from "../../assets/icons/phone.png";
import mail from "../../assets/icons/mail.png";

const ContactUs = () => {
  return (
    <div id="contact" className="section contactus">
      <Container>
        <Row>
          <Col xs={12} lg={12} className="contact_head_cnt">
            <h2 className="sec_head">Contact Us</h2>
            <p className="caption">Feel free to contact and reach us</p>
          </Col>
        </Row>
        <Row className="contact_details">
          <Col xs={12} lg={4}>
            <div className="detail_item">
              <img src={phone} alt="phone" />
              <p className="title">Call us on</p>
              <a href="tel:+91 9653134551" target="_blank" rel="noreferrer">
                <p className="contact">+91 9653134551 - Madan Mali</p>
              </a>
              <a href="tel:+91 8094796429" target="_blank" rel="noreferrer">
                <p className="contact">+91 8094796429 - Bhavesh Mali</p>
              </a>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="detail_item">
              <img src={mail} alt="mail" />
              <p className="title">Email us on</p>
              <a
                href="mailto:official@punak.in"
                target="_blank"
                rel="noreferrer"
              >
                <p className="contact">official@punak.in</p>
              </a>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="detail_item">
              <img src={mail} alt="mail" />
              <p className="title">Location</p>
              <a
                href="http://maps.google.co.uk/maps?q=22.3199877,73.1569806"
                target="_blank"
                rel="noreferrer"
              >
                <p className="contact">
                  FF-14, S Square Mall, Near Ganga Jamuna Hospital, Shuban Pura
                  Ellora Park Road, Vadodara, Gujarat - 390023
                </p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
