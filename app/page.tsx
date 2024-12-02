import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Contact from "@/components/main/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <div className="mt-2"> {/* Add a custom margin here */}
          <Projects />
        </div>
        <Contact />
      </div>
    </main>

  );
}
