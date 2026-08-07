import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Experience from "@/components/main/Experience";
import Publications from "@/components/main/Publications";
import Awards from "@/components/main/Awards";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Awards />
      <Contact />
    </main>
  );
}
