import React, { useState } from "react";
import "./style.scss";
import Navigation from "../../common/nav";
import Landing from "../../components/Landing";
import Products from "../../components/products";
import Cnc from "../../components/CnC";
import Aboutus from "../../components/AboutUs";
import MnV from "../../components/MnV";
import ContactUs from "../../common/ContactUs";
import Footer from "../../common/footer";
import uparrow from "../../assets/icons/uparrow.png";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <>
      <Navigation />
      <Landing />
      <Products />
      <Cnc />
      <Aboutus />
      <MnV />
      <ContactUs />
      <Footer />
      <div className="scroll_to_top">
        <img
          src={uparrow}
          alt="uparrow"
          onClick={scrollToTop}
          width={"100%"}
          style={{ display: visible ? "inline" : "none" }}
        />
      </div>
    </>
  );
};

export default Home;
