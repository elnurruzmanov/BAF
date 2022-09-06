import React from 'react'
import "./Products.css"
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


//react-router-dom
import {Link} from "react-router-dom";

const Products = () => {
  return (
    <div  className='Products'>
      <div className="container">
        <h1 className="Products-info">Что мы предлагаем?</h1>
        <div className="services">
          <Link to="/" className='products products1'>Продукты</Link>
          <Link to="/" className='products products2'>Услуги</Link>
        </div>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={50}
      // slidesPerView={3}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
      </div>
    </div>
  )
}

export default Products