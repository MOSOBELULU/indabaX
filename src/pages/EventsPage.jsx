import { useState } from "react";
import { events } from "../data/DummyData";
import EventModal from "../components/events/EventModal";
import HeroEventsSection from "../components/events/EventsHero";
import JoinUs from "../components/reusable/JoinUs";
import EventsSection from "../components/events/EventsSection";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
    <HeroEventsSection/>
    <EventsSection/>
    <JoinUs/>
    </>
  );
}
