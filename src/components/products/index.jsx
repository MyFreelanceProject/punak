import React from "react";
import "./style.scss";
import { Col, Container, Row } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import strap1 from "../../assets/images/strap1.jpg";
import strap2 from "../../assets/images/strap2.jpg";
import strap3 from "../../assets/images/strap3.jpg";
import strap4 from "../../assets/images/strap4.jpg";
import strap5 from "../../assets/images/strap5.jpg";
import strap6 from "../../assets/images/strap6.jpg";
import strap7 from "../../assets/images/strap7.jpg";
import strap8 from "../../assets/images/strap8.jpg";
import strap9 from "../../assets/images/strap9.jpg";
import strap10 from "../../assets/images/strap10.jpg";
import strap11 from "../../assets/images/strap11.jpg";
import strap12 from "../../assets/images/strap12.jpg";
import strap13 from "../../assets/images/strap13.jpg";
import strap14 from "../../assets/images/strap14.jpg";
import strap15 from "../../assets/images/strap15.jpg";
import strap16 from "../../assets/images/strap16.jpg";
import strap17 from "../../assets/images/strap17.jpg";
import strap18 from "../../assets/images/strap18.jpg";
import strap19 from "../../assets/images/strap19.jpg";
import strap20 from "../../assets/images/strap20.jpg";
import strap21 from "../../assets/images/strap21.jpg";
import strap22 from "../../assets/images/strap22.jpg";
import strap23 from "../../assets/images/strap23.jpg";
import strap24 from "../../assets/images/strap24.jpg";
import strap25 from "../../assets/images/strap25.jpg";
import strap26 from "../../assets/images/strap26.png";
import useWindowDimensions from "../../hook/useGetWindowDimension";
const images = [
  strap1,
  strap2,
  strap3,
  strap4,
  strap5,
  strap6,
  strap7,
  strap8,
  strap9,
  strap10,
  strap11,
  strap12,
  strap13,
  strap14,
  strap15,
  strap16,
  strap17,
  strap18,
  strap19,
  strap20,
  strap21,
  strap22,
  strap23,
  strap24,
  strap25,
  strap26,
];

const Products = () => {
  const { width } = useWindowDimensions();
  return (
    <div id="products" className="products_sec section">
      <Container>
        <Row>
          <Col lg={12} xs={12}>
            <div className="details">
              <h4>Our Products</h4>
              <h6>
                “We are Authorized sellers on Amazon, Flipkart and Jio Mart...”
              </h6>
              <h2 className="sec_heading">Watch Straps</h2>
            </div>
            <div>
              <Carousel
                showThumbs={false}
                showStatus={false}
                centerMode={true}
                showIndicators={false}
                centerSlidePercentage={width < 700 ? 100 : 25}
                emulateTouch={true}
                swipeable={true}
                infiniteLoop={true}
                autoPlay={true}
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
