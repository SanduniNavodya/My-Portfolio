import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  technologies?: string[];
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  technologies = [],
  githubLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-[#2A0E61] transition-all duration-500 hover:scale-[1.02] hover:opacity-90 hover:shadow-xl flex flex-col h-[600px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-[1]" />

      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] p-4 flex flex-col justify-between h-full">
        <div>
          <h1 className="text-xl font-semibold text-white mb-4">{title}</h1> {/* Increased bottom margin for title */}
          <p className="text-gray-300 mb-6">{description}</p> {/* Increased bottom margin for description */}
        </div>

        {/* Adding space between description and technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-6"> {/* Increased padding-top and gap */}
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {/* Footer Links */}
        <div className="flex gap-4 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
