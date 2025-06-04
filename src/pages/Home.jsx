import Hero from "../components/home/Hero";
import Sponsorship from "../components/home/Sponsorship";
import About from "../components/home/About";
import Events from "../components/home/Events";
import Testimonials from "../components/home/Testimonials";
import EventOverview from "../components/home/EventOverview";
import EventOrganisers from "../components/reusable/EventOrganisers";
import Faqs from "../components/reusable/Faq";
import MiniGallery from "../components/about/MiniGallery"
import AgendaPreview from "../components/home/AgendaPreview";
import JoinUs from "../components/reusable/JoinUs";
import SpeakersSection from "../components/home/SpeakersSection";
import VolunteerOpportunities from "../components/home/VolunteerOpps";
import MiniFaqs from "../components/reusable/miniFaqs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EventOverview />
      <EventOrganisers />
      <AgendaPreview />
      <SpeakersSection />
      <Events />
      <Testimonials />
      <MiniGallery />
      <MiniFaqs/>
      <Sponsorship />
      <VolunteerOpportunities />
      <JoinUs />
      
    </>
  );
}
