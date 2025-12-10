'use client'

import Container from "@/components/ui/Container";
import Image from 'next/image';
import { useState, useEffect } from "react";

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const experiences = [
    {
      title: "DUBBING ARCHIVAL ASSET SPECIALIST",
      dates: "2023 - 2024",
      company: "@IYUNO | FREELANCE",
      description: "Executed full-cycle Linguistic QC and ARS audits to ensure linguistic and technical accuracy of dubbed assets. Managed screen performance by optimizing Forced Narrative placement and verifying archival timecode synchronization."
    },
    {
      title: "PROJECT COORDINATOR",
      dates: "2021 - 2023",
      company: "@COMPANY | TYPE",
      description: "Coordinated multiple projects simultaneously, ensuring timely delivery and quality standards. Managed cross-functional teams and maintained clear communication channels between stakeholders."
    },
    {
      title: "CUSTOMER EXPERIENCE PROFESSIONAL",
      dates: "2021 - 2021",
      company: "@COMPANY | TYPE",
      description: "Developed and maintained web applications using modern frameworks. Collaborated with senior developers to implement new features and improve existing functionality."
    }
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <>
      {/* 1. Large Intro Text */}
      <section 
        id="about" 
        className="min-h-screen flex items-center md:pt-[30vh]  justify-center bg-white pt-24"
      >
        <Container >
          <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center">
           Poppy Prasartset is a UX/UI and product designer specializing in user
    experience, interaction design, and digital storytelling. She brings
    post-production and project management experience, applying narrative,
    precision, and collaboration to craft meaningful digital experiences.
          </p>
        </Container>
      </section>

      {/* 2. Image + Bio */}
      <section className="min-h-screen py-16 flex bg-black text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 md:min-h-[80vh]">
            {/* Image - First on mobile, right on desktop (centered vertically) */}
            <div className="flex items-start md:items-center justify-center md:order-2">
              <div className="w-full aspect-square flex items-center justify-center">
                <Image 
                  src="/poppy.png" 
                  alt="Poppy Prasartset"
                  width={800}
                  height={800}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Text - Second on mobile, left on desktop (bottom-aligned) */}
            <div className="flex flex-col justify-start md:justify-end md:order-1">
              <p className="text-base md:text-lg leading-relaxed text-left">
                Poppy focuses on UX, UI, and product design to create purposeful, inclusive, and accessible interfaces. She collaborates across disciplines to deliver consistent, user-centered experiences, while exploring 3D to add spatial and interactive depth.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Experience */}
      <section 
        id="experience" 
        className="min-h-screen flex py-16 bg-white"
      >
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold mb-12 uppercase text-black">Experiences</h1>
          <div className="flex flex-col gap-0">
            {experiences.map((exp, index) => {
              // On mobile: use click, on desktop: use hover
              const isOpen = isMobile ? openIndex === index : hoverIndex === index;
              
              return (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                    className={`
                    cursor-pointer transition-all duration-300 ease-in-out
                    ${isOpen 
                      ? 'bg-black text-white p-4 md:p-6' 
                      : 'bg-white text-black border-b-5 border-black py-4 md:py-8'
                    }
                  `}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                    <h2 className={`
                      font-bold uppercase transition-all duration-300 ease-in-out
                      ${isOpen 
                        ? 'text-xl md:text-4xl lg:text-5xl text-white' 
                        : 'text-3xl md:text-4xl lg:text-5xl text-black'
                      }
                    `}>
                      {exp.title}
                    </h2>
                    <p className={`
                      font-bold transition-all duration-300 ease-in-out
                      ${isOpen 
                        ? 'text-lg md:text-4xl lg:text-5xl text-white md:text-right' 
                        : 'text-2xl md:text-4xl lg:text-5xl text-black md:text-right'
                      }
                    `}>
                      {exp.dates}
                    </p>
                  </div>
                  <div className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}
                  `}>
                    <p className={`
                      text-sm md:text-base mb-2
                      ${isOpen ? 'text-gray-300' : 'text-gray-600'}
                    `}>
                      {exp.company}
                    </p>
                    <div className={`
                      pt-2 border-t
                      ${isOpen ? 'border-gray-600' : 'border-gray-300'}
                    `}>
                      <p className={`
                        text-sm md:text-base leading-relaxed
                        ${isOpen ? 'text-white' : 'text-black'}
                      `}>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Skills */}
      <section 
        id="skills" 
        className=" mb-[20vh] bg-white text-black"
      >
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold mb-12 uppercase text-black">Skills</h1>
          <div className="border-b border-black mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-semibold uppercase text-black">FIGMA</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">PHOTOSHOP</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">SKETCHUP</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">AFTER EFFECTS</p>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-semibold uppercase text-black">MIRO</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">ILLUSTRATOR</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">NOMAD SCULPT</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">PREMIERE PRO</p>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-semibold uppercase text-black">FRAMER</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">INDESIGN</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">WOMP</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">CAPCUT</p>
            </div>
            {/* Column 4 */}
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-semibold uppercase text-black">WORDPRESS</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">PROCREATE</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">HTML/CSS/JS</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

