import React from 'react';
import WinningBanner from './WinningBanner';
import LossingBanner from './LossingBanner';
function ResultBanner({ isWinning, currentGuess, NUM_OF_GUESSES_ALLOWED, answer }) {
  return (<>
    {(isWinning && currentGuess <= NUM_OF_GUESSES_ALLOWED)  ? <WinningBanner currentGuess={currentGuess} /> : <LossingBanner answer={answer} />}
  </>);
}

export default ResultBanner;
