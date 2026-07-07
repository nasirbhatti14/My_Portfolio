/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Terminal, ArrowDownToLine, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import TypingHeadline from './components/TypingHeadline';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalSimulator from './components/TerminalSimulator';
import { personalInfo, generateTextResume } from './data';
// @ts-ignore
import avatarImg from './assets/images/nasir_avatar_1783373283273.jpg';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const handleDownloadResume = async () => {
    try {
      // Fetch the actual file to get its content type and blob safely
      const response = await fetch('/resume.pdf');
      const contentType = response.headers.get('content-type') || '';
      
      // Ensure it is a valid PDF and not the fallback index.html (text/html)
      if (response.ok && contentType.toLowerCase().includes('pdf')) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Nasir_Iqbal_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        return;
      }
    } catch (e) {
      console.warn('PDF fetch failed, falling back to text resume:', e);
    }

    // Fallback: Generate structured elegant text resume if PDF is missing or still being cached
    const resumeText = generateTextResume();
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Nasir_Iqbal_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased overflow-x-hidden selection:bg-violet-600/30 selection:text-violet-200">
      
      {/* Background Animated Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-900/15 blur-[120px] animated-bg-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-900/10 blur-[120px] animated-bg-glow" style={{ animationDelay: '-5s' }} />
      </div>

      {/* Navigation */}
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Hero Section */}
      <header id="home" className="pt-24 pb-12 md:pt-32 md:pb-16 relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
            {/* Left Content Column */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              
              {/* Introduction Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-800/30 text-violet-300 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to work</span>
              </div>

              {/* Name Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-zinc-100">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-400">{personalInfo.name}</span>
              </h1>

              {/* Typing Subtitle */}
              <div className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-medium">
                <TypingHeadline />
              </div>

              {/* Tagline */}
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                {personalInfo.tagline}
              </p>

              {/* Call-to-actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                
                <a
                  href="#contact"
                  className="w-full sm:w-auto text-xs font-sans flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-violet-950/30 hover:shadow-violet-900/40 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Contact Me
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleDownloadResume}
                  className="w-full sm:w-auto text-xs font-sans flex items-center justify-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white px-6 py-3.5 border border-zinc-800 hover:border-zinc-700 rounded-xl font-bold hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <ArrowDownToLine className="w-4 h-4" />
                  Download Resume
                </button>

                <div className="flex items-center gap-3 mt-2 sm:mt-0">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

              </div>

              {/* Micro specs row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 pt-6 text-xs text-zinc-500 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-violet-500" />
                  {personalInfo.location}
                </span>
                <span className="hidden sm:inline text-zinc-800">•</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1 hover:text-violet-400 transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-violet-500" />
                  {personalInfo.email}
                </a>
              </div>

            </div>

            {/* Right Picture Column */}
            <div className="flex-shrink-0 relative">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-500 rounded-full blur-xl opacity-35 scale-105 animate-[pulse_6s_infinite]" />

              {/* Picture Frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-zinc-800 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 relative">
                  
                  {/* Avatar img */}
                  <img
                    src={avatarImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Glass overlay reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                </div>
              </div>

            </div>

          </div>
        </div>
      </header>

      {/* Main Sections */}
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects onOpenTerminal={() => setIsTerminalOpen(true)} />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Terminal Sandbox Modal */}
      <TerminalSimulator 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />

    </div>
  );
}

