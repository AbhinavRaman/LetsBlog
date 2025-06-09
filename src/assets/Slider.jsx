import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    title: "Be Honest",
    description: "Tell the truth and act honestly even when no one is watching.",
    bg: "bg-orange-500",
  },
  {
    id: 2,
    title: "Be Responsible",
    description: "Take ownership of your actions and decisions.",
    bg: "bg-purple-600",
  },
  {
    id: 3,
    title: "Be Respectful",
    description: "Treat others the way you want to be treated.",
    bg: "bg-teal-500",
  },
  {
    id: 4,
    title: "Be Kind",
    description: "Help others and show compassion in your words and actions.",
    bg: "bg-pink-500",
  },
  {
    id: 5,
    title: "Be Fair",
    description: "Play by the rules and share with others equally.",
    bg: "bg-blue-500",
  },
  {
    id: 6,
    title: "Be Courageous",
    description: "Stand up for what's right even when it's hard.",
    bg: "bg-green-600",
  },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px", // adds spacing on sides
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full px-2 sm:px-4 md:px-8 py-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2 text-center">
            <div
              className={`rounded-xl shadow-md p-5 h-56 sm:h-60 flex flex-col justify-center ${slide.bg} text-white transition duration-300 ease-in-out hover:scale-[1.02]`}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug mb-2 break-words">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base leading-tight">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
