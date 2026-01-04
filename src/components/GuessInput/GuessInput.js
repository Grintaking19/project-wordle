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
  resetGame,
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
    <div className="input-reset-wrapper">
      <input
        id="guess-input"
        type="text"
        name="guess"
        pattern={`[A-Za-z]{5}`}
        required
        autoComplete="off"
        disabled={isWinning || currentGuess >= NUM_OF_GUESSES_ALLOWED}
      />
      {(isWinning || currentGuess >= NUM_OF_GUESSES_ALLOWED) && <button className="reset-button" onClick={() =>{
      resetGame();
    } }>
      <img src='https://img.icons8.com/?size=100&id=61117&format=png&color=000000' alt='Reset Game'/>
    </button>}
    </div>
    </form>
  );
}

export default GuessInput;
