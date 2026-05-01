import Classes from "./components/Classes";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Testimonial from "./components/Testimonial";
import WhatWeDo from "./components/WhatWeDo";

const Home = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Classes />
      <Programs />
      <CTA />
      <Testimonial />
    </>
  );
};

export default Home;
