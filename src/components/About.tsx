import React from 'react';
import { GraduationCap, BookOpen, User, ClipboardList } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  const coursework = [
    'Object Oriented Programming & Algorithms',
    'Database Systems (DBMS)',
    'Digital Logic Designs (DLD)',
    'Python Fundamentals',
    'Discrete Mathematics',
    'Data Structures & Algorithms'
  ];

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden bg-zinc-950/25">
      {/* Subtle backdrop circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-violet-900/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full">
            Biography
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-100 mt-3 tracking-tight">
            About <span className="text-violet-500">Me</span>
          </h2>
          <div className="w-12 h-1 bg-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Bio card */}
          <div className="md:col-span-7 flex flex-col justify-between p-6 md:p-8 rounded-2xl glass-panel border border-zinc-800/50">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-zinc-100">
                  Professional Summary
                </h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base font-light">
                {personalInfo.bio}
              </p>
            </div>
            
            {/* Quick stats / facts */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-zinc-800/50">
              <div>
                <span className="text-xs text-zinc-500 block">Current Status</span>
                <span className="text-sm font-medium text-zinc-200">SE Sophomore (Year 2)</span>
              </div>
              <div>
                <span className="text-xs text-zinc-500 block">Availability</span>
                <span className="text-sm font-medium text-emerald-400">Internship Ready</span>
              </div>
            </div>
          </div>

          {/* Education & Coursework side */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl glass-panel border border-zinc-800/50 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-zinc-100">
                  Education
                </h3>
              </div>
              
              <div className="space-y-2 pl-1">
                <h4 className="text-sm font-bold text-zinc-200">
                  Bachelor of Software Engineering
                </h4>
                <p className="text-xs font-mono text-zinc-400">
                  The Islamia University of Bahawalpur (IUB)
                </p>
                <div className="flex items-center justify-between mt-3 pt-2 text-xs">
                  <span className="text-zinc-400">2025 - 2029</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-semibold">
                    GPA: 3.69 / 4.00
                  </span>
                </div>
              </div>
            </div>

            {/* Coursework Card */}
            <div className="p-6 rounded-2xl glass-panel border border-zinc-800/50 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-zinc-100">
                  Relevant Coursework
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {coursework.map((course, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-zinc-900/60 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
