import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <main>

      <section>
        <Hero />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Experience />
      </section>

      <section>
        <Contact />
      </section>
      
    </main>
  );
}
