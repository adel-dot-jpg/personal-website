import Image from "next/image";
import Spacefiller from "../../components/Spacefiller";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <>

      <Hero/>
      <Projects/>
      <Experience/>
      <Contact/>
      
    </>
  );
}
