import { testimonials } from "../data/DummyData"
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 text-black rounded-full p-2 cursor-pointer z-10 hover:text-[#009639]"
    >
      <IoIosArrowForward size={20} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 text-black rounded-full p-2  cursor-pointer z-10 hover:text-[#009639]"
    >
      <IoIosArrowBack size={20} />
    </div>
  );
}

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="relative max-w-3xl mx-auto p-8">
      <h2 className="text-center mb-12 text-3xl md:text-4xl font-extrabold text-black tracking-tight">Testimonials</h2>
      <div className="relative">

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-2xl shadow-md">
            <p className="text-gray-700 italic mb-4">“{item.message}”</p>
            <h4 className="font-semibold text-lg text-black">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.position}</p>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}
