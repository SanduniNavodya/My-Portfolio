// components/main/Projects.tsx
import React from "react";
import ProjectCard from "../sub/ProjectCard"; // Correct import path for ProjectCard
import { AnimatedSection } from "../main/AnimatedSection"; // Assuming AnimatedSection is available

// Project data
const projects = [
  {
    src: "/house.jpg",
    title: "House Price Prediction System",
    description: "A House Price Prediction System leveraging machine learning and regression analysis to provide accurate property value estimates. Built with React, Vite, and Flask, it features an intuitive interface for entering property details and delivers precise pricing insights for smarter real estate decisions.",
    technologies: ["Python", "Machine Learning", "Regression Analysis", "Flask", "React.js"],
    githubLink: "https://github.com/SanduniNavodya/House-Price-Prediction-System.git",
  },
  {
    src: "/phone.jpg",
    title: "Mobile Recommendation System",
    description: "A web-based Mobile Recommendation System designed to simplify choosing the ideal mobile device. Built with Python and Streamlit, it features an intuitive interface and comprehensive filters like brand, storage, RAM, and price, delivering personalized recommendations to meet user preferences.",
    technologies: ["Python", "Machine Learning", "Pickle", "Streamlit"],
    githubLink: "https://github.com/SanduniNavodya/Mobile-Recommendation-System.git",
  },
  {
    src: "/summary.jpg",
    title: "Text Summarization & Analysis System",
    description: "A Python-based Text Summarization and Analysis System utilizing NLP and Machine Learning to process large text efficiently. With a user-friendly Streamlit interface, it provides quick summaries and insightful text analysis to enhance productivity.",
    technologies: ["NLP", "Python", "Machine Learning", "Deep Learning", "Streamlit"],
    githubLink: "https://github.com/SanduniNavodya/End-to-End-Text-Summarization-and-Analysis-System.git",
  },
  {
    src: "/email.jpg",
    title: "GenAI Cold Email Generator",
    description: "An AI-powered Cold Email Generator designed to automate and personalize outreach for business development. Using Llama LLM, LangChain, and ChromaDB, it dynamically crafts tailored emails based on job listings and includes portfolio links to enhance client engagement.",
    technologies: ["NLP", "ChromaDB", "LLM", "Langchain", "Streamlit"],
    githubLink: "https://github.com/SanduniNavodya/genai-cold-email-generator-project.git",
  },
  {
    src: "/vehicle.jpg",
    title: "Vehicle Service Management System",
    description: "A web-based Vehicle Service Management System built with the MERN stack, streamlining operations for Singhe Automotive Company. This platform enhances efficiency and user experience for vehicle owners, service providers, and administrators.",
    technologies: ["MongoDB", "Express", "React.js", "Node.js", "HTML", "CSS", "Tailwind CSS"],
    githubLink: "https://github.com/SanduniNavodya/mern-vsms.git",
  },
  {
    src: "/currency.jpg",
    title: "Currency Converter App",
    description: "A sleek and efficient currency converter app built with React, enabling real-time conversions for seamless global transactions. Perfect for travelers, businesses, and anyone needing quick currency insights!",
    technologies: ["React.js", "Javascript"],
    githubLink: "https://github.com/SanduniNavodya/currency-converter-app.git",
  },
  {
    src: "/event.jpg",
    title: "Online Event Planning System",
    description: "An Online Event Planning System built using Java, HTML, CSS, Bootstrap, and MySQL, designed with MVC architecture. This platform simplifies event organization by providing seamless management for event details, attendees, and schedules.",
    technologies: ["Java", "CSS", "HTML", "Boostrap", "MySQL WorkBench", "MVC Architecture"],
    githubLink: "https://github.com/SanduniNavodya/Online-Event-Planning-System.git",
  },
  {
    src: "/land.jpg",
    title: "Online Land Sale System",
    description: "The Online Land Sale System is a PHP-based web application designed to streamline the process of buying and selling land properties. Featuring JavaScript, CSS, and MySQL integration, this platform offers a user-friendly interface for property listings, searches, and transactions.",
    technologies: ["PHP", "Javascipt", "CSS", "MySQL"],
    githubLink: "https://github.com/SanduniNavodya/online-land-sales-system.git",
  },
];

export function Projects() {
  return (
    <section className="relative py-0 -mt-40 mb-40" id="projects">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover my work that spans various domains, showcasing expertise in building creative and robust solutions.
          </p>
        </AnimatedSection>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <AnimatedSection key={project.title}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
