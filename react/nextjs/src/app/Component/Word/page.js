import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="flex space-x-2">
      {selectedWord.split('').map((letter, i) => (
        <span key={i} className="text-2xl font-semibold">
          {correctLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default Word;
