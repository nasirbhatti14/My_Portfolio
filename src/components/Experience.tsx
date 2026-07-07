import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { timelineItems } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16 relative overflow-hidden bg-zinc-950/25">
      {/* Light design lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full">
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-100 mt-3 tracking-tight">
            Education & <span className="text-violet-500">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          
          {timelineItems.map((item, idx) => {
            const isEdu = item.type === 'education';

            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline node icon */}
                <span className={`absolute -left-[53px] md:-left-[69px] top-1.5 flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-950 border transition-all duration-300 group-hover:scale-110 ${
                  isEdu 
                    ? 'border-violet-500/40 text-violet-400 shadow-sm shadow-violet-900/20 group-hover:border-violet-500' 
                    : 'border-fuchsia-500/40 text-fuchsia-400 shadow-sm shadow-fuchsia-900/20 group-hover:border-fuchsia-500'
                }`}>
                  {isEdu ? <GraduationCap className="w-5 h-5" /> : <Briefcase className="w-4 h-4" />}
                </span>

                {/* Main panel card */}
                <div className="p-6 md:p-8 rounded-2xl glass-panel border border-zinc-800/50 group-hover:border-zinc-800 transition-all duration-300 relative">
                  
                  {/* Subtle category tag top-right */}
                  <span className={`absolute top-6 right-6 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${
                    isEdu 
                      ? 'bg-violet-950/20 text-violet-300 border-violet-900/40' 
                      : 'bg-fuchsia-950/20 text-fuchsia-300 border-fuchsia-900/40'
                  }`}>
                    {item.type}
                  </span>

                  {/* Period & Location row */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-violet-500" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {item.location}
                      </span>
                    )}
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl font-display font-bold text-zinc-100 mb-1 group-hover:text-violet-400 transition-colors">
                    {item.role}
                  </h3>

                  {/* Organization name */}
                  <p className="text-sm font-medium text-zinc-300 mb-4 font-sans">
                    {item.organization}
                  </p>

                  {/* Details Bullet list */}
                  <ul className="space-y-2.5">
                    {item.details.map((detail, bulletIdx) => (
                      <li key={bulletIdx} className="text-sm text-zinc-400 leading-relaxed font-light flex items-start">
                        <span className="text-violet-500 mr-2.5 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
