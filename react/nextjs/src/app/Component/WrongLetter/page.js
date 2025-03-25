import React from 'react';

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div>
      {wrongLetters.length > 0 && <p>Wrong:</p>}
      {wrongLetters
        .map((letter, i) => <span key={i}>{letter}</span>)
        .reduce((acc, curr, index) => 
          index === 0 ? [curr] : [...acc, ', ', curr], []
        )}
    </div>
  );
};

export default WrongLetters;
