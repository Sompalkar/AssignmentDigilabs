import { useState } from "react";
import "./App.css";
import Navbar from "./compoenents/Navbar";
import HeroSection from "./compoenents/HeroSection";
import LogoCloud from "./compoenents/LogoCloud";
import FeatureSection from "./compoenents/FeatureSection";
import Feature from "./compoenents/Feature";
import Stats from "./compoenents/Stats";
import Testimonial from "./compoenents/Testimonial";
import CallToAction from "./compoenents/CallToAction";
import Footer from "./compoenents/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-[#FFFFFF] min-h-screen">
      <Navbar />
      <HeroSection />
      <LogoCloud />
      <FeatureSection />
      <Feature />
      <Stats />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
