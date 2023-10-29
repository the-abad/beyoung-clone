'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './style.css'

export default function DiscountSlider() {
 const slides = [
  { id: 1, content: '/assets/image/2.png' },
  { id: 2, content: '/assets/image/5.png' },
];
  var settings = {
    dots: false,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
   <div className='discount'>
    <Slider {...settings}>
      {slides.map((slide) => (
      <div key={slide.id} className="slideItemsingle">
        <img src={slide.content} style={{"width":'100%'}}/>
      </div>
    ))}
    </Slider>
   </div>
  );
}