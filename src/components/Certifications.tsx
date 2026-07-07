import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 md:py-16 relative overflow-hidden bg-zinc-950/25">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-100 mt-3 tracking-tight">
            Certifications & <span className="text-violet-500">Badges</span>
          </h2>
          <div className="w-12 h-1 bg-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificate Display */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl mx-auto">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="p-6 md:p-8 rounded-2xl glass-panel border border-violet-500/10 hover:border-violet-500/25 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start relative group overflow-hidden"
            >
              {/* Highlight vector outline */}
              <div className="absolute -left-16 -bottom-16 w-36 h-36 bg-violet-500/5 rounded-full group-hover:bg-violet-500/10 transition-colors duration-300" />

              {/* Left Column Badge */}
              <div className="p-4 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 shrink-0 self-start md:self-center">
                <Award className="w-8 h-8" />
              </div>

              {/* Right Column details */}
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-violet-400 font-semibold uppercase tracking-wider bg-violet-950/50 border border-violet-900/30 px-2 py-0.5 rounded">
                    Verified Certificate
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{cert.date}</span>
                </div>

                <h3 className="text-lg md:text-xl font-display font-bold text-zinc-100 group-hover:text-violet-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm text-violet-300 font-medium font-sans">
                  {cert.issuer}
                </p>

                <p className="text-sm text-zinc-400 leading-relaxed font-light pt-2">
                  {cert.description}
                </p>

                {/* Bullet points of certificate skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    REST Architecture & Views
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Serializers & Validation
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Authentication Models
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Query Routing & Relational Mapping
                  </span>
                </div>

                {cert.credentialUrl && (
                  <div className="pt-5">
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors bg-violet-500/10 hover:bg-violet-500/15 border border-violet-500/20 hover:border-violet-500/30 px-4 py-2 rounded-xl font-medium group/btn"
                    >
                      <ShieldCheck className="w-4 h-4 text-violet-400" />
                      Verify Certificate
                    </a>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
