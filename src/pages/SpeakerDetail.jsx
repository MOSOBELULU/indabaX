import { Link, useParams } from "react-router-dom";
import { FaArrowLeft} from 'react-icons/fa'
import { speakers } from "../data/DummyData";

export default function SpeakerDetail() {
const { id} = useParams();
const speaker = speakers.find((s) => s.id.toString()=== id)
if(!speaker) return <p className="text-center text-red-500">Speaker not found</p>

return(
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-12">
        <div className="mb-6">
            <Link to='/speakerspage'
            className="inline-flex items-center text-black hover:underline">
                <FaArrowLeft className="mr-2"/>
                Back
            </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-stretch ">
            <div className="flex-1">
        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover rounded-xl "/>
            </div>
            <div className="w-full  md:w-1/2 ">
        <h2 className="text-3xl font-bold text-[#009639] mb-2">{speaker.name}</h2>
        <h4 className="text-xl mb-4">{speaker.profession}</h4>
        <p className=" leading-relaxed">{speaker.background}</p>
            </div>
        </div>
    </div>
)
}