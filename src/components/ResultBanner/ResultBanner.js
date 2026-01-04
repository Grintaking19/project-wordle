import React from 'react';
import WinningBanner from './WinningBanner';
import LossingBanner from './LossingBanner';
import {sample} from "../../utils";
import {WORDS} from "../../data";
function ResultBanner({ isWinning, currentGuess, NUM_OF_GUESSES_ALLOWED, answer, resetGame }) {
  return (<div className="result-banner">
    {(isWinning && currentGuess <= NUM_OF_GUESSES_ALLOWED)  ? <WinningBanner currentGuess={currentGuess} /> : <LossingBanner answer={answer} />}
    
  </div>);
}

export default ResultBanner;
