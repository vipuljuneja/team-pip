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
  const projects = ["PIP", "CUBIE", "IMPACTO", "YUMMATE"];
  
  const currentIndex = projects.indexOf(currentProject);
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const projectData: Record<string, any> = {
    PIP: {
      title: "PIP",
      projectType: "CAPSTONE PROJECT",
      role: "LEAD PRODUCT DESIGNER | CO-PM",
      firstImage: "/first.png",
      firstDescription: "PIP is a mobile app that helps people with social anxiety practice everyday interactions in a safe, private space. It offers AI feedback on both verbal and non-verbal communication and uses a level-based system to help users build confidence step by step in real-life situations.",
      secondImage: "/second.png",
      secondDescription: "Over 7% of Canadians aged 15 and up—over 2.5 million people—struggle with social anxiety, a number that has more than doubled in the past 20 years. Many overthink how they appear, fear being judged, and replay small mistakes, leading them to avoid conversations or hold back from opportunities—not from a lack of desire to connect, but from fear of making mistakes.",
      thirdImage: "/third.png",
      thirdDescription: "PIP recognizes that people with social anxiety often withdraw, doubt themselves, and need a safe space to build confidence. Through gentle practice, supportive feedback, and reflection tools, it helps users slowly face social situations and feel more comfortable connecting with others.",
      featureImages: ["/fourth1.png", "/fourth2.png", "/fourth3.png"],
      features: [
        {
          number: "01",
          title: "COMPREHENSIVE AI-POWERED FEEDBACK",
          description: "Users choose a scenario, and PIP gently adapts to them—listening to their voice, noticing their expressions, and highlighting what they're already doing well. Soft, encouraging suggestions help them grow at a comfortable pace. Practice starts with simple voice exercises with the PIP mascot, then moves to a friendly human character, and eventually a warm, human-like avatar for a fully immersive, supportive experience."
        },
        {
          number: "02",
          title: "ENCOURAGEMENT AND REFLECTIVE SPACE",
          description: "After each session, PIP sends a warm letter from the mascot, celebrating small wins users might have overlooked and offering gentle guidance for what to try next. Alongside it, users can review a simple session transcript or write personal reflections, making it easy to track progress without pressure. By turning training data into uplifting notes, PIP helps users stay motivated, feel understood, and recognize that every step forward matters."
        },
        {
          number: "03",
          title: "DAILY MENTAL WELLNESS ARTICLES",
          description: "Every day, PIP shares a selection of confidence-boosting articles that provide practical insights in a gentle, easy-to-apply way like easing nerves or practicing small conversation tips. If any piece resonates, users can save it, creating a personal library of guidance and reassurance to revisit anytime."
        }
      ]
    },
    IMPACTO: {
      title: "IMPACTO",
      projectType: "PROJECT 1",
      role: "LEAD UX/UI DESIGNER",
      firstImage: "/Impacto_01.png",
      firstDescription: "Impacto is a unified platform that simplifies grassroots activism by connecting communities with meaningful causes. Users can easily find, join, or create events and petitions in one place, supported by tools like real-time updates, a Life Map for locations, and goal tracking to help organizers run engaging, efficient activities.",
      secondImage: "/Impacto_02.png",
      secondDescription: "Organizing public events is overly complicated due to the difficulty of initial planning, legal compliance, and effective audience engagement. Existing platforms are inefficient for tracking support and attendance, leaving organizers unable to easily verify who is committed to the cause. Simultaneously, potential participants struggle to find relevant events across scattered platforms, face challenges in verifying organizer credibility, and feel disconnected from the community due to poor communication tools.",
      thirdImage: null,
      thirdDescription: "Impacto is a unified platform for organizing and participating in events and petitions. It streamlines the process by offering a single place to find, join, or create activities. The platform enhances logistics and engagement through real-time updates via Live Chat and location tracking with Life Map. It empowers organizers with tools to track participant numbers and set petition goals, while improving the attendee experience with personalized event recommendations.",
      featureImages: ["/Impacto_04.png"],
      features: [
        {
          number: "01",
          title: "ROLE-BASED HOMEPAGE",
          description: "Students, teachers, and parents see a homepage tailored to their role, with relevant tools and an age-appropriate interface."
        },
        {
          number: "02",
          title: "CONTENT MANAGEMENT",
          description: "Teachers can easily organize lesson materials, homeworks, and resources all in one place. Teachers can easily organize lesson materials, homeworks, and resources all in one place."
        },
        {
          number: "03",
          title: "SMART DASHBOARD & DATA VISUALIZATION",
          description: "Track student progress at a glance with a dynamic dashboard that visualizes key learning data, insights, and trends in real time."
        }
      ]
    },
    CUBIE: {
      title: "CUBIE",
      projectType: "PROJECT 2",
      role: "LEAD UX/UI DESIGNER",
      firstImage: "/Cubie_01.png",
      firstDescription: "Cubie is a unified platform that simplifies grassroots activism by connecting communities with meaningful causes. Users can easily find, join, or create events and petitions in one place, supported by tools like real-time updates, a Life Map for locations, and goal tracking to help organizers run engaging, efficient activities.",
      secondImage: "/Cubie_02.png",
      secondDescription: "Organizing public events is overly complicated due to the difficulty of initial planning, legal compliance, and effective audience engagement. Existing platforms are inefficient for tracking support and attendance, leaving organizers unable to easily verify who is committed to the cause. Simultaneously, potential participants struggle to find relevant events across scattered platforms, face challenges in verifying organizer credibility, and feel disconnected from the community due to poor communication tools.",
      thirdImage: null,
      thirdDescription: "Cubie is a unified platform for organizing and participating in events and petitions. It streamlines the process by offering a single place to find, join, or create activities. The platform enhances logistics and engagement through real-time updates via Live Chat and location tracking with Life Map. It empowers organizers with tools to track participant numbers and set petition goals, while improving the attendee experience with personalized event recommendations.",
      featureImages: ["/Cubie_04.png"],
      features: [
        {
          number: "01",
          title: "ROLE-BASED HOMEPAGE",
          description: "Students, teachers, and parents see a homepage tailored to their role, with relevant tools and an age-appropriate interface."
        },
        {
          number: "02",
          title: "CONTENT MANAGEMENT",
          description: "Teachers can easily organize lesson materials, homeworks, and resources all in one place."
        },
        {
          number: "03",
          title: "SMART DASHBOARD & DATA VISUALIZATION",
          description: "Track student progress at a glance with a dynamic dashboard that visualizes key learning data, insights, and trends in real time."
        }
      ]
    },
    YUMMATE: {
      title: "YUMMATE",
      projectType: "UX PROJECT",
      role: "UX/UI DESIGNER",
      firstImage: "/Yummate_01.png",
      firstDescription: "Yummate is designed to make everyday cooking easier by helping people use the ingredients they already have, apply filters that match their personal needs, and discover recipes tailored to their unique tastes and preferences.",
      secondImage: "/Yummate_02.png",
      secondDescription: "People often struggle to decide what to cook with the ingredients they already have, especially when they can't filter options based on their personal needs or preferences. On top of that, there's no platform that offers recipes truly tailored to individual interests, making meal planning even more frustrating.",
      thirdImage: null,
      thirdDescription: "Yummate helps users create quick, healthy meals tailored to their personal needs and preferences using ingredients they already have at home. It also allows users to follow others for inspiration, discovering unique recipes that encourage creativity and expand their culinary horizons beyond traditional dishes.",
      featureImages: ["/Yummate_04.png"],
      features: [
        {
          number: "01",
          title: "INGREDIENT TO RECIPE SUGGESTIONS",
          description: "Simply enter the ingredients you have on hand, and Yummate instantly suggests a variety of recipes you can make. No more guesswork or wasted food — just quick, personalized meal ideas that fit your pantry and your taste."
        },
        {
          number: "02",
          title: "RECIPE TO INGREDIENT LISTS",
          description: "Choose a recipe you want to make, and Yummate instantly tells you exactly what ingredients you'll need. Easily plan your shopping or check what's already in your kitchen, so cooking becomes simple and stress-free. Easily swap ingredients based on your dietary needs, allergies, or taste preferences. Yummate suggests smart alternatives so you can enjoy any recipe your way — without compromising on flavor or nutrition."
        },
        {
          number: "03",
          title: "COMMUNITY",
          description: "Connect with fellow food lovers by sharing your own recipes and discovering creations from the Yummate community. Like, comment, and get inspired — cooking has never been this social."
        }
      ]
    }
  };

  const project = projectData[currentProject] || projectData.PIP;
  const features = project.features;

  return (
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
              className={`w-full h-auto md:object-contain object-cover md:origin-center ${
                currentProject === "IMPACTO" || currentProject === "CUBIE" || currentProject === "YUMMATE"
                  ? "md:max-h-[600px] lg:max-h-[700px]" 
                  : "md:max-h-[300px] md:scale-160"
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
          <div className="border-t-4 border-black mt-16 p-8 ">
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
  );
}