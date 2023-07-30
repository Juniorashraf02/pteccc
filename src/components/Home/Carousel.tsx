import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface CarouselData {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
  onSlideClick: (slideIndex: number) => void;
}

const Carousel: React.FC<CarouselData> = ({ imageOne, imageTwo, imageThree, imageFour, onSlideClick }) => {
  const handleSwiperClick = (swiper: SwiperCore) => {
    const activeIndex = swiper.activeIndex;
    if (activeIndex !== undefined) {
      onSlideClick(activeIndex);
    }
  };

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: false }}
      className="w-full h-2/3"
      onSwiper={handleSwiperClick}
    >
      <SwiperSlide>
        <div className="carousel-item relative">
          <Image
            src={imageOne}
            width={1920}
            height={1080}
            alt="Image 1"
            className="w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-item">
          <Image
            src={imageTwo}
            width={1920}
            height={1080}
            alt="Image 2"
            className="w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-item">
          <Image
            src={imageThree}
            width={1920}
            height={1080}
            alt="Image 3"
            className="w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-item">
          <Image
            src={imageFour}
            width={1920}
            height={1080}
            alt="Image 4"
            className="w-full"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
