import React from "react";
import "./style.scss";
import { Container, Row, Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import watch1 from "../../assets/images/watch1.png";
import watch2 from "../../assets/images/watch2.png";
import watch3 from "../../assets/images/watch3.png";
import watch4 from "../../assets/images/watch4.png";
import watch5 from "../../assets/images/watch5.png";

const images = [watch1, watch2, watch3, watch4, watch5];

const Cnc = () => {
  return (
    <div className="products_sec section">
      <Container>
        <Row>
          <Col lg={12} xs={12}>
            <div className="details">
              <h2 className="sec_heading">Cases & Covers</h2>
            </div>
          </Col>
          <div>
            <Carousel
              showThumbs={false}
              showStatus={false}
              centerMode={true}
              centerSlidePercentage={25}
              emulateTouch={true}
              swipeable={true}
              infiniteLoop={true}
              autoPlay={true}
            >
              {images.map((img, i) => (
                <img height={"100%"} src={img} alt={`watch${i}`} />
              ))}
            </Carousel>
          </div>
          <Col
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="cta_btn">Buy Now</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cnc;
