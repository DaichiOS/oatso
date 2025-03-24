'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BrandLogo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Link href="/">
        <div 
          className="w-[300px] md:w-[400px] lg:w-[480px] relative cursor-pointer transition-transform duration-300 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.03)' : 'scale(1)' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main logo with enhanced visibility */}
          <div className="relative">
            {/* Logo image - larger and bolder */}
            <Image 
              src="/logos/oatso2.png"
              alt="Oatso logo"
              width={1500}
              height={600}
              priority
              className={`w-full h-auto object-contain relative drop-shadow-[0_5px_8px_rgba(0,0,0,0.4)] filter brightness-[1.1] contrast-[1.1] transition-all duration-300 ${isHovered ? 'brightness-[1.15] drop-shadow-[0_6px_10px_rgba(0,0,0,0.5)]' : ''}`}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </Link>
    </div>
  );
} 