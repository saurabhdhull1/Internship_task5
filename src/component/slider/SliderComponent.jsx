import React from "react";
import Slider from "react-slick";

import "./SliderComponent.css";

const SliderComponent = () => {
  const images = [
    // an array of image URLs
    "https://images.ixigo.com/image/upload/f_auto/q/023a67ea64854ace709188cfd4106866-bdchk.jpg",
    "https://images.ixigo.com/image/upload/f_auto/a/95263806e3e9188c7281052863c6c748-ujvbi.png",
    "https://images.ixigo.com/image/upload/f_auto/a/33e8d7dd680e30f6087993465be915b9-rfjjw.png",
    "https://images.ixigo.com/image/upload/f_auto/b92c9f70ed60f51f5483f60666347809-pmlea.png",
    "https://images.ixigo.com/image/upload/f_auto/covid/b89367c584b384b35d8d2b36dbef2902-cukya.png",
    "https://images.ixigo.com/image/upload/f_auto/a/f307be07cd117f9a2871a80582e94f8c-uhzbh.png",
    "https://images.ixigo.com/image/upload/f_auto/5922fe1180d07e7c629bb32f86331ed2-lbqmw.png",
    "https://images.ixigo.com/image/upload/f_auto/a/110cb202dfc3f384a9f0f4d1a84f9d77-ovcos.png",
    "https://images.ixigo.com/image/upload/f_auto/Intl/d434f68d4107ffa0251fd69f3cb082bd-nqchi.png",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={images[0]} alt="Image 1" />
      </div>
      <div>
        <img src={images[1]} alt="Image 2" />
      </div>
      <div>
        <img src={images[2]} alt="Image 3" />
      </div>
      <div>
        <img src={images[3]} alt="Image 4" />
      </div>
      <div>
        <img src={images[4]} alt="Image 5" />
      </div>
      <div>
        <img src={images[5]} alt="Image 6" />
      </div>
      <div>
        <img src={images[6]} alt="Image 7" />
      </div>
      <div>
        <img src={images[7]} alt="Image 8" />
      </div>
    </Slider>
  );
};

export default SliderComponent;
