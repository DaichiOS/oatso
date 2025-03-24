'use client';

import { useEffect, useState } from 'react';

export default function Tagline() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <p 
      className={`text-white/80 text-lg md:text-xl font-light mb-8 text-center max-w-md px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      Premium overnight oats, ready when you are.
    </p>
  );
} 