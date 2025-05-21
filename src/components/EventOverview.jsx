import { features } from "../data/DummyData";
export default function EventOverview() {
    return(
        <section className="bg-white py-6 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6"> 
                     Why Attend this Event</h2>
                <p className="text-lg text-black leading-relaxed">
                    This event brings together tech enthusiasts, industry leaders, and innovators to explore emerging solutions in tech and connect over meaningful discussions. Whether you're a developer, enterpreneur, or curious learner - there's something here for you!!
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {features.map((item, i) => (
                    <div 
                    key={i} className=" bg-[#f9fafb] p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                        <h4 className="text-xl font-semibold text-black mb-3">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    )

}