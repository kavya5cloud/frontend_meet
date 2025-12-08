import React from 'react';

export const SparkleDoodle: React.FC<{ className?: string }> = ({ className }) => (
  <svg aria-hidden="true" viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 10 L 55 40 L 85 50 L 55 60 L 50 90 L 45 60 L 15 50 L 45 40 Z" />
  </svg>
);

export const ZigZagUnderline: React.FC<{ className?: string }> = ({ className }) => (
  <svg aria-hidden="true" viewBox="0 0 300 30" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 10 Q 20 25, 35 10 T 65 10 T 95 10 T 125 10 T 155 10 T 185 10 T 215 10" />
  </svg>
);

export const CrownDoodle: React.FC<{ className?: string }> = ({ className }) => (
  <svg aria-hidden="true" viewBox="0 0 100 60" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 50 L 15 20 L 35 40 L 50 10 L 65 40 L 85 20 L 90 50 Z" />
    <circle cx="15" cy="15" r="2" fill="currentColor" />
    <circle cx="50" cy="5" r="2" fill="currentColor" />
    <circle cx="85" cy="15" r="2" fill="currentColor" />
  </svg>
);

export const ArrowSwirl: React.FC<{ className?: string }> = ({ className }) => (
  <svg aria-hidden="true" viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M20 80 C 20 80, 40 110, 80 50 C 90 30, 70 10, 50 20 C 30 30, 40 60, 60 70" />
    <path d="M60 70 L 65 60" />
    <path d="M60 70 L 50 72" />
  </svg>
);

export const MessyCircle: React.FC<{ className?: string }> = ({ className }) => (
  <svg aria-hidden="true" viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M60 10 C 30 12 12 30 10 60 C 8 90 30 112 60 110 C 90 108 112 90 110 60 C 108 30 90 12 60 15 C 40 18 20 40 25 60" />
  </svg>
);