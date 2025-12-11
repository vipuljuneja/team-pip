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
      title: "PROJECT COORDINATOR",
      dates: "2023",
      company: "@EBS International Documentary Festival | Freelance",
      description: "Managed project timelines and facilitated communication with documentary creators and decision-makers. Organized pitching events to secure investment for documentary projects."
    },
    {
      title: "ASSISTANT DIRECTOR",
      dates: "2022 – 2023",
      company: "@Image bakery | Full-time",
      description: "Produced corporate brand videos and art videos for museums from planning through post-production. Oversaw all stages of production, including concept development, shooting, and editing."
    },
    {
      title: "FILM RESTORATION ANALYST",
      dates: "2022",
      company: "@FRD | Full-time",
      description: "Conducted pre-digital restoration of physical film materials and managed archival documentation. Prepared films for high-quality digital scanning and preservation."
    },
    {
      title: "BRANDING & MARKETING COORDINATOR",
      dates: "2021 – 2022",
      company: "@Cooperative Cinema MM | Contract",
      description: "Developed branding strategies and promotional campaigns for a local film cooperative. Focused on cinema branding and marketing initiatives to enhance community engagement."
    },
    {
      title: "PROJECT MANAGER",
      dates: "2019 – 2020",
      company: "@DMZ International Documentary Film Festival | Contract",
      description: "Managed project timelines and facilitated communication with documentary creators and decision-makers. Organized pitching events to secure investment for documentary projects."
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
          Suro is a UX/UI designer focused on creating engaging and meaningful interactive experiences. With a background in film production and theory, she leverages narrative thinking, user-centered design, and collaborative problem-solving to craft intuitive and immersive interfaces.
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
                  src="/about image/Frame 508.png" 
                  alt="Suro Kim"
                  width={800}
                  height={800}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Text - Second on mobile, left on desktop (bottom-aligned) */}
            <div className="flex flex-col justify-start md:justify-end md:order-1">
              <p className="text-base md:text-lg leading-relaxed text-left">
              Suro focuses on UX and UI design to create purposeful and user-centered interactive experiences. Drawing on her background in film production and project coordination, she combines narrative thinking, collaborative communication, and design problem-solving to craft intuitive interfaces, while exploring interactive storytelling to add depth and engagement.
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
              <p className="text-lg md:text-xl font-semibold uppercase text-black">ILLUSTRATOR</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">PHOTOSHOP</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">INDESIGN</p>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-semibold uppercase text-black">LIGHTROOM</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">PREMIERE PRO</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">AFTER EFFECTS</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">FINAL CUT PRO</p>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-semibold uppercase text-black">DAVINCI RESOLVE</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">PRO TOOLS</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">SKETCHUP</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">3DS MAX</p>
            </div>
            {/* Column 4 */}
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-semibold uppercase text-black">BLENDER</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">MAYA</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">HTML/CSS/JS</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">WORDPRESS</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

