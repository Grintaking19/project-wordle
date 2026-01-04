import React from "react";
import { range } from "../../utils";
function DisplayGuesses({guess, currentGuess }) {
  return (
    <div className="guess-results">
      {guess.map((item, index) => (
        <p className="guess" key={crypto.randomUUID()}>
          {
          range(0, 5).map((num) => (
            <span
              className={`cell ${
                index < currentGuess ? item[num]?.status : ""
              }`}
              key={crypto.randomUUID()}
            >
              {index < currentGuess ? item[num]?.letter : ""}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default DisplayGuesses;
