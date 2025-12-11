'use client'

import { useState } from 'react';
import Container from "@/components/ui/Container";
import Image from 'next/image';

interface ContactProps {
  onSectionChange?: (section: 'home' | 'about' | 'projects' | 'contact') => void;
}

export default function Contact({ onSectionChange }: ContactProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactItems = [
    {
      label: "RESUME",
      href: "#about",
      external: false,
      isMessage: false,
      isResume: true
    },
    {
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/suro-kim",
      external: true,
      isMessage: false
    },
    {
      label: "MESSAGE",
      href: "#",
      external: false,
      isMessage: true
    }
  ];

  const handleItemClick = (item: typeof contactItems[0], e: React.MouseEvent) => {
    if (item.isMessage) {
      e.preventDefault();
      setShowForm(true);
    } else if (item.isResume && onSectionChange) {
      e.preventDefault();
      onSectionChange('about');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formDataToSend = new FormData(e.currentTarget);
    formDataToSend.append("access_key", "2de06322-d481-44b8-b472-cfd48424cdfe");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Success! Your message has been sent.");
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setResult("Error: " + (data.message || "Something went wrong. Please try again."));
      }
    } catch (error) {
      setResult("Error: Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen flex flex-col justify-end bg-white pb-8 md:pb-16"
    >
      <Container className="w-full mb-5">
        {!showForm ? (
          <div className="flex flex-col">
            {contactItems.map((item, index) => (
              <a
                key={index} 
                href={item.href}
                onClick={(e) => handleItemClick(item, e)}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-4 md:py-6 border-b-2 border-black cursor-pointer transition-all duration-300 ease-in-out md:hover:pl-4"
              >
                <h2 className="text-2xl md:text-4xl font-bold uppercase text-black transition-all duration-300 ease-in-out">
                  {item.label}
                </h2>
                <Image 
                  src="/arrow.png" 
                  alt="arrow" 
                  width={40}
                  height={40}
                  className="w-6 h-6 md:w-8 md:h-8 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                />
              </a>
            ))}
          </div>
        ) : (
          <div className="flex flex-col">
            {/* Back Button */}
            <button
              onClick={() => setShowForm(false)}
              className="self-start mb-8 cursor-pointer"
            >
              <Image 
                src="/reply.png" 
                alt="back arrow" 
                width={40}
                height={40}
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </button>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-12">
              {/* Name Field */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xl md:text-2xl font-bold uppercase text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="[YOUR NAME]"
                  className="text-xl md:text-2xl font-bold text-black bg-transparent border-0 border-b-2 border-black focus:outline-none focus:border-black pb-2"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xl md:text-2xl font-bold uppercase text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="[YOUR EMAIL]"
                  className="text-xl md:text-2xl font-bold text-black bg-transparent border-0 border-b-2 border-black focus:outline-none focus:border-black pb-2"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xl md:text-2xl font-bold uppercase text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="[YOUR MESSAGE]"
                  rows={4}
                  className="text-xl md:text-2xl font-bold text-black bg-transparent border-0 border-b-2 border-black focus:outline-none focus:border-black pb-2 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-end gap-4 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Image 
                    src="/arrow.png" 
                    alt="submit" 
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </button>
                {result && (
                  <p className={`text-base md:text-lg font-semibold uppercase ${
                    result.includes("Success") ? "text-green-600" : "text-red-600"
                  }`}>
                    {result}
                  </p>
                )}
              </div>
            </form>
          </div>
        )}
      </Container>
    </section>
  );
}
