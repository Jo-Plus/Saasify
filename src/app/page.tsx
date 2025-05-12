import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowCase } from "@/sections/ProductShowCase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (<>
  <Header/>
  <Hero/>
  <LogoTicker/>
  <ProductShowCase/>
  <Pricing/>
  <Testimonials/>
  <CallToAction/>
  <Footer/>
  </>);
}
