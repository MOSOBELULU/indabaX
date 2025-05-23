import {  Link } from 'react-router-dom'
import {  speakers } from "../data/DummyData";
import SpeakerCard from "../components/reusable/SpeakersCard";
import RegisterButton from "../components/reusable/Register_button";
import {FaArrowLeft} from 'react-icons/fa'

export default function SpeakersPage() {
  return (
    <>
      <section className="py-25" id="all-speakers">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="relative z-10 flex flex-col justify-center items-center h-full w-full text-center text-black  px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#009639]">
              2025 IndabaX São Tomé and Príncipe Speakers
            </h2>
            <h3 className="text-lg md:text-xl mb-4 max-w-3xl">
              Get the latest insights from AI experts and global IT thought
              leaders at IndabaX in São Tomé and Príncipe 2025.
            </h3>
            <h3 className="text-lg md:text-xl max-w-3xl">
              Our keynotes are the foundation of every IndabaX conference. Meet
              visionaries and tech innovators who will inspire moments of
              clarity and address your mission-critical priorities.
            </h3>
          </div>
        </div>
<br></br>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8"  >
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
        <div className='flex justify-center mt-10'> 
<Link to='/'
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#009639] text-white font-semibold shadow-md hover:bg-green-700 transition duration-200">
                <FaArrowLeft className="mr-2"/>
                Back
            </Link>
        </div>
       <div className="bg-[#f5f5f5] py-16 px-6 md:px-10 text-center rounded-2xl shadow-md mt-12">
  <h1 className="text-2xl md:text-4xl font-bold text-[#009639] mb-6">
    Register to be part of IndabaX São Tomé and Príncipe
  </h1>
  <RegisterButton />
</div>

      </section>
    </>
  );
}
