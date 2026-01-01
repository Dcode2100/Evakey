"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Datas } from "./Carouselimg";
import Image from "next/image";

const SimpleSlider: React.FC = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="swiper-container"
      >
        {Datas.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-square">
              <Image
                src={data.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-contain rounded-xl"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimpleSlider;

