import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Testimonials = () => {
  const images = [
    {
      image: "/image/testimonials/OIP (1).jpeg",
      name: "Alisha Sunford",
      title: "Senior Executive Specialist",
    },
    {
      image: "/image/testimonials/OIP (2).jpeg",
      name: "Tommy Sushita",
      title: "Nutrition Coach",
    },
    {
      image: "/image/testimonials/OIP.jpeg",
      name: "Linda Farred",
      title: "interective Officer",
    },
    {
      image: "/image/testimonials/stories1.webp",
      name: "Chani morph",
      title: "Graphic Designer",
    },
    {
      image: "/image/testimonials/stories2.webp",
      name: "Susi Thompson",
      title: "Chief of Staff",
    },
    {
      image: "/image/testimonials/stories4.webp",
      name: "Wills Venus",
      title: "Director of Demand Execution",
    },
    {
      image: "/image/testimonials/stories5.webp",
      name: "Alan Thomas",
      title: "Operation Manager",
    },
  ];
  return (
    <div className="p-4 w-[100%] bg-[#e97f5e] text-[white]">
      <h1 className="text-center lg:text-[30px] md:text-[25px] sm:text-[25px]">
        What Our clients says about us
      </h1>
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        direction="left"
        play={true}
      >
        {images.map((elem) => {
          return (
            <div className="ml-3 shadow-lg p-3">
              <Image
                className="lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[330px] sm:h-[300px]"
                src={elem.image}
                alt="image"
                width={200}
                height={200}
              />
              <div className="text-center text-[20px]">
                <h2>{elem.name}</h2>
                <p>{elem.title}</p>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Testimonials;
