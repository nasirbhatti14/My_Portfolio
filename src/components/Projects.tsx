import React from 'react';
import { FolderGit2, Terminal, Code2, ExternalLink, ArrowUpRight, Hourglass } from 'lucide-react';
import { projects } from '../data';

interface ProjectsProps {
  onOpenTerminal: () => void;
}

export default function Projects({ onOpenTerminal }: ProjectsProps) {
  return (
    <section id="projects" className="py-12 md:py-16 relative overflow-hidden">
      {/* Light design circles */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-100 mt-3 tracking-tight">
            Featured <span className="text-violet-500">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {projects.map((project) => {
            const isActive = project.status === 'active';

            return (
              <div 
                key={project.id}
                className={`flex flex-col justify-between p-6 md:p-8 rounded-2xl glass-panel border transition-all duration-300 relative overflow-hidden group ${
                  isActive 
                    ? 'border-violet-500/10 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-950/10' 
                    : 'border-zinc-800/30 hover:border-zinc-800/60 opacity-80'
                }`}
              >
                {/* Background decorative path for active projects */}
                {isActive && (
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-all duration-300" />
                )}

                <div>
                  {/* Icon and status badge row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl border ${
                      isActive 
                        ? 'bg-violet-600/10 border-violet-500/25 text-violet-400' 
                        : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-500'
                    }`}>
                      {isActive ? <Terminal className="w-5 h-5" /> : <Hourglass className="w-5 h-5" />}
                    </div>

                    {/* Status Badge */}
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                      isActive 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                        : 'bg-zinc-900/60 text-zinc-500 border-zinc-800'
                    }`}>
                      {isActive ? 'Active' : 'Coming Soon'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-display font-bold mb-3 transition-colors ${
                    isActive ? 'text-zinc-100 group-hover:text-violet-400' : 'text-zinc-400'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                {/* Footer section inside card */}
                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isActive 
                            ? 'bg-zinc-900/80 text-violet-300 border border-violet-900/20' 
                            : 'bg-zinc-900/30 text-zinc-600 border border-zinc-800/40'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  {isActive ? (
                    <div className="flex flex-wrap gap-3">
                      {project.hasTerminalSimulator && (
                        <button
                          onClick={onOpenTerminal}
                          className="flex-1 text-xs font-sans flex items-center justify-center gap-1.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-violet-900/20 hover:shadow-violet-900/30 transition-all cursor-pointer"
                        >
                          <PlayIcon className="w-3.5 h-3.5" />
                          Run CLI Demo
                        </button>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-sans flex items-center justify-center gap-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 px-3.5 py-2.5 rounded-xl transition-colors"
                        >
                          Code <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="h-10 border border-dashed border-zinc-800/40 rounded-xl flex items-center justify-center">
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        Development in queue
                      </span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}

        </div>

        {/* Big terminal Call-To-Action banner */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-violet-950/20 via-zinc-950/80 to-zinc-950 border border-violet-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-display font-bold text-lg text-zinc-200">
              Want to see his code work live?
            </h4>
            <p className="text-xs md:text-sm text-zinc-400 font-light">
              We simulated Nasir's original Command Line expense tracker inside our virtual terminal. Log some items, compute spending, and verify the I/O logic.
            </p>
          </div>
          <button
            onClick={onOpenTerminal}
            className="whitespace-nowrap flex items-center gap-2 text-xs font-sans bg-zinc-900 hover:bg-zinc-800 text-violet-300 hover:text-white px-5 py-3 border border-violet-500/25 hover:border-violet-500/50 rounded-xl font-bold transition-all cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            Launch Terminal Sandbox
          </button>
        </div>

      </div>
    </section>
  );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
