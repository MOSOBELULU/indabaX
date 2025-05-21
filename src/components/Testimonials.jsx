import { testimonials } from "../data/DummyData";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white shadow-lg border rounded-full p-2 cursor-pointer z-10 hover:bg-[#009639] hover:text-white transition"
    >
      <IoIosArrowForward size={24} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white shadow-lg border rounded-full p-2 cursor-pointer z-10 hover:bg-[#009639] hover:text-white transition"
    >
      <IoIosArrowBack size={24} />
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
    prevArrow: <PrevArrow />
  };

  return (
    <div className="relative max-w-4xl mx-auto px-6 py-16 bg-gradient-to-br from-white via-gray-50 to-[#f0fdf4] rounded-xl shadow-lg">
      <h2 className="text-center mb-10 text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">What People Say</h2>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-xl shadow-md border border-gray-100 text-center transition-all duration-300 hover:shadow-xl"
          >
            <p className="text-lg text-gray-600 italic mb-6 leading-relaxed">“{item.message}”</p>
            <h4 className="font-semibold text-xl text-[#009639]">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
