import HeroAbout from "../components/HeroAbout";
import MissionVision from "../components/MissionVision";
import OurStory from "../components/OurStory";
import EventOrganisers from "../components/EventOrganisers"
// import PartnersAndCollabs from "../components/PartnersAndCollabs";
import JoinUs from "../components/JoinUs";
import MiniGallery from "../components/MiniGallery";


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
