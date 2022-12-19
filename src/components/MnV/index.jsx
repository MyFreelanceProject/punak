import React from "react";
import './style.scss';
import { Container, Row, Col } from "reactstrap";

const MnV = () => {
  return (
    <div className="section mnv">
      <Container>
        <Row>
          <Col lg={6} xs={12}>
            <div className="details">
              <h2 className="sec_heading">Mission & Vision</h2>
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div className="content">
              <h2 className="content_txt">The main problem in today's market is that the luxurious products are not available at reasonable price, as well as reasonable product does not have luxurious quality. So, we are here to bridge the gap between them. We offer luxurious feel in our product at a very affordable price, so our customers can find luxury in their budget.
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MnV;
