import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import DisplayGuesses from "../DisplayGuesses/DisplayGuesses";
import ResultBanner from "../ResultBanner/ResultBanner";
import KeyboardBanner from "../KeyboardBanner";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const startGuesses = Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () => []);
  const [guess, setGuess] = React.useState(startGuesses);
  const [currentGuess, setCurrentGuess] = React.useState(0);
  const [guessResult, setGuessResult] = React.useState([]);
  const [isWinning, setIsWinning] = React.useState(false);

  console.log(answer);
  return (
    <>
      <DisplayGuesses
        answer={answer}
        guess={guess}
        currentGuess={currentGuess}
      />
      {(isWinning || currentGuess >= NUM_OF_GUESSES_ALLOWED) && (
        <ResultBanner isWinning={isWinning} currentGuess={currentGuess} NUM_OF_GUESSES_ALLOWED={NUM_OF_GUESSES_ALLOWED} answer={answer} />
      )}
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        answer={answer}
        guessResult={guessResult}
        setGuessResult={setGuessResult}
        isWinning={isWinning}
        setIsWinning={setIsWinning}
      />
      <KeyboardBanner guess={guess} currentGuess={currentGuess} />
    </>
  );
}

export default Game;
