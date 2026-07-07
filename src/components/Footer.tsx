import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-zinc-900 pb-8 mb-8">
          
          {/* Left Brand */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="p-1.5 rounded-lg bg-violet-600/10 border border-violet-500/25">
              <Terminal className="w-4 h-4 text-violet-400" />
            </div>
            <span className="font-display font-bold text-base text-zinc-100 tracking-tight">
              NASIR <span className="text-violet-500">IQBAL</span>
            </span>
          </a>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((link, idx) => (
              <a 
                key={idx}
                href={link.href} 
                className="text-xs font-sans text-zinc-400 hover:text-violet-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

        {/* Copyright section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span>
            © 2026 Nasir Iqbal. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
