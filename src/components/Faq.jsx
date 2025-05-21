import { useState } from "react";
import { faqs } from "../data/DummyData";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">
Frequently Asked Questions
            </h2>
            {faqs.map((item, index) => (
                <div key={index}
                className="border-b border-gray-200 py-4 cursor-pointer transition-all duration-300">
                    <div className="flex justify-between items-center"
                    onClick={() => toggle(index)}>
                        <h3 className="text-lg font-medium text-black">{item.question}</h3>
                        {openIndex === index ? (
                            <IoIosArrowUp className="text-green-600" size={20}/>
                        ) : (
                            <IoIosArrowDown className="text-gray-500" size={20} />
                        ) }
                        {openIndex === index && (
                            <p className="mt-3 text-gray-700 transition-all duration-200">{item.answer}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}