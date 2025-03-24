'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function WaitlistButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="relative transition-transform duration-300 ease-in-out"
      style={{ 
        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* First glow layer - larger, softer */}
      <div 
        className={`absolute -inset-3 rounded-full filter blur-xl transition-opacity duration-300 ${isHovered ? 'opacity-50' : 'opacity-30'}`} 
        style={{ 
          background: 'linear-gradient(135deg, rgba(255,182,193,0.4) 0%, rgba(255,105,180,0.4) 100%)',
        }}
      />
      
      {/* Second glow layer - sharper, more intense */}
      <div 
        className={`absolute -inset-1 rounded-full filter blur-md transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-60'}`} 
        style={{ 
          background: 'linear-gradient(135deg, rgba(255,192,203,0.7) 0%, rgba(255,105,180,0.7) 100%)',
        }}
      />
      
      {/* Image */}
      <Image 
        src="/logos/waitlist3.png"
        alt="Join the waitlist"
        width={220}
        height={100}
        className="relative z-10 drop-shadow-lg"
      />
    </button>
  );
} 