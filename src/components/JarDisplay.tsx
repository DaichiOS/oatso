'use client';

import Image from 'next/image';
import { useState } from 'react';

type JarProps = {
  src: string;
  alt: string;
  label: string;
  isFeatured?: boolean;
};

function Jar({ src, alt, label, isFeatured = false }: JarProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`transform hover:-translate-y-4 hover:scale-105 transition-all duration-300 relative group ${isFeatured ? '-mb-4 z-30' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute -inset-2 rounded-full bg-white/10 filter blur-md transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={800}
        priority
        className={`object-contain relative drop-shadow-lg ${isFeatured ? 'h-[260px] md:h-[370px]' : 'h-[240px] md:h-[350px]'}`}
      />
      <div className={`absolute inset-x-0 -bottom-2 text-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function JarDisplay() {
  return (
    <div className="flex justify-center items-end pb-2 md:pb-4">
      <div className="flex space-x-8 md:space-x-16 relative">
        <Jar 
          src="/images/2.png" 
          alt="Oat jar with fruits" 
          label="Mango" 
        />
        <Jar 
          src="/images/5.png" 
          alt="Oat jar with berries" 
          label="Berry Blast" 
          isFeatured
        />
        <Jar 
          src="/images/6.png" 
          alt="Oat jar with blueberries" 
          label="Blueberry" 
        />
      </div>
    </div>
  );
} 