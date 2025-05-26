// import CountdownTimer from "../components/CountdownTimer"
import Hero from "../components/home/Hero"
// import SpeakersSection from "../components/SpeakersSection"
import Sponsorship from "../components/home/Sponsorship"
import About from "../components/home/About"
import Events from "../components/home/Events"
import Testimonials from "../components/home/Testimonials"
import EventOverview from "../components/home/EventOverview"
import EventOrganisers from "../components/reusable/EventOrganisers"
import Faqs from "../components/reusable/Faq"
import CTA from "../components/reusable/CTA"//
import JoinUs from "../components/about/JoinUs"


export default function Home(){
    return (
        <>
          <Hero/>
          <About/>
          <EventOverview/>
          <EventOrganisers/>
          <Events/>
          {/* <SpeakersSection/>  */}
          <Testimonials />
          <Faqs />
          < Sponsorship />
          <JoinUs />
            </>
          
    )
}