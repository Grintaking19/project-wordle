import React from "react";

function LossingBanner({ answer }) {
  return (
    <div className="lossing-banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default LossingBanner;