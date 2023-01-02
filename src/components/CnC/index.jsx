import React from "react";
import "./style.scss";
import { Container, Row, Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import cnc1 from "../../assets/images/cnc1.jpg";
import cnc2 from "../../assets/images/cnc2.jpg";
import cnc3 from "../../assets/images/cnc3.jpg";
import cnc4 from "../../assets/images/cnc4.jpg";
import useWindowDimensions from "../../hook/useGetWindowDimension";
const images = [cnc1, cnc2, cnc3, cnc4];

const Cnc = () => {
  const { width } = useWindowDimensions();
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
              centerSlidePercentage={width < 700 ? 100 : 25}
              emulateTouch={true}
              swipeable={true}
              infiniteLoop={true}
              autoPlay={true}
              showIndicators={false}
            >
              {images.map((img, i) => (
                <img key={i} height={"100%"} src={img} alt={`watch${i}`} />
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
