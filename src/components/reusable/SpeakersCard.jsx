import { Link } from "react-router-dom"
export default function SpeakerCard({ speaker }) {
  return (
    <div className="group relative w-full h-full max-w-xs mx-auto overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
      <div className="relative w--full h-full ">

    <div className="bg-white rounded-xl shadow-lg  hover:shadow-2xl pb-8 ">
      <Link to={`/speakerdetail/${speaker.id}`}>
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-70 object-cover rounded-t-xl"
      />
      </Link>
      
      <div className="mt-4 pt-4">
        <h3 className="text-xl font-bold ">{speaker.name}</h3>
        <p className="text-sm ">{speaker.profession}</p>
        <p className="mt-2  italic">“{speaker.topic}”</p>
      </div>

    

      </div>
    </div>
    </div>
  )
}
