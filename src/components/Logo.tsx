import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 44 }: LogoProps) {
  return (
    <div id="firm-logo-container" className={`inline-flex items-center justify-center ${className}`}>
      <svg
        id="firm-logo-svg"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="fill-none duration-300 transition-transform"
      >
        <defs>
          {/* Rich metallic gold gradient to match the premium 3D gold look in the image */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF1B5" />
            <stop offset="25%" stopColor="#E5C05B" />
            <stop offset="50%" stopColor="#C49B32" />
            <stop offset="75%" stopColor="#DFB64C" />
            <stop offset="100%" stopColor="#9C731A" />
          </linearGradient>

          {/* Golden glow drop-shadow style matching the spotlighting reflection */}
          <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#9C731A" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Monogram Group with premium drop glow */}
        <g id="monogram-group" filter="url(#goldGlow)">
          {/* Top Horizontal Crown Bar */}
          <path
            id="logo-top-crown"
            d="M 22,14 H 78 L 75,20 H 25 Z"
            fill="url(#goldGradient)"
          />

          {/* Left Block - G
              Constructed as a single path using EvenOdd fill rule:
              - Outer shield shape boundary
              - Subpath 1: Cutout for upper G hook + mouth
              - Subpath 2: Cutout for lower G slanted inner space
          */}
          <path
            id="logo-g-body"
            d="M 28,23 H 48 V 85 L 25,68 V 27 Z 
               M 32,29 H 42 V 35 H 48 V 41 H 32 Z 
               M 32,47 H 42 V 70 L 32,62 Z"
            fill="url(#goldGradient)"
            fillRule="evenodd"
          />

          {/* Right Block - S
              Constructed as a single path using EvenOdd fill rule:
              - Outer shield shape boundary
              - Subpath 1: Cutout for upper S left-facing opening + inner loop
              - Subpath 2: Cutout for lower S right-facing opening + slanted inner loop
          */}
          <path
            id="logo-s-body"
            d="M 52,23 H 72 L 75,27 V 68 L 52,85 Z 
               M 52,35 H 58 V 29 H 69 V 41 H 52 Z 
               M 75,47 H 58 V 62 L 68,70 V 53 H 75 Z"
            fill="url(#goldGradient)"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
}
