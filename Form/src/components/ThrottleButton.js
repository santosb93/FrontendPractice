import React, { useState } from 'react';

const ThrottleButton = () => {
  const [counter, setCounter] = useState(0);
  let throttleTimer;

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const throttle = (cb, timer) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
      throttleTimer = false;
      cb();
    }, timer);
  };

  return (
    <div>
      <h1>Throttle Counter: {counter}</h1>
      <button
        onClick={() => {
          throttle(handleClick, 300);
        }}
      >
        Throttle Click
      </button>
    </div>
  );
};

export default ThrottleButton;
