import React, { useRef, useState } from "react";
import amlak1 from "../../assets/image/amlak1.jpg";
import amlak2 from "../../assets/image/amlak2.jpg";
import amlak3 from "../../assets/image/amlak3.jpg";
import amlak4 from "../../assets/image/amlak4.jpg";
import amlak5 from "../../assets/image/amlak5.jpg";
import amlak6 from "../../assets/image/amlak6.jpg";
import amlak7 from "../../assets/image/amlak7.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ProductSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <body id="bodySwiper">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={amlak1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak7} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={amlak1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amlak7} />
        </SwiperSlide>
      </Swiper>
    </body>
  );
}
