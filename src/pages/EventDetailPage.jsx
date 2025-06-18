import { useParams } from "react-router-dom";
import { events } from "../data/DummyData";
import EventDetailHero from "../components/events/EventDetailHero";
import EventDetailSection from "../components/events/EventDetailSection";

export default function EventDetailPage() {
  const { id } = useParams();
  const event = events.find((item) => item.id === parseInt(id));

  if (!event) return <div className="text-center py-10">Event not found.</div>;

  return(
    <>
     <EventDetailHero
        title={event.title}
        date={event.date}
        location={event.location}
        image={event.image}
      />
    <EventDetailSection/>
    </>
  )
}