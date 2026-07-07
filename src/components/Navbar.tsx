import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowDownToLine } from 'lucide-react';
import { personalInfo, generateTextResume } from '../data';

interface NavbarProps {
  onDownloadResume: () => void;
}

export default function Navbar({ onDownloadResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="p-1.5 rounded-lg bg-violet-600/10 border border-violet-500/25 group-hover:bg-violet-600/20 group-hover:border-violet-500/50 transition-all duration-300">
              <Terminal className="w-5 h-5 text-violet-400" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl text-zinc-100 tracking-tight">
              NASIR <span className="text-violet-500">IQBAL</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-1.5 p-1 bg-zinc-900/50 border border-zinc-800/40 rounded-full">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-xs font-sans px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-900/30'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Resume button */}
            <button
              onClick={onDownloadResume}
              className="text-xs font-sans flex items-center gap-1.5 bg-violet-600/10 hover:bg-violet-600 text-violet-300 hover:text-white px-4 py-2 border border-violet-500/30 hover:border-violet-500 rounded-full font-semibold transition-all duration-300 cursor-pointer"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              Resume
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onDownloadResume}
              className="p-2 bg-zinc-900/60 border border-zinc-800 rounded-full text-violet-400 hover:bg-zinc-800 hover:text-violet-300 transition-all"
              title="Download Resume"
            >
              <ArrowDownToLine className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-zinc-900/60 border border-zinc-800 rounded-full text-zinc-400 hover:text-zinc-100 focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 shadow-2xl py-4 px-6 flex flex-col space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm py-2 px-3 rounded-lg font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-violet-600/20 text-violet-300 border-l-2 border-violet-500 pl-3'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onDownloadResume();
            }}
            className="w-full mt-2 text-center text-sm flex items-center justify-center gap-2 bg-violet-600 text-white py-2.5 rounded-lg font-semibold shadow-lg shadow-violet-900/20 hover:bg-violet-500 transition-colors"
          >
            <ArrowDownToLine className="w-4 h-4" />
            Download Resume
          </button>
        </div>
      )}
    </nav>
  );
}
