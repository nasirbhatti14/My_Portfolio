import React, { useEffect, useState } from 'react';
import { Code2, Cpu, Wrench, Shield, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data';

// Helper to match string icon name to Lucide React component
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-5 h-5" />;
    case 'Cpu':
      return <Cpu className="w-5 h-5" />;
    case 'Wrench':
      return <Wrench className="w-5 h-5" />;
    default:
      return <Shield className="w-5 h-5" />;
  }
};

export default function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Staggered fill activation on component load
    const timer = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-12 md:py-16 relative overflow-hidden">
      {/* Light glow elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-100 mt-3 tracking-tight">
            Technical <span className="text-violet-500">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div 
              key={catIdx}
              className="p-6 rounded-2xl glass-panel border border-zinc-800/50 flex flex-col hover:border-violet-500/20 transition-all duration-300"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/25 text-violet-400">
                  {getIconComponent(category.icon)}
                </div>
                <h3 className="font-display font-bold text-zinc-100 text-base md:text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Skills Progress Meters */}
              <div className="space-y-5 flex-1">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-300 font-medium flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-violet-500/60" />
                        {skill.name}
                      </span>
                      <span className="text-violet-400 font-semibold">{skill.level}%</span>
                    </div>
                    
                    {/* Background Bar */}
                    <div className="h-2 w-full bg-zinc-900/80 rounded-full overflow-hidden border border-zinc-800/60">
                      {/* Colored Filler Bar */}
                      <div 
                        className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: animated ? `${skill.level}%` : '0%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Focus note */}
        <div className="mt-12 text-center text-xs text-zinc-500 font-sans max-w-lg mx-auto">
          Currently expanding portfolio to include advanced microservices architectures, test-driven Python workflows, and enterprise relational database query optimization.
        </div>

      </div>
    </section>
  );
}
