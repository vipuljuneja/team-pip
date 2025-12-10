'use client'

import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black py-12 md:pr-40" style={{ backgroundColor: '#E7E7E7' }}>
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Left Side - Email & Copyright */}
          <div className="flex flex-col gap-4 md:justify-between items-center md:items-start">
            <p className="text-base md:text-lg font-semibold uppercase text-black">
              PIMSIRIN.P@OUTLOOK.CO.TH
            </p>
            <p className="hidden md:block text-xs md:text-sm text-black">
              ©2025 Pimsirin Prasartset. All rights reserved.
            </p>
          </div>

          {/* Right Side - Navigation and Social Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
            {/* Navigation Links */}
            <div className="flex flex-col gap-3 items-center md:items-start">
              <a href="#home" className="text-base md:text-lg font-semibold uppercase text-black hover:opacity-70 transition-opacity">
                HOME
              </a>
              <a href="#about" className="text-base md:text-lg font-semibold uppercase text-black hover:opacity-70 transition-opacity">
                ABOUT
              </a>
              <a href="#work" className="text-base md:text-lg font-semibold uppercase text-black hover:opacity-70 transition-opacity">
                WORK
              </a>
              <a href="#contact" className="text-base md:text-lg font-semibold uppercase text-black hover:opacity-70 transition-opacity">
                CONTACT
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3 items-center md:items-start">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold uppercase text-black hover:opacity-70 transition-opacity">
                LINKEDIN
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold uppercase text-black hover:opacity-70 transition-opacity">
                GITHUB
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold uppercase text-black hover:opacity-70 transition-opacity">
                BEHANCE
              </a>
            </div>
          </div>
        </div>

        {/* Copyright on mobile (below links) */}
        <div className="mt-8 md:hidden text-center">
          <p className="text-xs text-black">
            ©2025 Pimsirin Prasartset. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}