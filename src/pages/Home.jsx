// import CountdownTimer from "../components/CountdownTimer"
import Hero from "../components/Hero"
import SpeakersSection from "../components/SpeakersSection"
import Sponsorship from "../components/Sponsorship"
import About from "../components/About"
import Events from "../components/Events"
import Testimonials from "../components/Testimonials"
import EventOverview from "../components/EventOverview"


export default function Home(){
    return (
        <>
          <Hero/>
          {/* <CountdownTimer/> */}
          <About/>
          <EventOverview/>
          <Events/>
          <SpeakersSection/> 
          <Testimonials />
          < Sponsorship />
            </>
          
    )
}