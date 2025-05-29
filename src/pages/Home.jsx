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
import JoinUs from "../components/about/JoinUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EventOverview />
      <EventOrganisers />
      <AgendaPreview />
      <Events />
      <Testimonials />
      <MiniGallery />
      <Faqs />
      <Sponsorship />
      <JoinUs />
    </>
  );
}
