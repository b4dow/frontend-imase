"use client";

import Image from "next/image";
// import Link from "next/link";

import { HeroCarousel } from "./HeroCarousel.data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Carousel.css";

interface SlideImage {
  src: string;
  alt: string;
  label: string;
  description: string;
}

interface Props {
  slidesImages?: SlideImage[];
}

export function Carousel({ slidesImages }: Props) {
  const Hero = slidesImages ? slidesImages : HeroCarousel;

  return (
    <Swiper
      direction={"horizontal"}
      pagination={{
        clickable: true,
      }}
      style={{
        height: "300px",
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {Hero.map((item) => (
        <SwiperSlide key={item.src}>
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full right-0 bg-black opacity-60" />
            <div className="absolute flex flex-col  justify-center items-center text-white w-full h-full ">
              <h1 className="text-2xl md:text-4xl">{item.label}</h1>
              {item.description.length > 0 && (
                <p className=" text-sm md:text-xl max-w-lg">
                  {item.description}
                </p>
              )}
            </div>
            <Image
              src={`/home/${item.src}`}
              alt={item.alt}
              width={300}
              height={300}
              className="object-cover"
              unoptimized
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
