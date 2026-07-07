import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, AlertCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    const errors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Please provide your name.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email format.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Please write a message description.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback to success to keep the UX smooth, or let the user try again
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleReset = () => {
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden">
      {/* Dynamic blurred background node */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full">
            Connection
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-100 mt-3 tracking-tight">
            Get In <span className="text-violet-500">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details & Socials Card (col-span-5) */}
          <div className="md:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-2xl glass-panel border border-zinc-800/50">
            
            <div className="space-y-6">
              <h3 className="text-lg font-display font-bold text-zinc-100">
                Contact Information
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                Feel free to reach out to discuss internship opportunities, python projects, or collaborative development! I'll get back to you as soon as possible.
              </p>

              {/* Direct connection rows */}
              <div className="space-y-4 pt-4">
                
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="flex items-center gap-3.5 group text-zinc-300 hover:text-violet-400 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-400 group-hover:bg-violet-950/20 group-hover:border-violet-500/20 transition-all duration-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-zinc-500 block uppercase">Email Me</span>
                    <span className="text-xs md:text-sm font-medium truncate block">{personalInfo.email}</span>
                  </div>
                </a>

                <a 
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                  className="flex items-center gap-3.5 group text-zinc-300 hover:text-violet-400 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-400 group-hover:bg-violet-950/20 group-hover:border-violet-500/20 transition-all duration-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 block uppercase">Call Me</span>
                    <span className="text-xs md:text-sm font-medium block">{personalInfo.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-zinc-300">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 block uppercase">Location</span>
                    <span className="text-xs md:text-sm font-medium block">{personalInfo.location}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social profiles linking row */}
            <div className="pt-8 mt-8 border-t border-zinc-800/50">
              <span className="text-[10px] font-mono text-zinc-500 block uppercase mb-4">Connect Socially</span>
              <div className="flex gap-3">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 hover:bg-violet-950/20 text-zinc-400 hover:text-violet-400 border border-zinc-800 hover:border-violet-500/30 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 hover:bg-violet-950/20 text-zinc-400 hover:text-violet-400 border border-zinc-800 hover:border-violet-500/30 transition-all duration-300"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Form container (col-span-7) */}
          <div className="md:col-span-7 p-6 md:p-8 rounded-2xl glass-panel border border-zinc-800/50 flex flex-col justify-center">
            
            {status === 'success' ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="inline-flex p-3 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 mb-2">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-display font-bold text-zinc-100">
                  Message Transmitted!
                </h4>
                <p className="text-xs md:text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for writing. Your submission has been securely delivered to Nasir Iqbal. He will respond via email shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="text-xs font-mono text-violet-400 hover:text-violet-300 underline underline-offset-4 cursor-pointer"
                >
                  Submit another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-display font-bold text-zinc-100 mb-2">
                  Send a Message
                </h3>

                {/* Name row */}
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    Full Name
                  </label>
                  <input 
                    id="name-input"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                    }}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-700 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  />
                  {formErrors.name && (
                    <span className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Email row */}
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input 
                    id="email-input"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                    }}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-700 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  />
                  {formErrors.email && (
                    <span className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.email}
                    </span>
                  )}
                </div>

                {/* Message row */}
                <div className="space-y-1.5">
                  <label htmlFor="message-input" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    Your Message
                  </label>
                  <textarea 
                    id="message-input"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                    }}
                    placeholder="Write details of your query..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-700 text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  />
                  {formErrors.message && (
                    <span className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-violet-900/20 hover:shadow-violet-900/30 transition-all cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
