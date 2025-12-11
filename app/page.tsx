'use client'

import { useState, useEffect } from 'react';
import NavBar from '@/components/sections/NavBar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Work from '@/components/sections/Work';
import Contact from '@/components/sections/Contact';
import PipProject from '@/components/sections/PipProject';
import Footer from '@/components/sections/Footer';

type ActiveSection = 'home' | 'about' | 'projects' | 'contact';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');

  // Handle hash changes from URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'about') {
        setActiveSection('about');
      } else if (hash === 'projects') {
        setActiveSection('projects');
      } else if (hash === 'contact') {
        setActiveSection('contact');
      } else if (hash === 'home' || hash === '') {
        setActiveSection('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top when project changes
  useEffect(() => {
    if (selectedProject) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProject]);

  const handleProjectSelect = (project: string) => {
    setSelectedProject(project);
    // Scroll to top when selecting a project
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectBack = () => {
    setSelectedProject(null);
    setActiveSection('projects');
  };

  const handleSectionChange = (section: ActiveSection) => {
    setActiveSection(section);
    setSelectedProject(null);
    // Update URL hash
    window.location.hash = section === 'home' ? '' : section;
    // Scroll to top when section changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a project is selected, show only NavBar, PipProject, and Footer
  if (selectedProject) {
    return (
      <>
        <NavBar activeSection={activeSection} onSectionChange={handleSectionChange} />
        <PipProject 
          onBack={handleProjectBack} 
          currentProject={selectedProject}
          onNextProject={handleProjectSelect}
        />
        <Footer />
      </>
    );
  }

  // Show only the active section
  return (
    <>
      <NavBar activeSection={activeSection} onSectionChange={handleSectionChange} />
      {activeSection === 'home' && <Hero />}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Work onProjectSelect={handleProjectSelect} />}
      {activeSection === 'contact' && <Contact onSectionChange={handleSectionChange} />}
      {activeSection !== 'home' && <Footer />}
    </>
  )
}