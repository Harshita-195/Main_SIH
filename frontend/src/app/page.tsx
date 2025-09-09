import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import HowItWorksTimeline from "./components/HowItWorksTimeline";
import LoginPrompt from "./components/LoginPrompt";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <Navbar/>
      <Hero />
      <Features/>
      <HowItWorksTimeline/>
      <LoginPrompt/>
      <Footer/>
     
    </>
  );
}
