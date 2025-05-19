// import CountdownTimer from "../components/CountdownTimer"
import Hero from "../components/Hero"
import SpeakersSection from "../components/SpeakersSection"
import Sponsorship from "../components/Sponsorship"
import About from "../components/About"
import Events from "../components/Events"
import Testimonials from "../components/Testimonials"


export default function Home(){
    return (
        <>
          <Hero/>
          {/* <CountdownTimer/> */}
          <About/>
          <Events/>
          <SpeakersSection/> 
          <Testimonials />
          < Sponsorship />
            </>
          
    )
}