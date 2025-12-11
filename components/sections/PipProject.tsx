'use client'

import Container from "@/components/ui/Container";
import Image from 'next/image';

interface PipProjectProps {
  onBack: () => void;
  currentProject: string;
  onNextProject: (project: string) => void;
}

interface Feature {
  number: string;
  title: string;
  description: string;
}

export default function PipProject({ onBack, currentProject, onNextProject }: PipProjectProps) {
  const projects = ["PIP", "FITFOUND", "PARKSMART"];
  
  const currentIndex = projects.indexOf(currentProject);
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const projectData: Record<string, any> = {
    PIP: {
      title: "PIP",
      projectType: "CAPSTONE PROJECT",
      role: "LEAD DEVELOPER",
      firstImage: "/first.png",
      firstDescription: "PIP is a mobile application built with React Native and Metro bundler, featuring AI-powered feedback systems for social anxiety support. The platform integrates real-time voice processing using Deepgram API, facial expression analysis with MediaPipe, and AI avatars through D-ID API. Built with TypeScript for type safety and Material-UI for consistent design.",
      secondImage: "/second.png",
      secondDescription: "Developed using MERN stack with Node.js and Express.js for the backend, MongoDB and Supabase for cloud database management, and Firebase for authentication. The application implements RESTful APIs for session management, user progress tracking, and AI feedback processing. Hosted on Amazon AWS and Vercel for scalable infrastructure.",
      thirdImage: "/third.png",
      thirdDescription: "Integrated multiple third-party APIs including OpenAI for natural language processing, Deepgram for speech-to-text conversion, MediaPipe for facial recognition, and D-ID for AI avatar generation. The backend uses Express.js with TypeScript, while the frontend leverages React Native with Material-UI components. Authentication is handled through Firebase, and data is stored in MongoDB and Supabase for optimal performance.",
      demoVideo: "/pipdemo.mp4",
      featureImages: ["/fourth1.png", "/fourth2.png", "/fourth3.png"],
      features: [
        {
          number: "01",
          title: "AI INTEGRATION & THIRD-PARTY APIs",
          description: "Integrated multiple AI services including OpenAI for natural language processing, Deepgram API for real-time speech recognition and transcription, MediaPipe for facial expression analysis, and D-ID API for AI-powered avatar generation. Developed custom API wrappers and error handling for seamless third-party service integration."
        },
        {
          number: "02",
          title: "BACKEND ARCHITECTURE & DATABASE",
          description: "Built scalable backend using Node.js and Express.js with TypeScript. Implemented MongoDB for primary data storage and Supabase for additional cloud database needs. Designed efficient database schemas for user profiles, session history, and progress tracking. Integrated Firebase Authentication for secure user management."
        },
        {
          number: "03",
          title: "FRONTEND DEVELOPMENT & HOSTING",
          description: "Developed mobile application using React Native with Metro bundler for efficient code bundling. Implemented Material-UI for consistent and modern UI components. Deployed backend services on Amazon AWS for scalability and frontend on Vercel for optimal performance. Implemented proper state management and error handling throughout the application."
        }
      ]
    },
    PARKSMART: {
      title: "PARK SMART",
      projectType: "PROJECT 3",
      role: "FULLSTACK DEV",
      firstImage: "/park1.png",
      firstDescription: "Park Smart is a full-stack web application built with JavaScript, HTML, and CSS, featuring Firebase for authentication and database management. The platform connects parking space owners with drivers, enabling seamless booking and management of parking spaces without an approval process.",
      secondImage: "/park2.png",
      secondDescription: "Developed using Firebase Authentication for secure user login and registration, Firebase Realtime Database for storing parking listings, bookings, and user data. Implemented Google Maps API integration for location selection and mapping. Built with vanilla JavaScript for frontend logic and Firebase SDK for backend services.",
      thirdImage: null,
      thirdDescription: "The application features a dual-user system supporting both parking space owners and drivers. Owners can list parking spaces directly without approval, set pricing and availability, and manage bookings through a comprehensive dashboard. Drivers can search for parking, filter results, book spaces, and manage their reservations. All data is synchronized in real-time using Firebase Realtime Database.",
      featureImages: ["/park3.png"],
      features: [
        {
          number: "01",
          title: "FIREBASE INTEGRATION & AUTHENTICATION",
          description: "Implemented Firebase Authentication for secure user registration and login for both drivers and parking space owners. Integrated Firebase Realtime Database for storing user profiles, parking listings, bookings, and payment information. Used Firebase Storage for uploading and managing parking space photos. Implemented real-time data synchronization for live booking updates."
        },
        {
          number: "02",
          title: "GOOGLE MAPS API & LOCATION SERVICES",
          description: "Integrated Google Maps API for location selection when listing parking spaces. Implemented geocoding for address-to-coordinates conversion and reverse geocoding for display. Added distance calculation between parking spaces and user destinations. Created interactive maps for visualizing parking locations and search results."
        },
        {
          number: "03",
          title: "BOOKING SYSTEM & PAYMENT PROCESSING",
          description: "Developed a complete booking flow with car details input, date/time selection, and confirmation system. Implemented payment integration for processing booking transactions. Created notification system for booking confirmations and reminders. Built booking management dashboard for both users and owners with filtering and search capabilities."
        }
      ]
    },
    FITFOUND: {
      title: "FITFOUND",
      projectType: "PROJECT 2",
      role: "LEAD DEVELOPER",
      firstImage: "/fitfound1.png",
      firstDescription: "FitFound is a full-stack MERN application built with JavaScript, React for the frontend, and Node.js with Express.js for the backend. The platform implements a reversed hiring model where employers actively search for candidates. Features Firebase Authentication for secure user management and MongoDB for data storage.",
      secondImage: "/fitfound2.png",
      secondDescription: "Developed using the MERN stack (MongoDB, Express.js, React, Node.js) with JavaScript throughout the application. Implemented Firebase Authentication for user login, registration, and session management. Built RESTful APIs using Express.js for candidate search, profile management, and matching algorithms. The application uses MongoDB for flexible document-based data storage.",
      thirdImage: null,
      thirdDescription: "Built with a modular architecture using React for component-based frontend development and Express.js for backend API routes. Implemented Firebase Authentication with email/password and social login options. Created MongoDB schemas for users, job postings, and candidate profiles. Developed search and filtering functionality with efficient database queries and indexing.",
      demoVideo: "/fitfoundDemo.mp4",
      featureImages: ["/fitfound3.png"],
      features: [
        {
          number: "01",
          title: "MERN STACK DEVELOPMENT",
          description: "Built complete full-stack application using MongoDB for database, Express.js for backend API development, React for frontend user interface, and Node.js as the runtime environment. Implemented RESTful API architecture with proper routing, middleware, and error handling. Developed reusable React components for consistent UI/UX."
        },
        {
          number: "02",
          title: "FIREBASE AUTHENTICATION & DATABASE",
          description: "Integrated Firebase Authentication for secure user management including email/password authentication and social login providers. Implemented role-based access control for employers and candidates. Used MongoDB for storing user profiles, job listings, and application data with efficient querying and indexing strategies."
        },
        {
          number: "03",
          title: "SEARCH & MATCHING FUNCTIONALITY",
          description: "Developed candidate search functionality with filtering, sorting, and pagination capabilities. Implemented matching algorithms to connect employers with suitable candidates based on skills and experience. Built responsive React components for search interface and result display. Created API endpoints for real-time search and profile updates."
        }
      ]
    }
  };

  const project = projectData[currentProject] || projectData.PIP;
  const features = project.features;

  return (
    <>
    <section className="min-h-screen bg-white pt-20 md:pt-24">
      <Container>
        {/* Back Arrow and Title */}
        <div className="flex flex-col items-start gap-4 mb-12">
          <button onClick={onBack} className="cursor-pointer flex-shrink-0">
            <Image 
              src="/reply.png" 
              alt="back arrow" 
              width={40}
              height={40}
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </button>
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-semibold uppercase">{project.title}</h1>
          {currentProject === "PIP" && (
            <a
              href="https://pip-wmdd.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 cursor-pointer group mt-2"
            >
              <span className="text-sm md:text-base font-semibold uppercase text-black opacity-70 hover:opacity-100 transition-opacity">
                VIEW LANDING PAGE
              </span>
              <Image 
                src="/arrowSmall.png" 
                alt="landing page arrow" 
                width={20}
                height={20}
                className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
          )}
          {currentProject === "FITFOUND" && (
            <a
              href="https://fit-found.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 cursor-pointer group mt-2"
            >
              <span className="text-sm md:text-base font-semibold uppercase text-black opacity-70 hover:opacity-100 transition-opacity">
                VIEW LANDING PAGE
              </span>
              <Image 
                src="/arrowSmall.png" 
                alt="landing page arrow" 
                width={20}
                height={20}
                className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
          )}
        </div>

        {/* Project Type - Centered */}
        <div className="md:ml-[20%] text-right mb-8 md:mb-15 md:flex justify-between md:pr-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold uppercase pb-4">
            {project.projectType}
          </p>

        {/* Role - Right Aligned */}
<div>
          <p className="text-lg md:text-xl font-bold uppercase md:text-left">ROLE</p>
          <p className="text-base md:text-lg">
            {project.role}
          </p>
          </div>
          
        </div>

        {/* First Image */}
        <div className="py-6 md:ml-[20%] md:p-10 flex flex-col items-center justify-center md:gap-10">

          {/* <div className="w-full mb-8 md:mb-0 md:h-full md:flex md:items-center md:justify-center md:px-4">
           */}
            <div className="w-full mb-8 md:mb-0 md:flex md:items-center md:justify-center md:px-4 overflow-hidden">
            <Image 
              src={project.firstImage}
              alt={`${project.title} app mockups`}
              width={1200}
              height={600}
              priority
              quality={90}
              className={`w-full h-auto md:object-contain object-cover md:origin-center ${
                currentProject === "PARKSMART" || currentProject === "FITFOUND"
                  ? "md:max-h-[600px] lg:max-h-[700px]" 
                  : "md:max-h-[300px] md:scale-140"
              }`}
            />
          </div>

        {/* First Description */}
        <div className="">
          <p className="md:text-lg leading-tight mb-8">
            {project.firstDescription}
          </p>
        </div>
        </div>



        <div className="py-6 md:py-10 w-full flex flex-col md:items-center md:justify-center md:flex-row md:gap-10">
  <div className="w-full md:w-1/2 mb-8 md:mb-0 md:self-start md:-mt-8">
    <Image 
      src={project.secondImage}
      alt={`${project.title} features overview`}
      width={1600}
      height={1600}
      quality={85}
      loading="lazy"
      className="w-full h-auto object-cover"
    />
  </div>
  <div className="w-full md:w-1/2 md:text-center md:self-end md:mt-8">
    <p className="text-base  leading-relaxed md:text-left">
      {project.secondDescription}
    </p>
  </div>
</div>

        {/* Third Image - Similar to second but different background */}
        {project.thirdImage ? (
          <div className="flex flex-col items-center justify-center">
            <div className="w-full flex justify-center">
              <Image 
                src={project.thirdImage}
                alt={`${project.title} app features`}
                width={1200}
                height={800}
                quality={85}
                loading="lazy"
                className="w-2/3 md:w-1/2 lg:w-5/12 h-auto object-cover md:scale-130"
              />
            </div>
            
            {/* Same text as purple section */}
            {project.thirdDescription && (
              <p className="text-base md:text-lg md:px-15 leading-relaxed text-center mb-16 max-w-3xl px-4">
                {project.thirdDescription}
              </p>
            )}
          </div>
        ) : (
          /* Show description text only if no third image */
          project.thirdDescription && (
            <div className="flex flex-col items-center justify-center pt-8 md:pt-12 lg:pt-16">
              <p className="text-base md:text-lg md:px-15 leading-relaxed text-center mb-16 max-w-3xl px-4">
                {project.thirdDescription}
              </p>
            </div>
          )
        )}
       

        {/* PIP Recognition Text */}
       
        {/* Project Main Features - Title */}
        <div className="flex flex-col items-center justify-center" >
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold uppercase mb-5">
          PROJECT MAIN FEATURES
        </h2>

        {/* Feature Images */}
        {project.featureImages && (
          <div className={`w-full flex items-end justify-end gap-4 bg-transparent ${
            project.featureImages.length === 1 ? 'justify-center' : ''
          }`}>
            {project.featureImages.map((img: string, index: number) => (
              <div 
                key={index} 
                className={
                  project.featureImages.length === 1 
                    ? "w-full md:w-2/3 lg:w-1/2 overflow-hidden" 
                    : "w-[110px] md:w-[280px] lg:w-[320px] overflow-hidden"
                }
              >
                <Image
                  src={img}
                  alt={`Feature ${index + 1}`}
                  width={400}
                  height={800}
                  quality={85}
                  loading="lazy"
                  className="w-full h-auto shadow-lg object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Features */}
        <div className="mt-8 md:mt-12 md:ml-90">
          {features.map((feature: Feature, index: number) => (
            <div key={index} className="mb-5 text-left md:flex md:gap-40 pb-5">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-left">{feature.number}</h3>
              <div>
              <h4 className="text-xl md:text-1xl lg:text-1xl font-semibold uppercase mb-6 text-left w-[90%] md:w-full md:text-right">
                {feature.title}
              </h4>
              <p className="font-light text-base md:text-1xl leading-relaxed text-left ">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Next Project */}
      
      </Container>
        {/* Next Project */}
        {nextProject && (
          <div className="border-4 border-black mt-16 p-8 ">
            <button 
              onClick={() => onNextProject(nextProject)}
              className="flex items-center justify-end gap-2 cursor-pointer group w-full"
            >
              <span className="text-2xl md:text-3xl font-bold uppercase text-black">
                {nextProject}
              </span>
              <Image 
                src="/arrow.png" 
                alt="next project arrow" 
                width={40}
                height={40}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </button>
          </div>
        )}
    </section>

    {/* Demo Video - For PIP and FITFOUND - Outside Container */}
    {project.demoVideo && (
      <section className="bg-white py-8 md:py-12">
        <Container>
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold uppercase mb-8">
            DEMO
          </h2>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl">
              <video
                className="w-full h-auto rounded-lg shadow-lg"
                src={project.demoVideo}
                controls
                autoPlay={false}
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Container>
      </section>
    )}
    </>
  );
}