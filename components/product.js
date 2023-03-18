import React, { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";
import Image from "next/image";

const products = [
  {
    name: "Product One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image/projects/fan.jpg",
  },
  {
    name: "Product Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image/projects/ESP.jpg",
  },
  {
    name: "Product Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image/projects/Football.jpg",
  },
  {
    name: "Product Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image/projects/karmeq.jpg",
  },
  {
    name: "Product Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image/projects/lunch.jpg",
  },
  {
    name: "Product Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image/projects/Workcomp.jpg",
  },
];

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="flex gap-1">
      {products.map((product, index) => (
        <div
          key={index}
          className=""
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <Image className="w-[600px] h-[200px]" data-aos="zoom-in-up" src={product.image} alt="image" width={500} height={500} />
          {/* <img  data-aos='fade-left' src={product.image} alt={product.name} /> */}
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="">
            <button className="lg:w-[80%] md:w-[80%] sm:w-[100%] font-semibold text-[20px] rounded-lg bg-black text-[white] h-[60px] hover:bg-white hover:text-[black]">
              Get in Touch
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
