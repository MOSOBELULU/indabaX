/* eslint-disable no-unused-vars */
import { testimonials } from "../data/DummyData";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 cursor-pointer z-10 hover:bg-[#12AD2B] hover:text-white transition"
    >
      <IoIosArrowForward size={22} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 cursor-pointer z-10 hover:bg-[#12AD2B] hover:text-white transition"
    >
      <IoIosArrowBack size={22} />
    </div>
  );
}

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div>
        <ul className="flex justify-center mt-6 space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-[#12AD2B] transition duration-300"></div>
    )
  };

  return (
    <section className="py-16 px-6 bg-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">What People Say</h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0 8px 16px rgba(0,0,0,0.12)" }}
              transition={{ duration: 0.3 }}
              className="px-6 md:px-12"
            >
              <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                “{item.message}”
              </p>
              <h4 className="font-semibold text-xl text-black">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.position}</p>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
