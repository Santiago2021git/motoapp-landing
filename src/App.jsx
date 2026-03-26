import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problems } from "./components/Problems";
import { Benefits } from "./components/Benefits";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Features } from "./components/Features";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App(){
  return(
    <div className="bg-black">
      <Navbar/>
      <Hero/>
      <Problems/>
      <Benefits/>
      <Pricing/>
      <Testimonials/>
      <Team/>
      <Features/>
      <CTA/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}