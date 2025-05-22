import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers";
import SpeakersPage from "./pages/Speakers";
import SpeakerDetail from "./pages/SpeakerDetail";
import EventDetail from "./pages/EventDetail";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Gallerypage from "./pages/GalleryPage";


export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/privacypolicy' element={< PrivacyPolicy/>} />
        <Route path='/gallerypage' element={< Gallerypage/>} />
        <Route path='careers' element={< Careers/>} />
        {/* <Route path='/gallery' element={< Gallery/>} /> */}
        <Route path='/speakerspage' element={< SpeakersPage/>}>
        </Route>
        <Route path='/speakerdetail/:id' element={< SpeakerDetail/>}>
        </Route>
        <Route path='/eventdetail/:id' element={< EventDetail/>}>
        </Route>
      </Routes>
    
      <Footer />
    </div>
  );
}
