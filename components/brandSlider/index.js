"use client"
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BrandSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="flex flex-col justify-center bg-gray-100 brandSlider">
       <Slider {...settings}>
        <div className='my-6'>
          <Image src="/img/brand1.png" width="100" height="100" alt="brand-logo" />
        </div>
        <div className='my-6'>
          <Image src="/img/brand2.png" width="100" height="100" alt="brand-logo" />
        </div>
        <div className='my-6'>
          <Image src="/img/brand3.png" width="100" height="100" alt="brand-logo" />
        </div>       
        <div className='my-6'>
          <Image src="/img/brand4.png" width="100" height="100" alt="brand-logo" />
        </div>       
        <div className='my-6'>
          <Image src="/img/brand5.png" width="100" height="100" alt="brand-logo" />
        </div>             
      </Slider>
    </div>
  )
}

export default BrandSlider