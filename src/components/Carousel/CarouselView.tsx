import React from "react";
import { Divider, Carousel } from "antd";
import { useMediaQuery } from "react-responsive";

const CarouselView: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return (
    <>
      <div className="carousel">
        <h1 className="section__title">My Core Values</h1>
        <Carousel
          autoplay
          arrows={!isMobile}
          effect="fade"
          dotPosition={isMobile ? "left" : "bottom"}
          className="carousel__swap"
        >
          <div className="carousel__elem">
            <h2>Innovation and Simplicity</h2>
          </div>
          <div className="carousel__elem">
            <h2>Customer Empathy</h2>
          </div>
          <div className="carousel__elem">
            <h2>Respect & Integrity</h2>
          </div>
          <div className="carousel__elem">
            <h2>Trustworthiness</h2>
          </div>
        </Carousel>
      </div>
      <Divider />
    </>
  );
};

export default CarouselView;
