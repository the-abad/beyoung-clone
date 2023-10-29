"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './style.css';
import axios from "axios";

interface Product {
  _id: string;
  displayImage: string;
  name: string;
  brand: string;
  price: number;
  // Add other properties if needed
}

export default function TrendingFilterProducts() {
  const [slideProduct, setSlideProduct] = useState<Product[]>([]);

  useEffect(() => {
    const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products';
    const params = {
      sellerTag: "trending",
    };
    const headers = {
      'Content-Type': 'application/json',
      'projectId': 's412etnzxy4q',
    };

    axios.get<{ data: Product[] }>(apiUrl, {
      params: params,
      headers: headers,
    })
      .then((response) => {
        setSlideProduct(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 150,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className='discount'>
      <Slider {...settings}>
        {slideProduct.map((slide) => (
          <div key={slide._id} className="slideItemsingle">
            <a href={`/products/${slide._id}`}>
            <img src={slide.displayImage} style={{"width": '100%'}} alt={slide.name} />
            <h2 className="product-cat-name-mobile">
                {slide.name}
              </h2>
              <span className="cartpname">{slide.brand}</span>
              <div className="price">
                <strong>₹{slide.price}</strong>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
