import React, { useState, useEffect } from 'react';

const phrases = [
  'Software Engineering Student',
  'Python Developer'
];

export default function TypingHeadline() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [subtext, setSubtext] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = phrases[phraseIdx];

    if (!isDeleting) {
      // Typing cycle
      timer = setTimeout(() => {
        setSubtext(currentFullText.substring(0, subtext.length + 1));
        setTypingSpeed(100); // stable normal typing speed
      }, typingSpeed);

      if (subtext === currentFullText) {
        // Finished typing phrase, hold for a moment before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting cycle
      timer = setTimeout(() => {
        setSubtext(currentFullText.substring(0, subtext.length - 1));
        setTypingSpeed(45); // faster deletion
      }, typingSpeed);

      if (subtext === '') {
        // Finished deleting, go to next phrase
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [subtext, isDeleting, phraseIdx, typingSpeed]);

  return (
    <span className="inline-flex items-center min-h-[30px] md:min-h-[40px]">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 font-semibold tracking-tight">
        {subtext}
      </span>
      <span className="ml-1 w-0.5 h-6 md:h-8 bg-violet-400 animate-[pulse_0.8s_infinite] inline-block font-thin" style={{ opacity: 0.8 }} />
    </span>
  );
}
