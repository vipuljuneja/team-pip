'use client'

import Container from "@/components/ui/Container";
import Image from 'next/image';

interface WorkProps {
  onProjectSelect: (project: string) => void;
}

export default function Work({ onProjectSelect }: WorkProps) {
  const projects = [
    "PIP",
    "FITFOUND",
    "PARKSMART"
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen flex flex-col justify-end bg-white pb-8 md:pb-16"
    >
      <Container className="w-full mb-5 ">
        <div className="flex  flex-col">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => onProjectSelect(project)}
              className="group flex items-center justify-between py-4 md:py-6 border-b-2 border-black cursor-pointer transition-all duration-300 ease-in-out md:hover:pl-4"
            >
              <h2 className="text-2xl md:text-4xl font-bold uppercase text-black transition-all duration-300 ease-in-out">
                {project}
              </h2>
              <Image 
                src="/arrow.png" 
                alt="arrow" 
                width={40}
                height={40}
                className="w-6 h-6 md:w-8 md:h-8 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

