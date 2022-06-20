import React, { useState } from 'react';

const DebounceButton = () => {
  const [counter, setCounter] = useState(0);
  let debounceTimer;

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const debounce = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(handleClick, 300);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={debounce}>Debounce Click</button>
    </div>
  );
};

export default DebounceButton;
