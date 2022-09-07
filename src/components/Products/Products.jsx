import React, { useRef, useState } from "react";
import "./Products.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";
//react-router-dom
import { Link } from "react-router-dom";
//images
import Fabric from "../../images/children's2.svg";
import Kitchen from "../../images/bed2.svg";
import Children from "../../images/download2.svg";

const Products = () => {
  return (
    <div className="Products">
      <div className="container">
        <h1 className="Products-info">Что мы предлагаем?</h1>
        <div className="services">
          <Link to="/" className="products products1">
            Продукты
          </Link>
          <Link to="/" className="products products2">
            Услуги
          </Link>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
         
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slides"><img src={Fabric} alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slides"><img src={Kitchen} alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slides"><img src={Children} alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slides"><img src={Fabric} alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slides"><img src={Kitchen} alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slides"><img src={Children} alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slides"><img src={Fabric} alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slides"><img src={Kitchen} alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slides"><img src={Children} alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
