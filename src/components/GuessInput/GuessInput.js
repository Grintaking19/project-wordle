import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess, isWinningGuess } from "../../game-helpers";
function GuessInput({
  guess,
  setGuess,
  currentGuess,
  setCurrentGuess,
  answer,
  isWinning,
  setIsWinning,
}) {
  // function evaluteGuesses(answer, guess, currentGuess) {
  //   let output = [];
  //   for (let i = 0; i < currentGuess; i++) {
  //     output.push(checkGuess(guess[i], answer));
  //   }
  //   setGuessResult(output)
  // }
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (currentGuess < NUM_OF_GUESSES_ALLOWED) {
          const updatedGuesses = [...guess];
          updatedGuesses[currentGuess] = checkGuess(
            event.target.guess.value.toUpperCase(),
            answer
          );
          setGuess(updatedGuesses);
          setCurrentGuess(currentGuess + 1);
          event.target.reset();
          console.log(updatedGuesses);
          if (isWinningGuess(updatedGuesses[currentGuess])) {
            setIsWinning(true);
          }
        }
      }}
    >
      <label htmlFor="guess-input">Enter your guess:</label>
      <input
        id="guess-input"
        type="text"
        name="guess"
        pattern={`[A-Za-z]{5}`}
        required
        autoComplete="off"
        disabled={isWinning || currentGuess >= NUM_OF_GUESSES_ALLOWED}
      />
    </form>
  );
}

export default GuessInput;
