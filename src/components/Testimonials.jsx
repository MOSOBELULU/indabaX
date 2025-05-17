import { testimonials } from "../data/DummyData"
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#009639] text-white rounded-full p-2 cursor-pointer z-10 hover:bg-[#eff155]"
    >
      <IoIosArrowForward size={20} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#009639] text-white rounded-full p-2 cursor-pointer z-10 hover:bg-[#eff155]"
    >
      <IoIosArrowBack size={20} />
    </div>
  );
}

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="relative max-w-3xl mx-auto p-4">
      <h2 className="text-center mb-12 text-3xl md:text-4xl font-extrabold text-[#009639] tracking-tight">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="p-8 bg-white rounded-2xl shadow-md">
            <p className="text-gray-700 italic mb-4">“{item.message}”</p>
            <h4 className="font-semibold text-lg text-[#009639]">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
