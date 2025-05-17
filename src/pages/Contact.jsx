import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaCommentDots } from "react-icons/fa"

export default function Contact() {
    return(
        <div className="min-h-screen bg-gradient-to-r p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-9 ">Get In Touch </h1>
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto shadow-md rounded-lg overflow-hidden">
            
               
            
        <div className="w-full lg:w-1/2 h-[450px]">
         <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">We'd love to hear from you! Whether you have questions, need support, or want to learn more about our event. Our team is here to help you</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7536178345513!2d6.727497873638973!3d0.32630386401342143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10766a8d79d4e1e7%3A0xf004d1414a2055cb!2sUniversity%20of%20S%C3%A3o%20Tom%C3%A9%20and%20Pr%C3%ADncipe!5e0!3m2!1sen!2sza!4v1747128524029!5m2!1sen!2sza" 
        className="w-full h-full border-0"
         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="w-full lg:w-1/2 h-auto">
            <form
            action="https://formsubmit.co/mosobelulu@gmail.com"
            method='POST'
            className="w-full  p-6 space-y-5"
            >
                <div>
                    <label htmlFor="name" className="flex items-center gap-2 fount-medium text-gray-700">
                        <FaUser/> Full Names</label>
                    <input type='text' required id='name'
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                </div>
                <div>
                    <label htmlFor='email'
                    className="flex items-center gap-2 fount-medium text-gray-700">
                        <FaEnvelope/> Email</label>
                    <input type='text' required id='email'
                     className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                </div>
                <div>
                    <label htmlFor="phone number"
                    className="flex items-center gap-2 fount-medium text-gray-700">
                        <FaPhone/> Phone Number</label>
                    <input type='text' required id='phoneNumber'
                     className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                </div>
                <div>
                    <label htmlFor="jobPosition"
                    className="flex items-center gap-2 fount-medium text-gray-700">
                        <FaBriefcase/> Job Position</label>
                    <input type='text' required id='jobPosition'
                     className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                </div>
                <div>
                    <label htmlFor="description"
                    className="flex items-center gap-2 fount-medium text-gray-700"> <FaCommentDots/> Leave a message for us </label>
                    <textarea id='description' required rows={5}
                     className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                </div>
                <div>
                    <button
                    type='submit' 
                    className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-yellow-400 transition duration-300">Submit</button>
                </div>

            </form>
        </div>
        </div>
        </div>
    )
}