import React, { useState, useRef } from 'react';
import Controls from './components/Controls.jsx';
import Grid from './components/Grid.jsx';

const App = () => {
  const [currentDirection, setCurrentDirection] = useState('right');
  const currentPosition = useRef([0, 0]);
  const oldPosition = useRef([0, 0]);
  const [grid, setGrid] = useState([
    ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ]);
  return (
    <section>
      <Controls
        oldPosition={oldPosition}
        currentPosition={currentPosition}
        currentDirection={currentDirection}
        grid={grid}
        setCurrentDirection={setCurrentDirection}
        setGrid={setGrid}
      />
      <Grid grid={grid} />
    </section>
  );
};

export default App;
