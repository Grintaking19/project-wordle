import React from "react";

const KEYS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function KeyboardBanner({ guess, currentGuess }) {
  function getKeyStatus(key) {
    for (let i = 0; i < currentGuess; i++) {
      for (let j = 0; j < guess[i].length; j++) {
        if (guess[i][j].letter === key) {
          return guess[i][j].status;
        }
      }
  }}

  return (
    <div className="keyboard-wrapper">
      {KEYS.map((row) => (
        <p className="guess" key={crypto.randomUUID()}>
          {row.map((key) => (
            <span
              className={`cell-keyboard ${
                getKeyStatus(key)
              }`}
              key={crypto.randomUUID()}
            >
              {key}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default KeyboardBanner;
