'use client'
import React from 'react';

const Figure = ({ wrongLetters = [] }) => {
  const errors = wrongLetters.length;

  return (
    <div className="flex justify-center items-center bg-white text-black p-4">
      <svg
        viewBox="0 0 200 250"
        className="w-48 h-64 stroke-current text-gray-700"
        strokeWidth="2"
        fill="none"
      >
        {/* Gallows Structure */}
        <line x1="20" y1="230" x2="180" y2="230" /> {/* Base */}
        <line x1="100" y1="230" x2="100" y2="50" /> {/* Vertical Pole */}
        <line x1="100" y1="50" x2="160" y2="50" /> {/* Horizontal Beam */}
        <line x1="160" y1="50" x2="160" y2="70" /> {/* Rope */}

        {/* Hangman Body Parts */}
        {errors >= 1 && <circle cx="160" cy="90" r="20" />} {/* Head */}
        {errors >= 2 && <line x1="160" y1="110" x2="160" y2="150" />} {/* Body */}
        {errors >= 3 && <line x1="160" y1="130" x2="140" y2="120" />} {/* Left Arm */}
        {errors >= 4 && <line x1="160" y1="130" x2="180" y2="120" />} {/* Right Arm */}
        {errors >= 5 && <line x1="160" y1="150" x2="140" y2="180" />} {/* Left Leg */}
        {errors >= 6 && <line x1="160" y1="150" x2="180" y2="180" />} {/* Right Leg */}
      </svg>
    </div>
  );
};

export default Figure;
