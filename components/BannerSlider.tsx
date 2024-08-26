// components/BannerSlider.js

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";

// SwiperCore.use([Pagination, Navigation, Autoplay]);

const BannerSlider = () => {
  return (
    <div className="w-full h-auto">
      <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
        loop={true} // Enable looping
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        // slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        slidesPerView={1} // Adjust the number of slides per view if needed
      >
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/slide/slide-1.jpg"
              alt="Banner 1"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                Banner 1 Title
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/slide/slide-2.jpg"
              alt="Banner 2"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                Banner 2 Title
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/slide/slide-3.jpg"
              alt="Banner 3"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                Banner 3 Title
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default BannerSlider;
