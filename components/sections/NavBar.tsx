  'use client'
  import { useState } from "react"
  import Container from "../ui/Container"
  import NavLink from "../ui/NavLink"
  import Image from 'next/image';

  type ActiveSection = 'home' | 'about' | 'projects' | 'contact';

  interface NavBarProps {
    activeSection: ActiveSection;
    onSectionChange: (section: ActiveSection) => void;
  }

  export default function NavBar({ activeSection, onSectionChange }: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (section: ActiveSection, e?: React.MouseEvent) => {
      e?.preventDefault();
      onSectionChange(section);
      setIsOpen(false);
    };

    function MobileMenuItem({ section, children }: { section: ActiveSection; children: React.ReactNode }) {
      return (
        <button 
          onClick={() => handleNavClick(section)}
          className="flex w-full items-center justify-between py-2 px-4 border-b-3 border-black text-2xl font-semibold uppercase"
        >
          <span>{children}</span>
          <span><Image 
                    src="/arrow.png" 
                    alt="arrow" 
                    width={32}  
                    height={32}
                  /></span>
        </button>
      );
    }
    
    return (
      <>
      <nav className=" fixed top-0 w-full bg-white z-50">
        <Container className="px-md:!px-1 lg:!px-1">
          <div className="flex items-center justify-between py-6">
            {!isOpen && (
              <button 
                onClick={() => handleNavClick('home')}
                className="text-lg md:text-2xl font-bold uppercase"
              >
                Poppy Prasartset
              </button>
            )}
            {isOpen && <div></div>}
          <div className="hidden md:flex gap-8 text-2xl" >
              <button 
                onClick={() => handleNavClick('about')}
                className="group inline-flex items-center gap-2 text-black uppercase font-bold hover:underline transition-all"
              >
                ABOUT
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image 
                    src="/arrow.png" 
                    alt="arrow" 
                    width={16} 
                    height={16}
                  />
                </span>
              </button>
              <button 
                onClick={() => handleNavClick('projects')}
                className="group inline-flex items-center gap-2 text-black uppercase font-bold hover:underline transition-all"
              >
                PROJECT
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image 
                    src="/arrow.png" 
                    alt="arrow" 
                    width={16} 
                    height={16}
                  />
                </span>
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="group inline-flex items-center gap-2 text-black uppercase font-bold hover:underline transition-all"
              >
                CONTACT
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image 
                    src="/arrow.png" 
                    alt="arrow" 
                    width={16} 
                    height={16}
                  />
                </span>
              </button>
          </div>

  {!isOpen && (
                <button 
                  onClick={() => setIsOpen(true)} 
                  className="md:hidden text-2xl z-50"
                >
                  ☰
                </button>
              )}
  
          </div>
          
        </Container>
      </nav>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="md:hidden fixed inset-0 bg-white flex flex-col justify-center gap-4 z-[60] px-4">
          <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-4xl z-[70]"
            >
              ✕
            </button>
              <MobileMenuItem section="home">HOME</MobileMenuItem>
              <MobileMenuItem section="about">ABOUT</MobileMenuItem>
              <MobileMenuItem section="projects">PROJECT</MobileMenuItem>
              <MobileMenuItem section="contact">CONTACT</MobileMenuItem>
        </div>
      )}
      </>
        

    )
  }
