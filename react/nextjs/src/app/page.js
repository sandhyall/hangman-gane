'use client'
import React, { useState, useEffect } from 'react';
import Header from './Component/Header/page';
import Figure from './Component/Figure/page';
import Wrongletter from './Component/WrongLetter/page';
import Word from './Component/Word/page';

// Words to choose from
const words = ['application', 'programming', 'interface', 'wizard'];
const selectWord = words[Math.floor(Math.random() * words.length)];

const Hangman = () => {
  // States for game status, correct and wrong letters
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  // Handle keydown event
  const handleKeyDown = (e) => {
    if (playable) {
      const letter = e.key.toLowerCase();

      // Check if the key pressed is a letter (A-Z)
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (selectWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            // Update correct letters state
            setCorrectLetters((prev) => [...prev, letter]);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            // Update wrong letters state
            setWrongLetters((prev) => [...prev, letter]);
          }
        }
      }
    }
  };

  // UseEffect hook to add and clean up event listener
  useEffect(() => {
    // Add keydown event listener
    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [correctLetters, wrongLetters, playable]);  // Corrected wrongLetter to wrongLetters

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <Header />
      <Figure />
      <Wrongletter wrongLetters={wrongLetters} />
      <Word selectedWord={selectWord} correctLetters={correctLetters} />
    </div>
  );
};

export default Hangman;
