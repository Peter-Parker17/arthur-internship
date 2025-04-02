import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialSeconds }) {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);

  useEffect(() => {
    if (secondsRemaining > 0) {
      const timerId = setInterval(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [secondsRemaining]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div>
      Time remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default CountdownTimer;