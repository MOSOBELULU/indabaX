export default function HeroAbout() {
    return (
        <section className="relative w-full h-[600px] overflow-hidden">
            <video 
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full object-cover  brightness-20">
                <source src="/videos/aboutHero.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">About IndabaX São Tomé and Príncipe </h1>
                <p className="text-lg md:text-xl max-w-2xl">Uniting minds, Building knowledge - learn more about our mission, how we're shaping Africa's AI future</p>
            </div>
        </section>
    )
}