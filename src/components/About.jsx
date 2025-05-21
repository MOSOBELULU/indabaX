import { Users, Wrench, HeartHandshake } from "lucide-react";


export default function About() {
  return (
    <section className=" py-30 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
       
        <div className="w-full h-full">
          <img
            src="/images/aboutSec.jpg"
            alt="AI in Africa"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
        </div>

        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            About IndabaX São Tomé and Príncipe
          </h2>

         
          <div className="flex  items-start space-x-4">
           <Users className="text-4xl text-[#12AD2B]  h-15 w-15" />
            <div>
              <h3 className="text-xl font-semibold ">Who We Are</h3>
              <p className=" text-sm">
                We're a local AI community under the Deep Learning Indaba family, passionate about making artificial intelligence education accessible in São Tomé and Príncipe.
              </p>
            </div>
          </div>

          
          <div className="flex items-start space-x-4">
           <Wrench className="text-4xl text-[#12AD2B]  h-15 w-15" />
            <div>
              <h3 className="text-xl font-semibold">What We Do</h3>
              <p className="text-sm">
                We organize workshops, talks, and hands-on sessions to equip students, researchers, and tech lovers with practical AI skills and global connections.
              </p>
            </div>
          </div>

          
          <div className="flex items-start space-x-4">
           <HeartHandshake className="text-xl text-[#12AD2B] h-15 w-15" />
            <div>
              <h3 className="text-xl font-semibold ">Why You Should Care</h3>
              <p className=" text-sm">
                AI will shape the future of Africa. Being part of IndabaX helps you learn, network, and contribute to solutions that matter for our communities.
              </p>
            </div>
          </div>

          
          <a
            href="/aboutus"
            className="inline-block mt-4 bg-[#12AD2B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#007f2f] transition duration-200"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
