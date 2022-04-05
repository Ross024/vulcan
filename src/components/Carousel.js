import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/header-slider-img-01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/header-slider-img-02.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/header-slider-img-03.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
