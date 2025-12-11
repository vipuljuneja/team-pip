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
  const projects = ["PIP", "CUBIE", "IMPACTO", "YUMMATE", "8X6", "POETRY DAY"];
  
  const currentIndex = projects.indexOf(currentProject);
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const projectData: Record<string, any> = {
    "POETRY DAY": {
      title: "POETRY DAY",
      projectType: "FILM PROJECT",
      role: "SCRIPT WRITER, DIRECTOR, EDITOR",
      isVideo: true,
      vimeoUrl: "https://player.vimeo.com/video/301169220",
      awards: [
        "2019 20th Jeonju International film festival",
        "2019 13th KT&G Great Short Film Festival, Silver Prize"
      ]
    },
    "8X6": {
      title: "8X6",
      projectType: "FILM PROJECT",
      role: "SCRIPT WRITER, DIRECTOR, EDITOR",
      isVideo: true,
      vimeoUrl: "https://player.vimeo.com/video/676705605",
      awards: [
        "2022 9th Mokpo National Road 1 Independent Film Festival",
        "2022 Community Cinema Festival"
      ]
    },
    YUMMATE: {
      title: "YUMMATE",
      projectType: "UX PROJECT",
      role: "UX/UI DESIGNER",
      firstImage: "/project main image/yummate.png",
      firstDescription: "Yummate is designed to inspire healthy, creative cooking by helping users make quick meals with what they already have and discover unique recipes from others.",
      secondImage: "/Yummate_02.png",
      secondDescription: "Users often struggle with deciding what to cook with the ingredients they have at home, lack the ability to filter recipes based on their personal needs and preferences, and have no platform that provides recipes tailored to their individual interests.",
      thirdImage: null,
      thirdDescription: "Yummate helps users create quick, healthy meals tailored to their personal needs and preferences using ingredients they already have at home. It also allows users to follow others for inspiration, discovering unique recipes that encourage creativity and expand their culinary horizons beyond traditional dishes.",
      featureImages: ["/Yummate_04.png"],
      features: [
        {
          number: "01",
          title: "INGREDIENT-TO-MEAL CREATION",
          description: "Yummate allows users to input the ingredients they already have at home and instantly generates meal ideas based on those items. This feature helps reduce food waste and makes cooking quick, easy, and accessible."
        },
        {
          number: "02",
          title: "RECIPE MATCHING & SHOPPING GUIDANCE",
          description: "When users have a specific dish in mind, Yummate analyzes which ingredients they already have and which they are missing. It then provides a tailored recipe and a clear shopping list of what to buy, simplifying meal planning and preparation."
        },
        {
          number: "03",
          title: "COMMUNITY & INSPIRATION",
          description: "Yummate includes a user community where people can share their own recipes and discover dishes created by others. This feature encourages creativity, allows users to explore new culinary ideas, and fosters interaction around cooking."
        }
      ]
    },
    IMPACTO: {
      title: "IMPACTO",
      projectType: "PROJECT 1",
      role: "UX/UI DESIGNER",
      firstImage: "/project main image/impacto.png",
      firstDescription: "Impacto is a platform whose core mission is to empower action to build a better world by providing individuals and organizations with essential tools for campaigns and events. Our unique value lies in connecting people to amplify their collective impact on pressing social, environmental, and personal issues.",
      secondImage: "/Impacto_02.png",
      secondDescription: "Motivated individuals and organizations tackling critical modern societal challenges often lack the effective tools and unified platform necessary to successfully organize, promote, and amplify their actions. This fragmentation and inability to connect with others effectively diminishes their collective voice and limits their potential impact, slowing progress on vital social, environmental, and personal issues.",
      thirdImage: null,
      thirdDescription: "Impacto is a platform designed to empower individuals and organizations tackling modern societal challenges by helping them raise voices and take action on social, environmental, and personal issues. Its main features include tools for campaigns and events that drive change, with the unique value of connecting people and groups to amplify their impact, all under the vision to empower action to build a better world.",
      featureImages: ["/Impacto_04.png"],
      features: [
        {
          number: "01",
          title: "REAL-TIME ACTION TRACKING",
          description: "Leveraging a Map API, the platform provides a Live Map capability to monitor crowd flow and accurately track event attendance as it happens."
        },
        {
          number: "02",
          title: "INSTANT COMMUNICATION & ENGAGEMENT",
          description: "Utilizing Firestore, Impacto ensures users can instantly share the event, join conversations, and receive immediate updates in real-time."
        },
        {
          number: "03",
          title: "SEAMLESS PARTICIPATION & AMPLIFICATION",
          description: "The app simplifies joining by allowing participants to join events with one click, connect instantly with all other attendees, and maximize the potential for making real impact."
        }
      ]
    },
    CUBIE: {
      title: "CUBIE",
      projectType: "PROJECT 2",
      role: "UX/UI DESIGNER",
      firstImage: "/project main image/cubie.png",
      firstDescription: "Cubie is a child-friendly learning management platform designed specifically for elementary school students, teachers, and parents in the Vancouver Lower Mainland school districts. It bridges the gap in age-appropriate educational technology by offering intuitive, visual interfaces for young learners, while still providing robust features for educators and parents.",
      secondImage: "/Cubie_02.png",
      secondDescription: "Currently, elementary schools across Vancouver Lower Mainland districts rely on platforms such as Office 365 and Google Classroom—systems that were not designed with young children in mind. This misalignment creates significant challenges: students often face confusing interfaces and struggle to manage their assignments independently; teachers spend valuable time providing technical support and coordinating materials across disjointed systems; and parents encounter limited access to their child's learning progress, complex login procedures, and a lack of timely updates.",
      thirdImage: null,
      thirdDescription: "Cubie is an all-in-one learning platform built for elementary schools that addresses educational challenges by providing a child-friendly interface, an integrated teacher dashboard, parent engagement tools, and AI-powered personalized practice to streamline instruction and maximize student achievement.",
      featureImages: ["/Cubie_04.png"],
      features: [
        {
          number: "01",
          title: "CHILD-FRIENDLY INTERFACE",
          description: "The platform simplifies navigation using visual, intuitive layouts that are aligned with young children's cognitive abilities, which allows students to manage assignments independently without becoming overwhelmed."
        },
        {
          number: "02",
          title: "INTEGRATED TEACHER DASHBOARD",
          description: "This centralized tool allows teachers to efficiently manage course content, assign homework, and track student progress all in one location, thus saving time and reducing the need for technical troubleshooting."
        },
        {
          number: "03",
          title: "AI-POWERED PRACTICE SUPPORT",
          description: "Cubie offers smart, personalized learning activities that effectively support students' understanding, thereby reducing the burden on teachers to constantly re-teach material or provide repetitive one-on-one assistance."
        }
      ]
    },
    PIP: {
      title: "PIP",
      projectType: "CAPSTONE PROJECT",
      role: "UX/UI DESIGNER, CO-PM",
      firstImage: "/project main image/pip.png",
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

        {/* First Image or Video */}
        <div className="py-6 md:ml-[20%] md:p-10 flex flex-col items-center justify-center md:gap-10">
          {project.isVideo ? (
            <div className="w-full mb-8 md:mb-0 md:flex md:items-center md:justify-center md:px-4 overflow-hidden">
              <div className="w-full aspect-video">
                <iframe
                  src={project.vimeoUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                ></iframe>
              </div>
            </div>
          ) : (
            <div className="w-full mb-8 md:mb-0 md:flex md:items-center md:justify-center md:px-4 overflow-hidden">
              <Image 
                src={project.firstImage}
                alt={`${project.title} app mockups`}
                width={1200}
                height={600}
                className={`w-full h-auto md:object-contain object-cover md:origin-center ${
                  currentProject === "IMPACTO" || currentProject === "CUBIE" || currentProject === "YUMMATE"
                    ? "md:max-h-[600px] lg:max-h-[700px]" 
                    : "md:max-h-[300px] md:scale-140"
                }`}
              />
            </div>
          )}

        {/* First Description or Awards */}
        <div className="">
          {project.isVideo && project.awards ? (
            <div className="md:text-lg leading-tight mb-8">
              {project.awards.map((award: string, index: number) => (
                <p key={index} className="mb-2">{award}</p>
              ))}
            </div>
          ) : (
            <p className="md:text-lg leading-tight mb-8">
              {project.firstDescription}
            </p>
          )}
        </div>
        </div>



        {!project.isVideo && project.secondImage && (
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
        )}

        {/* Third Image - Similar to second but different background */}
        {!project.isVideo && (
          <>
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
          </>
        )}
       

        {/* PIP Recognition Text */}
       
        {/* Project Main Features - Title */}
        {!project.isVideo && (
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
        )}

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