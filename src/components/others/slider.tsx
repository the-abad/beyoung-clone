'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function HeaderSlider() {
 const slides = [
  { id: 1, content: '/assets/image/banner.jpg' },
  { id: 1, content: '/assets/image/banner2.jpg' },
];
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false
  };
  return (
   
    <Slider {...settings}>
      {slides.map((slide) => (
      <div key={slide.id}>
        <img src={slide.content} style={{"width":'100%'}}/>
      </div>
    ))}
    </Slider>
  );
}