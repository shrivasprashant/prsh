import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from ".";
import { HiOutlineShoppingCart, HiEye, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

const ActiveSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex  items-center justify-center flex-col h-[500] relative bg-[#FFFFFF]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[90%] lg:max-w-[80%]"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={item.title}>
  <div
    className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer"
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${item.backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
    <div className="relative flex flex-col gap-3">
      <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
      <h1 className="text-lg lg:text-xl xl:text-2xl">{item.title}</h1>
      <p className="text-sm lg:text-base xl:text-lg">{item.content}</p>
    </div>
    {hoveredIndex === index && (
      <div className="flex flex-col p-2 items-center justify-end absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="text-gray-300 hover:text-blue-500 mr-2 pt-2 transform transition-transform duration-300 hover:scale-150">
          <Link to="/product" className="text-white text-3xl hover:text-blue-500">
            <HiOutlineShoppingCart class="h-5 w-5" />
          </Link>
        </button>
        <button className="text-gray-300 hover:text-blue-500 mr-2 pt-2 transform transition-transform duration-300 hover:scale-150">
          <Link to="/product" className="text-white text-3xl hover:text-blue-500">
            <HiEye class="h-5 w-5" />
          </Link>
        </button>
        <button className="text-gray-300 hover:text-blue-500 mr-2 pt-2 transform transition-transform duration-300 hover:scale-150">
          <Link to="/product" className="text-white text-3xl hover:text-blue-500">
            <HiTrash class="h-5 w-5" />
          </Link>
        </button>
      </div>
    )}
    <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
