
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./AutoPlayCarousel.css";
import hk from '../images/hk-logo-1.svg'
import colt from '../images/colt.png'
import sig from '../images/sig.png'
import smith from '../images/s&w.png'
import glock from '../images/glock.png'
import beretta from '../images/beretta.png'

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
          <img src={colt} alt="colt" />
        </div>
        <div className="slide">
          <img src={hk} alt="h&k" />
        </div>
        <div className="slide">
          <img src={sig} alt="sig" />
        </div>
        <div className="slide">
          <img src={smith} alt="smith" />
        </div>
        <div className="slide"> 
          <img src={glock} alt="glock" />
        </div>
        <div className="slide">
          <img src={beretta} alt="beretta" />
        </div>

      </Slider>
    </div>
  );
}

export default AutoPlayCarousel;
