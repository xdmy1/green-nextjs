import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Offer from "@/components/Offer";
import Design from '@/components/Design';
import Perfect from '@/components/Perfect'; 
import Testimonials from "@/components/Testimonials";
import { div } from "framer-motion/client";
import FAQ from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Offer />
      <Design />
      <Perfect />
      <Testimonials/>
      <FAQ />
      <Cta />
      <Footer />
    </>
  );
}
