// AutoPlayCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./AutoPlayCarousel.css"; // We'll create this CSS file

function AutoPlayCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src="src/images/colt.png" alt="colt" />
        </div>
        <div className="slide">
          <img src="src\images\hk-logo-1.svg" alt="h&k" />
        </div>
        <div className="slide">
          <img src="src\images\sig.png" alt="sig" />
        </div>
        <div className="slide">
          <img src="src/images/s&w.png" alt="smith" />
        </div>
        <div className="slide"> 
          <img src="src\images\glock.png" alt="glock" />
        </div>
        <div className="slide">
          <img src="src\images\beretta.png" alt="beretta" />
        </div>

      </Slider>
    </div>
  );
}

export default AutoPlayCarousel;
