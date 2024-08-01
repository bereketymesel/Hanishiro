import React, { useRef, useEffect } from 'react';
import Home from './components/Home/Home.jsx';
import Aim from './components/Aim/Aim.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Navar from './components/Navar';
import OurMenu from './components/OurMenu/OurMenu';
import Testimonials from './components/Testimonials/Testimonials';
import FoodGallery from './components/FoodGallary/FoodGallry';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const contactUsRef = useRef(null);
  const foodGalleryRef = useRef(null);
  const aboutusRef = useRef(null);
  const ourmenuRef = useRef(null);

  return (
    <main className="overflow-x-hidden">
      <Navar
        contactUsRef={contactUsRef}
        foodGalleryRef={foodGalleryRef}
        ourmenuRef={ourmenuRef}
        aboutusRef={aboutusRef}
      />
      <Home />
      <Aim />
      <AboutUs ref={aboutusRef} />
      <OurMenu ref={ourmenuRef} />
      <Testimonials />
      <FoodGallery ref={foodGalleryRef} />
      <ContactUs ref={contactUsRef} />
    </main>
  );
}

export default App;
