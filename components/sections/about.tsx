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

  const education = [
    {
      title: "PDD IN WEB AND MOBILE DEV",
      dates: "2024 – 2026",
      institution: "LANGARA COLLEGE",
      description: "Post-Degree Diploma program focusing on full-stack web and mobile development. Developed projects including PIP (React Native mobile app with AI integration), FitFound (MERN stack job-matching platform), and Park Smart (Firebase-based parking booking system). Gained expertise in JavaScript, TypeScript, React, Node.js, Express.js, MongoDB, Firebase, and various third-party API integrations."
    },
    {
      title: "BACHELOR'S OF COMPUTER APPLICATION",
      dates: "JUNE 2020 - JUNE 2023",
      institution: "PANJAB UNIVERSITY",
      description: "Bachelor's degree in Computer Application covering fundamental computer science concepts, programming languages, database management, software engineering, and web technologies. Built a strong foundation in algorithms, data structures, and software development methodologies."
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
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-center">
           I am a full-stack developer specializing in building modern web and mobile applications. I work with MERN stack, React Native, Firebase, and various AI APIs to create scalable, user-centered solutions. My projects include PIP, a mobile app with AI-powered feedback systems, FitFound, a job-matching platform, and Park Smart, a parking space booking application.
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
                  src="/vipul2.jpg" 
                  alt="Vipul Juneja"
                  width={800}
                  height={800}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Text - Second on mobile, left on desktop (bottom-aligned) */}
            <div className="flex flex-col justify-start md:justify-end md:order-1">
              <p className="text-base md:text-lg leading-relaxed text-left">
                I specialize in full-stack development using JavaScript, TypeScript, React, Node.js, and Express.js. I have experience integrating third-party APIs including OpenAI, Deepgram, MediaPipe, and D-ID for AI-powered features. I work with Firebase for authentication and real-time databases, MongoDB for data storage, and deploy applications on AWS and Vercel. My approach combines clean code architecture, efficient database design, and responsive UI development to deliver high-quality digital solutions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Education */}
      <section 
        id="education" 
        className="min-h-screen flex py-16 bg-white"
      >
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold mb-12 uppercase text-black">Education</h1>
          <div className="flex flex-col gap-0">
            {education.map((edu, index) => {
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
                      {edu.title}
                    </h2>
                    <p className={`
                      font-bold transition-all duration-300 ease-in-out
                      ${isOpen 
                        ? 'text-lg md:text-4xl lg:text-5xl text-white md:text-right' 
                        : 'text-2xl md:text-4xl lg:text-5xl text-black md:text-right'
                      }
                    `}>
                      {edu.dates}
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
                      {edu.institution}
                    </p>
                    <div className={`
                      pt-2 border-t
                      ${isOpen ? 'border-gray-600' : 'border-gray-300'}
                    `}>
                      <p className={`
                        text-sm md:text-base leading-relaxed
                        ${isOpen ? 'text-white' : 'text-black'}
                      `}>
                        {edu.description}
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
          <h1 className="text-3xl md:text-4xl font-bold mb-12 uppercase text-black">Development Skills</h1>
          <div className="border-b border-black mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-semibold uppercase text-black">REACT</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">NEXT.JS</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">TYPESCRIPT</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">JAVASCRIPT</p>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-semibold uppercase text-black">NODE.JS</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">EXPRESS</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">PYTHON</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">MONGODB</p>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-semibold uppercase text-black">HTML/CSS</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">TAILWIND CSS</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">POSTGRESQL</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">REST API</p>
            </div>
            {/* Column 4 */}
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-semibold uppercase text-black">GRAPHQL</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">FIREBASE</p>
              <p className="text-lg md:text-xl font-semibold uppercase text-black">REDUX</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

