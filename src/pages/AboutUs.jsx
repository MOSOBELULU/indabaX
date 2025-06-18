import HeroAbout from "../components/about/HeroAbout";
import MissionVision from "../components/about/MissionVision";
import OurStory from "../components/about/OurStory";
import JoinUs from "../components/reusable/JoinUs";
import MiniGallery from "../components/about/MiniGallery";
import Impact from "../components/about/Impact";
import AdvisoryBoard from "../components/about/AdvisoryBoard";
// import EventOrganisersAbout from "../components/about/EventOrganisersAbout"
import EventTopics from "../components/about/EventTopics";


export default function AboutUs() {
  return (
    <>
<HeroAbout/>
<OurStory />
<MissionVision/>
<Impact/>
<EventTopics />
<AdvisoryBoard/>
<MiniGallery/>
{/* <EventOrganisersAbout/> */}
<JoinUs/>
    </>
  );
}
