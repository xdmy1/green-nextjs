
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
import LogoTicker from "@/components/LogoTicker";
import { GetStaticProps, InferGetStaticPropsType } from "next";


interface data {
  title: string;
  description: string;
  users: string;
  usersDescription: string;
}

// Define `getStaticProps`
export const getStaticProps: GetStaticProps<{ data: data }> = async () => {
  // Simulate data fetching
  const data: data = {
    title: "Discover the Perfect Credit Card for You",
    description:
      "Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.",
    users: "10.2k+",
    usersDescription: "Active users around the world",
  };

  return {
    props: {
      data, // Pass the fetched data to the page
    },
  };
};



const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Nav />
      <Hero/>
      <Stats />
      <LogoTicker />
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

export default Home;