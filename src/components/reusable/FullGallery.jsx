import { images } from "../../data/DummyData";
import BackBtn from "../reusable/BackBtn";

export default function FullGallery() {
  return (
    <section className="py-20 px-6 bg-white">
        <BackBtn className="mb-4"/>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>
        <p className="text-gray-600 mb-12">Explore moments from our past events.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map(({ image }, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg shadow hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
