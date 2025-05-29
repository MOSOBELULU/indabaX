import HeroAbout from "../components/about/HeroAbout";
import MissionVision from "../components/about/MissionVision";
import OurStory from "../components/about/OurStory";
import EventOrganisers from "../components/reusable/EventOrganisers";
import JoinUs from "../components/reusable/JoinUs";
import MiniGallery from "../components/about/MiniGallery";


export default function AboutUs() {
  return (
    <>
<HeroAbout/>
<MissionVision/>
<OurStory />
<EventOrganisers/>
<MiniGallery/>
{/* <PartnersAndCollabs/> */}
<JoinUs/>
    </>
  );
}
