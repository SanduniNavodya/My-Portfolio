import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Experience from "@/components/main/Experience";
import Contact from "@/components/main/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <div className="mt-2"> 
          <Projects />
        </div>
        <div className="mt-2"> 
          <Experience />
        </div>
        <Contact />
      </div>
    </main>

  );
}
