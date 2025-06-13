import HeroAbout from "../components/about/HeroAbout";
import MissionVision from "../components/about/MissionVision";
import OurStory from "../components/about/OurStory";
import EventOrganisers from "../components/reusable/EventOrganisers";
import JoinUs from "../components/reusable/JoinUs";
import MiniGallery from "../components/about/MiniGallery";
import Impact from "../components/about/Impact";
import AdvisoryBoard from "../components/about/AdvisoryBoard";
import Values from "../components/about/Values";
import EventOrganisersAbout from "../components/about/eventOrganisersAbout";


export default function AboutUs() {
  return (
    <>
<HeroAbout/>
<OurStory />
<MissionVision/>
<Impact/>
<Values/>
<AdvisoryBoard/>
<MiniGallery/>
{/* <EventOrganisers/> */}
<EventOrganisersAbout/>
<JoinUs/>
    </>
  );
}
