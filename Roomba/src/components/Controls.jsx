import React from 'react';

const Controls = ({
  currentDirection,
  currentPosition,
  oldPosition,
  grid,
  setCurrentDirection,
  setGrid,
}) => {
  const changeDirection = () => {
    if (currentDirection === 'left') setCurrentDirection('up');
    else if (currentDirection === 'right') setCurrentDirection('down');
    else if (currentDirection === 'down') setCurrentDirection('left');
    else setCurrentDirection('right');
  };
  const move = () => {
    let [x, y] = currentPosition.current;
    if (currentDirection === 'left') {
      if (y - 1 < 0) return changeDirection();
      currentPosition.current = [x, y - 1];
    } else if (currentDirection === 'right') {
      if (y + 1 === grid[0].length) return changeDirection();
      currentPosition.current = [x, y + 1];
    } else if (currentDirection === 'down') {
      if (x + 1 === grid.length) return changeDirection();
      currentPosition.current = [x + 1, y];
    } else if (currentDirection === 'up') {
      if (x - 1 < 0) return changeDirection();
      currentPosition.current = [x - 1, y];
    }
    oldPosition.current = [x, y];
    const [newX, newY] = currentPosition.current;
    const [oldX, oldY] = oldPosition.current;
    const deepCopyGrid = JSON.parse(JSON.stringify(grid));
    deepCopyGrid[newX][newY] = 'X';
    deepCopyGrid[oldX][oldY] = '0';

    setGrid(deepCopyGrid);
  };
  return (
    <div>
      <div>
        <label>Current Direction:</label>
        <p>{currentDirection}</p>
      </div>
      <button onClick={move}>forward</button>
      <button onClick={changeDirection}>clockwise</button>
    </div>
  );
};

export default Controls;
