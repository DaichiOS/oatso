'use client';

import Image from 'next/image';
import { HTMLAttributes } from 'react';

type SloganProps = {
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  width: string;
  mdWidth: string;
  rotation: number;
  opacity: number;
} & HTMLAttributes<HTMLDivElement>;

export default function SloganElement({
  position,
  width,
  mdWidth,
  rotation,
  opacity,
  className,
  ...props
}: SloganProps) {
  // Convert position object to style object
  const positionStyle: Record<string, string> = {};
  Object.entries(position).forEach(([key, value]) => {
    positionStyle[key] = value;
  });

  return (
    <div
      className={`absolute z-20 transform hover:scale-105 transition-transform ${width} ${mdWidth} ${className || ''}`}
      style={{
        ...positionStyle,
        rotate: `${rotation}deg`,
        opacity: opacity,
      }}
      {...props}
    >
      <Image
        src="/logos/slogan.png"
        alt="Oatso slogan"
        width={300}
        height={80}
        className="w-full h-auto object-contain drop-shadow-md"
      />
    </div>
  );
} 