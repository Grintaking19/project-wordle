import React from 'react';

function WinningBanner({ currentGuess }) {
    return (
        <div className="winning-banner">
            <p><strong>Congratulations!</strong> Got it in <strong>{currentGuess}</strong> guesses.</p>
        </div>);
    
}

export default WinningBanner;